'use client'
import { Environment, Html, OrbitControls, PerspectiveCamera, useProgress } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef } from "react"
import { BathroomAnnotationArray } from "@/local_data"
import { useDispatch, useSelector } from "react-redux"
import { updatebathroomSlice } from "@/redux/slices/BathroomSlice"
import Annotations from "../Annotations/Annotations"
import { updateCommonStateSlice } from "@/redux/slices/CommonStateSlice"
import CubeKitchenModel from "@/jsxModel/CubeKitchenModel"

const Bathroom = () => {
    const dispatch = useDispatch()
    const bathroomcanvasRef = useRef()
    const { progress } = useProgress()
    const BathroomParameter = useSelector((state) => state.BathroomParameter?.present);
    // const CommonState = useSelector((state) => state.CommonState);
    let bathroom_Active_element = BathroomParameter.ActiveObject

    let UpdateBathActiveElement = (title) => {
        dispatch(updatebathroomSlice({ ActiveObject: { ...bathroom_Active_element, title: title } }));
    }

    useEffect(() => {
        dispatch(updateCommonStateSlice({ currentModelRef: bathroomcanvasRef.current }));
    }, [])


    return (
        <div className="flex w-full h-full flex-wrap">
            <Canvas ref={bathroomcanvasRef} gl={{ preserveDrawingBuffer: true }}  >
                <PerspectiveCamera makeDefault position={[3.5908, 1.7840, -1.734]} fov={76} // Field of view
                />
                <Suspense fallback={<Html center>{progress} % loaded</Html>}>
                    <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr" />
                    <ambientLight color={0xffffff} intensity={0.5} />
                    <CubeKitchenModel />
                    <Annotations position={BathroomAnnotationArray} onClick={(title) => UpdateBathActiveElement(title)} />
                    <OrbitControls enablePan={true} enableZoom={true} enableRotate={true}
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