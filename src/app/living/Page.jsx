'use client'
import Demolayout from "@/components/DemoComponents/Demolayout"
import { LivingroomAnnotationArray } from "@/local_data"
import LivingModel from "@/jsxModel/LivingModel"
// import { Canvas } from "react-three-fiber"
import { Canvas } from "@react-three/fiber"
import { Environment, Html, OrbitControls } from "@react-three/drei"
import Annotations from "../Annotations/Annotations"
import { Suspense, useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { updateCommonStateSlice } from "@/redux/slices/CommonStateSlice"
import Final_Living_Model from "@/jsxModel/Final_Living_Model"

const Page = () => {
    const dispatch = useDispatch()
    const canvasRef = useRef()
    useEffect(() => {
        dispatch(updateCommonStateSlice({ currentModelRef: canvasRef.current }));
    }, [])


    const [fov, setFov] = useState(25);

    useEffect(() => {
        const handleResize = () => {
            // Update FOV based on screen width
            const newFov = window.innerWidth <= 768 ? 35 : 25;
            setFov(newFov);
        };
        // Initial setup
        handleResize();
        // Event listener for window resize
        window.addEventListener('resize', handleResize);
        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);



    return (
        <>
            <div className="relative ">
                <Demolayout>
                    {/* <Canvas ref={canvasRef} camera={{ fov: 25, position: [0, 0.65, 5.4] }} gl={{ preserveDrawingBuffer: true }}> */}
                    <Canvas ref={canvasRef} camera={{ fov: fov, position: [0, 0.65, 5.4] }} gl={{ preserveDrawingBuffer: true }}>
                        {/* <Canvas ref={canvasRef} camera={{ fov: fov, position: [-1, 0.65, 5.4] }} gl={{ preserveDrawingBuffer: true }}> */}
                        <Suspense fallback={<Html center> <div className="flex items-center justify-center w-full h-full text-3xl text-primary-color font-bold">Loading...</div>  </Html>}>
                            <ambientLight intensity={1} />
                            <Environment preset="apartment" />
                            <pointLight position={[-0.85, 1.2, -1]} intensity={2} color={'#ffe191'} />
                            <pointLight position={[0.85, 1.2, -1]} intensity={2} color={'#ffe191'} />
                            {/* <LivingModel /> */}
                            <Final_Living_Model />
                            <Annotations position={LivingroomAnnotationArray} />
                            <OrbitControls

                                // minAzimuthAngle={6.4} // maximum left
                                // maxAzimuthAngle={7} // maximum right

                                // minAzimuthAngle={5.8} // maximum left
                                // maxAzimuthAngle={6.75} // maximum right

                                minPolarAngle={1.35} // maximum top
                                maxPolarAngle={1.7}  // maximum bottom

                                // minAzimuthAngle={5.9} // maximum left
                                // maxAzimuthAngle={6.7} // maximum right

                                minAzimuthAngle={6} // maximum left
                                maxAzimuthAngle={6.5} // maximum right

                                minDistance={1.8} // max zoom
                                maxDistance={5.5} // min zoom    
                            />
                        </Suspense>
                    </Canvas>
                </Demolayout>
                <div></div>
            </div >
        </>
    )
}


export default Page