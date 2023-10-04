'use client'
import { Html } from "@react-three/drei";
import { useState } from "react";

const Annotations = ({position}) => {
    const [activeAnnotation, setActiveAnnotation] = useState('')
    return (
        <>
            {position?.map((anote, i) =>
                <Html position={[anote.position.x, anote.position.y, anote.position.z]} key={`bathanote${i}`}>
                    <div // className=" p-[3px] rounded-full border-[5px] border-transparent hover:border-primary-color border-dotted hover:animate-spin  duration-[4s]" 
                        className={`group p-1 rounded-full border-4  ${activeAnnotation == anote.title ? 'speener-loader' : 'border-transparent'}  cursor-pointer`}
                        onClick={() => setActiveAnnotation(anote.title)}>
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