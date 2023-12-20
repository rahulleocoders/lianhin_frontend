'use client'
import Annotations from "@/app/Annotations/Annotations"
import { Background_Envirnment } from "@/local_data"
import { updateCommonStateSlice } from "@/redux/slices/CommonStateSlice"
import { Environment, Html, OrbitControls, PerspectiveCamera, useProgress } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"

const CanvasEnvironment = ({ children, CameraPosition, Annotationposition, Cameratarget }) => {
    const dispatch = useDispatch()
    const canvasRef = useRef()
    const cameraRef = useRef();
    // const { progress } = useProgress()
    // const BathroomParameter = useSelector((state) => state.BathroomParameter?.present);
    // const CommonState = useSelector((state) => state.CommonState);
    // let bathroom_Active_element = BathroomParameter.ActiveObject
    // let UpdateBathActiveElement = (title) => {  dispatch(updatebathroomSlice({ ActiveObject: { ...bathroom_Active_element, title: title } })); }

    const CurrentCameraPosition = () => {
        console.log("objectposition", cameraRef.current.position)
        console.log("objectrotation", cameraRef.current.rotation)
    };


    // Function to handle user input and update camera position and rotation
    // const handleUserInput = (e) => {

    //     // Update camera position based on user input
    //     if (e.key === 'ArrowUp') setPosition([position[0], position[1], position[2] - 1]);
    //     else if (e.key === 'ArrowDown') setPosition([position[0], position[1], position[2] + 1]);
    //     else if (e.key === 'ArrowLeft') setPosition([position[0] - 1, position[1], position[2]]);
    //     else if (e.key === 'ArrowRight') setPosition([position[0] + 1, position[1], position[2]]);

    //     // Update camera rotation based on user input
    //     else if (e.key === 'w') setRotation([rotation[0] - 0.1, rotation[1], rotation[2]]);
    //     else if (e.key === 's') setRotation([rotation[0] + 0.1, rotation[1], rotation[2]]);
    //     else if (e.key === 'a') setRotation([rotation[0], rotation[1] - 0.1, rotation[2]]);
    //     else if (e.key === 'd') setRotation([rotation[0], rotation[1] + 0.1, rotation[2]]);
    //     console.log('position', position, 'rotation', rotation)
    // };

    // Use useFrame to update the camera's position and rotation in each frame
    // useFrame(() => {
    //     if (cameraRef.current) {
    //         cameraRef.current.position.set(...position);
    //         cameraRef.current.rotation.set(...rotation);
    //     }
    // });

    // useEffect(() => {
    //     window.addEventListener('keydown', handleUserInput);
    //     // Cleanup: remove the event listener when the component unmounts
    //     return () => {
    //         window.removeEventListener('keydown', handleUserInput);
    //     };
    // }, [position, rotation]);

    useEffect(() => {
        dispatch(updateCommonStateSlice({ currentModelRef: canvasRef.current }));
    }, [])



    return (
        <div className="flex w-full h-full flex-wrap relative">
            <Canvas ref={canvasRef} gl={{ preserveDrawingBuffer: true }}>
                {/* <Canvas ref={canvasRef} camera={{ position: [2, 2, 21], fov: 90 }}> */}
                <PerspectiveCamera
                    makeDefault
                    // onKeyPress={handleUserInput}
                    // rotation={[Math.PI / 8, 100, 0]}
                    // lookAt={[0, 0, 0]}
                    position={CameraPosition}
                    fov={76}
                    ref={cameraRef}
                // Field of view
                />
                <Suspense fallback={<Html center> <div className=" flex items-center justify-center w-full h-full text-3xl text-primary-color font-bold">Loading...</div>  </Html>}>
                    {/* <Suspense fallback={<Html center>{progress} % loaded</Html>}> */}
                    {/* <Environment files={Background_Envirnment[0]} /> */}
                    <Environment preset="warehouse" />
                    {/* <ambientLight color={0xfffff} intensity={0.1} /> */}
                    {/* <directionalLight intensity={0.4} position={[2, 2, 2]} /> */}
                    {children}
                    <Annotations position={Annotationposition}  // onClick={(title) => UpdateBathActiveElement(title)}
                    />
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}
                        target={Cameratarget}
                    // target={[-9, 8, -25]}
                    // args={[1, 1, 1]}
                    // position={[-12, 6, 26]}
                    //  minPolarAngle={0}
                    //  maxPolarAngle={Math.PI / 2} 
                    />
                </Suspense>
            </Canvas >
            <button onClick={CurrentCameraPosition} className=' absolute top-0 right-0'>Move</button>

        </div >
    )
}

export default CanvasEnvironment