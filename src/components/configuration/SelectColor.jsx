'use client'
import { updatebathroomSlice } from "@/redux/slices/BathroomSlice";
import { updatelivingroomSlice } from "@/redux/slices/LivingroomSlice";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";


const SelectColor = () => {
    const dispatch = useDispatch()
    const pathname = usePathname()
    const filterData = useSelector(state => state.apiResponce.filterData);
    console.log("filterData", filterData)
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
        <div className=" flex gap-2   flex-wrap max-h-[52vh] overflow-y-scroll">
            {filterData?.wall_color?.map((clr) =>
                <div key={clr.wallcolor} className="w-14 aspect-square rounded-2xl cursor-pointer" style={{ backgroundColor: clr.wallcolor }} onClick={() => ApplyColor(clr.wallcolor)} ></div>
            )}
        </div>
    )
}

export default SelectColor