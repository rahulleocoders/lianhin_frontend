'use client'
import { Backend_url, Marbletexture } from "@/local_data"
import { updatebathroomSlice } from "@/redux/slices/BathroomSlice"
import { updateCommonStateSlice } from "@/redux/slices/CommonStateSlice"
import { updatelivingroomSlice } from "@/redux/slices/LivingroomSlice"
import axios from "axios"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"

// let Tab = ({ label, active, onClick }) => { return (<button onClick={onClick} type="button" className={`capitalize flex-1 rounded-3xl py-1 border ${active ? 'bg-primary-color text-white border-primary-color' : 'text-secondary border-secondary'}`}>{label}</button>) }

// commented code is code of old design

let Palletcard = ({ label, img, color, onClick, recommended, popular }) => {
    return (
        <div className=" p-1  border border-secondary flex-1 min-w-[110px] rounded-md cursor-pointer max-w-[46%]"
            onClick={onClick}>
            <div className=" aspect-square rounded-md overflow-hidden border relative" style={{ background: color ? color : '#707070' }}>
                {img && <Image src={img} alt={img} fill={true} className=" w-full h-full object-cover" />}
                {recommended && <div className=" absolute top-1 left-1 px-1 py-0 bg-green-500 text-white rounded-2xl capitalize text-[10px]">recommended</div>}
                {popular && <div className=" absolute bottom-1 left-1 px-2 py-0 bg-primary-color text-white rounded-md capitalize text-[10px]">popular</div>}
            </div>
            <p className=" capitalize text-secondary text-xs mt-1  text-center">{label}</p>
        </div>
    )
}

