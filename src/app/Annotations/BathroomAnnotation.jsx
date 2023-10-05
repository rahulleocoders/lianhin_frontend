'use client'
import { BathroomAnnotationArray } from "@/local_data";
import { Html } from "@react-three/drei";
import { useState } from "react";
;
const BathroomAnnotation = () => {
    const [activeAnnotation, setActiveAnnotation] = useState('')
    return (
        <>
            {BathroomAnnotationArray?.map((anote, i) =>
                <Html position={[anote.position.x, anote.position.y, anote.position.z]} key={`bathanote${i}`}>
                    <div // className=" p-[3px] rounded-full border-[5px] border-transparent hover:border-primary-color border-dotted hover:animate-spin  duration-[4s]" 
                        className={`group p-1 rounded-full border-4 border-transparent ${activeAnnotation == anote.title ? 'speener-loader' : ''}  cursor-pointer`}
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

export default BathroomAnnotation