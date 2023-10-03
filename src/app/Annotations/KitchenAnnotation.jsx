
import { KitchenAnnotationArray } from "@/local_data";
import { Html } from "@react-three/drei";;
import { useState } from "react";


const KitchenAnnotation = ({ gotoAnnotation }) => {

    const [activeAnnotation, setActiveAnnotation] = useState('')
    return (
        <>
            {KitchenAnnotationArray?.map((anote, i) =>
                <Html position={[anote.lookAt.x, anote.lookAt.y, anote.lookAt.z]} key={`anote${i}`}
                    // transform
                    // occlude="blending"
                    style={{ background: 'red' }} >
                    <svg height="34" width="34" style={{ cursor: 'pointer' }}
                        onMouseEnter={() => setActiveAnnotation(anote.title)} onMouseLeave={() => setActiveAnnotation("")}
                    >
                        <circle cx="17" cy="17" r="16" stroke="white" strokeWidth="2" fill="rgba(0,0,0,.66)" onClick={() => gotoAnnotation(i)} />
                        <text x="12" y="22" fill="white" fontSize={17} fontFamily="monospace" style={{ pointerEvents: 'none' }}>{`${i}`}</text>
                    </svg>
                    {/* {activeAnnotation == anote.title && <div id={'desc_'} className="annotationDescription" dangerouslySetInnerHTML={{ __html: `${anote.description}` }} />} */}
                </Html>
            )}
        </>
    )
}

export default KitchenAnnotation