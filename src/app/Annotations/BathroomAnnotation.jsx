'use client'
import { BathroomAnnotationArray } from "@/local_data";
import { Html } from "@react-three/drei"; import { useState } from "react";
;
const BathroomAnnotation = () => {
    const [activeAnnotation, setActiveAnnotation] = useState(null)
    return (
        <>
            {BathroomAnnotationArray?.map((anote, i) =>
                <Html position={[anote.position.x, anote.position.y, anote.position.z]} key={`bathanote${i}`}>
                    <div className=" p-[3px] rounded-full border-[5px] border-transparent hover:border-primary-color border-dotted  " onClick={() => setActiveAnnotation(i)}>
                        <svg height="34" width="34" style={{ cursor: 'pointer' }}>
                            <circle cx="17" cy="17" r="12" stroke="white" strokeWidth="1" fill="rgba(0,0,0,.66)" className=" hover:fill-primary-color" />
                        </svg>
                    </div>
                </Html>
            )}
        </>
    )
}

export default BathroomAnnotation