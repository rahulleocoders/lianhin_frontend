'use client'
import Annotations from "@/app/Annotations/Annotations"
import { Background_Envirnment } from "@/local_data"
import { updateCommonStateSlice } from "@/redux/slices/CommonStateSlice"
import { Environment, Html, OrbitControls, PerspectiveCamera, useProgress } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef } from "react"
import { useDispatch } from "react-redux"

const CanvasEnvironment = ({ children, CameraPosition, Annotationposition }) => {
    const dispatch = useDispatch()
    const canvasRef = useRef()
    const { progress } = useProgress()
    // const BathroomParameter = useSelector((state) => state.BathroomParameter?.present);
    // const CommonState = useSelector((state) => state.CommonState);
    // let bathroom_Active_element = BathroomParameter.ActiveObject
    // let UpdateBathActiveElement = (title) => {  dispatch(updatebathroomSlice({ ActiveObject: { ...bathroom_Active_element, title: title } })); }

    useEffect(() => {
        dispatch(updateCommonStateSlice({ currentModelRef: canvasRef.current }));
    }, [])

    return (
        <div className="flex w-full h-full flex-wrap">
            <Canvas ref={canvasRef} gl={{ preserveDrawingBuffer: true }} >
                <PerspectiveCamera makeDefault position={CameraPosition} fov={76} // Field of view
                />
                <Suspense fallback={<Html center>
                    <div className=" flex items-center justify-center w-full h-full text-3xl text-primary-color font-bold">Loading...</div>
                </Html>}>
                    {/* <Suspense fallback={<Html center>{progress} % loaded</Html>}> */}
                    {/* <Environment files={Background_Envirnment[0]} /> */}
                    <Environment preset="warehouse" />
                    {/* <ambientLight color={0xfffff} intensity={0.1} /> */}
                    {/* <directionalLight intensity={0.4} position={[2, 2, 2]} /> */}
                    {children}
                    <Annotations position={Annotationposition}
                    // onClick={(title) => UpdateBathActiveElement(title)}
                    />
                    <OrbitControls enablePan={false} enableZoom={false} enableRotate={false}
                        // position={[1, 1, 1]}
                    // position={[3.5908, 1.7840, -1.734]}
                    //  minPolarAngle={0}
                    //  maxPolarAngle={Math.PI / 2} 
                    />
                </Suspense>
            </Canvas>
        </div>
    )
}

export default CanvasEnvironment