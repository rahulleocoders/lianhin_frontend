'use client'
import Annotations from "@/app/Annotations/Annotations"
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
                <Suspense fallback={<Html center>{progress} % loaded</Html>}>
                    <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr" />
                    <ambientLight color={0xffffff} intensity={0.5} />
                    {/* <BathroomModel /> */}
                    {children}
                    <Annotations position={Annotationposition}
                    // onClick={(title) => UpdateBathActiveElement(title)}
                    />
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

export default CanvasEnvironment