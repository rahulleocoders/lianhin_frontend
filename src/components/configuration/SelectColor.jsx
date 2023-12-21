'use client'

import { updatebathroomSlice } from "@/redux/slices/BathroomSlice";
import { updatelivingroomSlice } from "@/redux/slices/LivingroomSlice";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";


const SelectColor = () => {
    const dispatch = useDispatch()
    const pathname = usePathname()
    let currentPage = pathname.split("/")[1]

    const BathroomParameter = useSelector((state) => state.BathroomParameter?.present);
    let bathroom_Active_element = BathroomParameter.ActiveObject.title

    const LivingroomParameter = useSelector((state) => state.LivingroomParameter?.present);
    let livingroom_Active_element = LivingroomParameter.ActiveObject.title

    let ApplyColor = (color) => {
        if (currentPage == "bathroom") {
            dispatch(updatebathroomSlice({ [bathroom_Active_element]: { color: color } }));
        }
        if (currentPage == "living") {
            dispatch(updatelivingroomSlice({ [livingroom_Active_element]: { color: color } }));
        }
    }
    return (
        <div className=" border flex gap-2   flex-wrap">
            <div className="w-14 aspect-square bg-red-500 rounded-2xl cursor-pointer"
                onClick={ApplyColor('blue')}
            ></div>
            <div className="w-14 aspect-square bg-red-500 rounded-2xl cursor-pointer"></div>
            <div className="w-14 aspect-square bg-red-500 rounded-2xl cursor-pointer"></div>
            <div className="w-14 aspect-square bg-red-500 rounded-2xl cursor-pointer"></div>
            <div className="w-14 aspect-square bg-red-500 rounded-2xl cursor-pointer"></div>
            <div className="w-14 aspect-square bg-red-500 rounded-2xl cursor-pointer"></div>
            <div className="w-14 aspect-square bg-red-500 rounded-2xl cursor-pointer"></div>
            <div className="w-14 aspect-square bg-red-500 rounded-2xl cursor-pointer"></div>
            <div className="w-14 aspect-square bg-red-500 rounded-2xl cursor-pointer"></div>

        </div>
    )
}

export default SelectColor