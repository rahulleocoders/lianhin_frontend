'use client'
import { ColorPalettes, Marbletexture } from "@/local_data"
import Image from "next/image"
import { useState } from "react"

let Tab = ({ label, active, onClick }) => { return (<button onClick={onClick} type="button" className={`capitalize flex-1 rounded-3xl py-1 border ${active ? 'bg-primary-color text-white border-primary-color' : 'text-secondary border-secondary'}`}>{label}</button>) }

let Palletcard = ({ label, img, color, onClick }) => {
    return (
        <div className=" p-1 border border-secondary flex-1 min-w-[110px] rounded-md cursor-pointer"
            onClick={onClick}>
            <div className=" aspect-square rounded-md overflow-hidden border" style={{ background: color ? color : '#707070' }}>
                {img && <Image src={img} alt={img} width={100} height={100} className=" w-full h-full object-cover" />}
            </div>
            <p className=" capitalize text-secondary text-xs mt-1  text-center">{label}</p>
        </div>
    )
}

const SelectMaterial = () => {
    const [activeTab, setActiveTab] = useState(true)
    return (
        <div className=''>
            <div className="flex justify-between mb-3 gap-6">
                <Tab label='surface' active={activeTab} onClick={() => setActiveTab(true)} />
                <Tab label='color' active={!activeTab} onClick={() => setActiveTab(false)} />
                {/*on second tab call function to  to get the color pallett*/}
            </div>

            <div className=" flex gap-6 max-h-[64vh] overflow-y-scroll flex-wrap pe-1">
                {activeTab && Marbletexture?.map((pallet, i) => <Palletcard key={`hhh${i}`} onClick={() => console.log('object')} label={pallet.lable} img={pallet.img} />)}

                {!activeTab && ColorPalettes?.map((pallet) => <Palletcard key={pallet.name} onClick={() => console.log('object')} label={pallet.name} color={pallet.color} />)}
            </div>
        </div>
    )
}

export default SelectMaterial