'use client'
import CubeKitchenModel from "@/jsxModel/CubeKitchenModel"
// import KitchenModel from "@/jsxModel/KitchenModel"
import { Environment, Html, OrbitControls, useProgress } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import KitchenAnnotation from "../Annotations/KitchenAnnotation"
import { KitchenAnnotationArray } from "@/local_data"


const Kitchen = () => {
    const { progress } = useProgress()
    const [lerping, setLerping] = useState(false)
    const [to, setTo] = useState()
    const [target, setTarget] = useState()
    // const [selected, setSelected] = useState(-1)
    const ref = useRef()

    function gotoAnnotation(idx) {
        setTo(KitchenAnnotationArray[idx].camPos)
        setTarget(KitchenAnnotationArray[idx].lookAt)
        // setSelected(idx)
        setLerping(true)
    }

    function Animate({ controls, lerping, to, target }) {
        useFrame(({ camera }, delta) => {
            if (lerping) {
                camera.position.lerp(to, delta * 2)
                controls.current.target.lerp(target, delta * 2)
            }
        })
    }


    return (
        <div className="flex w-full h-full flex-wrap">
            {/* <div className=" flex-1 aspect-video h-fit min-w-[300px]"> */}
            {/* <Canvas gl={{ preserveDrawingBuffer: true }}> */}
            <Canvas gl={{ preserveDrawingBuffer: true }}
                camera={{ position: [8, 2, 12] }}
                onPointerDown={() => setLerping(false)} onWheel={() => setLerping(false)}
            >
                <Suspense fallback={<Html center>{progress} % loaded</Html>}>
                    {/* <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@gltfjsx/public/img/forest_slope_1k.hdr" /> */}
                    <Environment files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@environment/public/img/venice_sunset_1k.hdr" />
                    {/* <ambientLight color={0xffffff} intensity={2} /> */}
                    {/* <pointLight color={0xffffff} castShadow shadowMapHeight={1024} shadowMapWidth={1024} position={[3, 5, 0]} intensity={10} /> */}
                    {/* <KitchenModel /> */}
                    <CubeKitchenModel />
                    <KitchenAnnotation gotoAnnotation={gotoAnnotation} />
                    <Animate controls={ref} lerping={lerping} to={to} target={target} />
                </Suspense>
                <OrbitControls ref={ref}
                    // target={[5, 6, 3]}
                    // target={[8, 2, 3]}
                />
            </Canvas>
            {/* </div> */}
        </div>
    )
}

export default Kitchen