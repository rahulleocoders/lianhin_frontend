'use client'
import { Backend_url, Marbletexture } from "@/local_data"
import { updatebathroomSlice } from "@/redux/slices/BathroomSlice"
import axios from "axios"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// let Tab = ({ label, active, onClick }) => { return (<button onClick={onClick} type="button" className={`capitalize flex-1 rounded-3xl py-1 border ${active ? 'bg-primary-color text-white border-primary-color' : 'text-secondary border-secondary'}`}>{label}</button>) }

// commented code is code of old design

let Palletcard = ({ label, img, color, onClick, recommended }) => {
    return (
        <div className=" p-1  border border-secondary flex-1 min-w-[110px] rounded-md cursor-pointer"
            onClick={onClick}>
            <div className=" aspect-square rounded-md overflow-hidden border relative" style={{ background: color ? color : '#707070' }}>
                {img && <Image src={img} alt={img} fill={true} className=" w-full h-full object-cover" />}
                {recommended && <div className=" absolute top-1 left-1 px-1 py-0 bg-green-500 text-white rounded-2xl capitalize text-[10px]">recommended</div>}
            </div>
            <p className=" capitalize text-secondary text-xs mt-1  text-center">{label}</p>
        </div>
    )
}

const SelectMaterial = () => {
    // const [activeTab, setActiveTab] = useState(true)
    const [setsurfaceData, setSetsurfaceData] = useState([])
    const dispatch = useDispatch()
    const pathname = usePathname()
    let currentPage = pathname.split("/")[1]
    const BathroomParameter = useSelector((state) => state.BathroomParameter?.present);
    let bathroom_Active_element = BathroomParameter.ActiveObject.title

    const abortController = new AbortController();
    const fetchData = async () => {
        try {
            const response = await axios.get(`${Backend_url}model/?brand=&color=&surfacefinish=&sort=`, { signal: abortController.signal });
            const data = response.data.data;
            setSetsurfaceData(data)
            // return { [url]: data?.message };
        } catch (error) {
            console.log("object", error)
        }

    };


    useEffect(() => {
        fetchData();
        return () => { abortController.abort(); };
    }, []);




    let ApplySurface = (imgurl) => {
        if (currentPage == "bathroom") {
            dispatch(updatebathroomSlice({ [bathroom_Active_element]: { texture: imgurl } }));
        }
    }

    return (
        <div className=''>
            {/* <div className="flex justify-between mb-3 gap-6">
                <Tab label='surface' active={activeTab} onClick={() => setActiveTab(true)} />
                <Tab label='color' active={!activeTab} onClick={() => setActiveTab(false)} />
            </div> */}
            {/*on second tab call function to  to get the color pallett*/}

            <div className=" flex gap-6 max-h-[52vh] overflow-y-scroll flex-wrap pe-1 pb-1">  {/* max-h-[64vh] */}
                {setsurfaceData?.map((surface) =>
                    <Palletcard key={`${surface.id}${surface.model_name}`}
                        recommended={surface.is_recommended}
                        label={surface.model_name} img={surface.model_image}
                        onClick={() => { ApplySurface(surface.model_image) }}
                    />
                )}
                {Marbletexture?.map((surface, i) =>
                    <Palletcard key={`hhh${i}`}
                        label={surface.lable} img={surface.img}
                        onClick={() => { ApplySurface(surface.img) }}
                    />
                )}

                {/* {activeTab && Marbletexture?.map((pallet, i) => <Palletcard key={`hhh${i}`} onClick={() => console.log('object')} label={pallet.lable} img={pallet.img} />)}
                {!activeTab && ColorPalettes?.map((pallet) => <Palletcard key={pallet.name} onClick={() => console.log('object')} label={pallet.name} color={pallet.color} />)} */}
            </div>
        </div>
    )
}

export default SelectMaterial