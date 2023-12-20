'use client'
import { updatebathroomSlice } from "@/redux/slices/BathroomSlice";
import { updatelivingroomSlice } from "@/redux/slices/LivingroomSlice";
import { Html } from "@react-three/drei";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Annotations = ({ position }) => {
    const dispatch = useDispatch()
    const pathname = usePathname()
    let currentPage = pathname.split("/")[1]
    const [activeAnnotation, setActiveAnnotation] = useState('')
    // const CommonState = useSelector((state) => state.CommonState);
    const BathroomParameter = useSelector((state) => state.BathroomParameter?.present);
    let bathroom_Active_element = BathroomParameter.ActiveObject

    const LivingroomParameter = useSelector((state) => state.LivingroomParameter?.present);
    let livingroom_Active_element = LivingroomParameter.ActiveObject

    let HandleClick = (title) => {
        setActiveAnnotation(title === activeAnnotation ? '' : title)
        if (currentPage == "bathroom") {
            dispatch(updatebathroomSlice({ ActiveObject: { ...bathroom_Active_element, title: title } }));
        }
        if (currentPage == "living") {
            dispatch(updatelivingroomSlice({ ActiveObject: { ...livingroom_Active_element, title: title } }));
        }
        // onClick(title)
    }


    return (
        <>
            {position?.map((anote, i) =>
                <Html position={[anote.position.x, anote.position.y, anote.position.z]} key={`bathanote${i}`}>
                    <div // className=" p-[3px] rounded-full border-[5px] border-transparent hover:border-primary-color border-dotted hover:animate-spin  duration-[4s]" 
                        className={`group p-1 rounded-full border-4  ${activeAnnotation == anote.title ? 'speener-loader' : 'border-transparent'}  cursor-pointer`}
                        onClick={() => HandleClick(anote.title)}>
                        <svg height="20" width="20">
                            <circle cx="10" cy="10" r="9" stroke="white" strokeWidth="1" fill="rgba(0,0,0,.66)" className=" group-hover:fill-primary-color" />
                        </svg>
                    </div>
                </Html>
            )}
        </>
    )
}

export default Annotations