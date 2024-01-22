'use client'
import CanvasEnvironment from "@/components/CanvasEnvironment"
import Demolayout from "@/components/DemoComponents/Demolayout"
import { LivingroomAnnotationArray } from "@/local_data"
import LivingModel from "@/jsxModel/LivingModel"
import Final_Living_Model from "@/jsxModel/Final_Living_Model"
import { Canvas } from "react-three-fiber"
import { Environment, Html, OrbitControls } from "@react-three/drei"
import Annotations from "../Annotations/Annotations"
import { Suspense, useEffect, useRef } from "react"
import { useDispatch } from "react-redux"
import { updateCommonStateSlice } from "@/redux/slices/CommonStateSlice"

// import Living_1_Model from "@/jsxModel/living_1_Model"
// import LivingModel from "@/jsxModel/LivingModel"
const Page = () => {
    const dispatch = useDispatch()
    const canvasRef = useRef()
    useEffect(() => {
        dispatch(updateCommonStateSlice({ currentModelRef: canvasRef.current }));
    }, [])
    return (
        <>
            <div className="relative ">
                <Demolayout>
                    <Canvas ref={canvasRef} camera={{ fov: 25, position: [0, 0.65, 5.4] }} gl={{ preserveDrawingBuffer: true }}>
                        <Suspense fallback={<Html center> <div className="flex items-center justify-center w-full h-full text-3xl text-primary-color font-bold">Loading...</div>  </Html>}>
                            <ambientLight intensity={1} />
                            <Environment preset="apartment" />
                            <pointLight position={[-0.85, 1.2, -1]} intensity={2} color={'#ffe191'} />
                            <pointLight position={[0.85, 1.2, -1]} intensity={2} color={'#ffe191'} />
                            <OrbitControls
                                minPolarAngle={1.35} // maximum top
                                maxPolarAngle={1.7}  // maximum bottom

                                minAzimuthAngle={5.9} // maximum left
                                maxAzimuthAngle={6.7} // maximum right

                                minDistance={1.8} // max zoom
                                maxDistance={5.5} // min zoom    
                            />
                            <Annotations position={LivingroomAnnotationArray} />
                            <LivingModel />
                        </Suspense>
                    </Canvas>
                </Demolayout>
                <div></div>
            </div >
        </>
    )
}


export default Page



// 'use client'
// import CanvasEnvironment from "@/components/CanvasEnvironment"
// import Demolayout from "@/components/DemoComponents/Demolayout"
// // import BathroomModel from "@/jsxModel/BathroomModel"
// // import { BathroomAnnotationArray } from "@/local_data"
// // import { useState } from "react"

// const page = () => {
//     return (
//         <div className="relative">
//             <Demolayout>
//                 <CanvasEnvironment
//                     // CameraPosition={position}
//                     CameraPosition={[-9.0, 10.49464, 26.772]}
//                     // CameraPosition={[-10.7927613, 8.49464, 26.772]}
//                     // Camerarotation={[Math.PI / 8, 0, 0]}
//                     // CameraPosition={[-12.7927613, 8.49464, 23.772]}
//                     //   Annotationposition={BathroomAnnotationArray}
//                     Annotationposition={[]}
//                 >
//                     <LivingModel />
//                 </CanvasEnvironment>
//             </Demolayout>
//         </div >
//     )
// }

// export default page