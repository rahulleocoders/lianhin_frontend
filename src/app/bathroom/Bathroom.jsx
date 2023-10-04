'use client'

import BathroomModel from "@/jsxModel/BathroomModel"
import { Environment, Html, OrbitControls, PerspectiveCamera, useProgress } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import BathroomAnnotation from "../Annotations/BathroomAnnotation"
import Annotations from "../Annotations/Annotations"
import { BathroomAnnotationArray } from "@/local_data"

const Bathroom = () => {
    const bathroomcanvasRef = useRef()
    const { progress } = useProgress()
    return (
        <div className="flex w-full h-full flex-wrap">
            <Canvas ref={bathroomcanvasRef} gl={{ preserveDrawingBuffer: true }}  >
                <PerspectiveCamera
                    // ref={cameraRef}
                    makeDefault
                    position={[3.5908, 1.7840, -1.734]}
                    // position={[2.3520, 1.36927, -1.2965]}
                    // position={[3.4368, 1.57895, -1.7096]}
                    // position={[3.7722, 2.0562, -0.7930]}
                    // position={[2.948, 1.5504, -2.110]}
                    // position={[5.2013, 2.69735, -2.194]}
                    // position={[4.5779, 1.727, -2.199]}
                    // rotation={[Math.PI / 8, 0, 0]}
                    fov={76} // Field of view
                // far={100}
                />
                <Suspense fallback={<Html center>{progress} % loaded</Html>}>
                    <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr" />
                    <ambientLight color={0xffffff} intensity={0.5} />
                    <BathroomModel />
                    <Annotations position={BathroomAnnotationArray} />
                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}
                    // position={[3.5908, 1.7840, -1.734]}
                    //  minPolarAngle={0}
                    //  maxPolarAngle={Math.PI / 2} 
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default Bathroom