const SelectMaterial = ({ }) => {
    // const [activeTab, setActiveTab] = useState(true)

    const [setsurfaceData, setSetsurfaceData] = useState([])
    const dispatch = useDispatch()
    const pathname = usePathname()
    let currentPage = pathname.split("/")[1]
    const BathroomParameter = useSelector((state) => state.BathroomParameter?.present);
    let bathroom_Active_element = BathroomParameter.ActiveObject.title

    const LivingroomParameter = useSelector((state) => state.LivingroomParameter?.present);
    let livingroom_Active_element = LivingroomParameter.ActiveObject.title
    const filterData = useSelector(state => state.apiResponce.filterData);
    const CommonState = useSelector(state => state.CommonState);
    const SelctFilterData = CommonState.SelctFilterData
    let selected_surface = CommonState?.selected_surface ? CommonState?.selected_surface : ""
    let Is_wall_selected = CommonState?.Is_wall_selected

    // const abortController = new AbortController();
    const fetchData = async () => {
        try {
            const response = await axios.get(`${Backend_url}/model/?brand=${SelctFilterData?.brand ? SelctFilterData?.brand : ""}&collection=${SelctFilterData?.collection ? SelctFilterData?.collection : ""}&series=${SelctFilterData?.series ? SelctFilterData?.series : ""}&color=${SelctFilterData?.color ? SelctFilterData?.color : ""}&surfacefinish=&profile=${SelctFilterData?.profile ? SelctFilterData?.profile : ""}&sort=desc`);
            // const response = await axios.get(`${Backend_url}model/?brand=&color=&surfacefinish=&sort=`, { signal: abortController.signal });
            const data = response.data.data;
            setSetsurfaceData(data)
            dispatch(updateCommonStateSlice({ all_surfaces: data }));

            if (data[0].model_image) {
                dispatch(updatebathroomSlice({ floor: { texture: `${Backend_url}${data[0]?.model_image}` } }));
                dispatch(updatebathroomSlice({ cabibate: { texture: `${Backend_url}${data[0]?.model_image}` } }));
            }
            if (data[1].model_image) {
                dispatch(updatebathroomSlice({ wall: { texture: `${Backend_url}${data[1]?.model_image}` } }));
            }
            // return { [url]: data?.message };
        } catch (error) {
            console.log("object", error)
        }

    };


    useEffect(() => {
        fetchData();
        // return () => { abortController.abort(); };
        // }, []);
    }, [CommonState.SelctFilterData]);

    let ApplySurface = (imgurl) => {
        if (currentPage == "bathroom") {
            dispatch(updatebathroomSlice({ [bathroom_Active_element]: { texture: imgurl } }));
        }
        if (currentPage == "living") {
            dispatch(updatelivingroomSlice({ [livingroom_Active_element]: { texture: imgurl } }));
        }
    }

    let ApplyColor = (color) => {
        if (currentPage == "bathroom") {
            dispatch(updatebathroomSlice({ [bathroom_Active_element]: { color: color } }));
        }
        if (currentPage == "living") {
            dispatch(updatelivingroomSlice({ [livingroom_Active_element]: { color: color } }));
        }
    }



    let ResetFilter = () => {
        dispatch(updateCommonStateSlice({ 'SelctFilterData': {} }));
    }


    return (
        <div className=''>
            {/* <div className="flex justify-between mb-3 gap-6">
                <Tab label='surface' active={activeTab} onClick={() => setActiveTab(true)} />
                <Tab label='color' active={!activeTab} onClick={() => setActiveTab(false)} />
            </div> */}
            {/*on second tab call function to  to get the color pallett*/}

            {/* <div className={`flex gap-6 max-h-[${Is_wall_selected ? '90vh' : '52vh'}] overflow-y-scroll flex-wrap pe-1 pb-1 scroll-smooth`}>  max-h-[64vh] */}
            <div className={`flex gap-6 max-h-[52vh] overflow-y-scroll flex-wrap pe-1 pb-1 scroll-smooth`}>  {/* max-h-[64vh] */}

                {
                    setsurfaceData?.length > 0 ?
                        setsurfaceData.filter((option) => option.model_name.toLowerCase().includes(selected_surface.toLowerCase()))?.map((surface) =>
                            <Palletcard key={`${surface.id}${surface.model_name}`}
                                recommended={surface?.is_recommended}
                                popular={surface?.is_most_popular}
                                label={surface.model_name} img={`${Backend_url}${surface.model_image}`}
                                onClick={() => { ApplySurface(`${Backend_url}${surface.model_image}`) }}
                            />
                        ) :
                        <div className=" text-primary-color py-2 text-center w-full font-bold ">
                            <p>No Surfaces Available</p>
                            <button onClick={() => ResetFilter()} type="button" className=" py-2 rounded-xl w-2/3 mx-auto mt-3 px-3 bg-primary-color text-white">Reset Filter</button>
                        </div>
                }


                {/* {Is_wall_selected ?
                    filterData?.color?.length > 0 ?
                        filterData?.color.map((clr) =>
                            <Palletcard key={`${clr.color_name}`}
                                recommended={false}
                                popular={false}
                                label={clr.color_name}
                                color={clr.color_name}
                                onClick={() => { ApplyColor(clr.color_name) }}
                            />
                        ) :
                        <div className=" text-primary-color py-2 text-center w-full font-bold ">
                            <p className="capitalize">Color not Available</p>
                            <button onClick={() => ResetFilter()} type="button" className=" py-2 rounded-xl w-2/3 mx-auto mt-3 px-3 bg-primary-color text-white">Reset Filter</button>
                        </div>
                    :
                    setsurfaceData?.length > 0 ?
                        setsurfaceData.filter((option) => option.model_name.toLowerCase().includes(selected_surface.toLowerCase()))?.map((surface) =>
                            <Palletcard key={`${surface.id}${surface.model_name}`}
                                recommended={surface?.is_recommended}
                                popular={surface?.is_most_popular}
                                label={surface.model_name} img={`${Backend_url}${surface.model_image}`}
                                onClick={() => { ApplySurface(`${Backend_url}${surface.model_image}`) }}
                            />
                        ) :
                        <div className=" text-primary-color py-2 text-center w-full font-bold ">
                            <p>No Surfaces Available</p>
                            <button onClick={() => ResetFilter()} type="button" className=" py-2 rounded-xl w-2/3 mx-auto mt-3 px-3 bg-primary-color text-white">Reset Filter</button>
                        </div>
                } */}


                {/* {activeTab && Marbletexture?.map((pallet, i) => <Palletcard key={`hhh${i}`} onClick={() => console.log('object')} label={pallet.lable} img={pallet.img} />)}
                {!activeTab && ColorPalettes?.map((pallet) => <Palletcard key={pallet.name} onClick={() => console.log('object')} label={pallet.name} color={pallet.color} />)} */}

                {/* filterData?.color?.length > 0 ?
                        filterData?.color.map((clr) =>
                <Palletcard key={`${clr.color_name}`}
                    recommended={false}
                    popular={false}
                    label={clr.color_name}
                    // onClick={() => { ApplySurface(`${Backend_url}${surface.model_image}`) }}
                    onClick={() => { alert("xjsix") }}
                />
                            // color_name
                ) :
                <div className=" text-primary-color py-2 text-center w-full font-bold ">
                    <p className="capitalize">Color not Available</p>
                    <button onClick={() => ResetFilter()} type="button" className=" py-2 rounded-xl w-2/3 mx-auto mt-3 px-3 bg-primary-color text-white">Reset Filter</button>
                </div> */}


            </div>
        </div>
    )
}

export default SelectMaterial