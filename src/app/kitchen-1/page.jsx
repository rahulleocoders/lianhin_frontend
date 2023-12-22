'use client'
import CanvasEnvironment from "@/components/CanvasEnvironment"
import Demolayout from "@/components/DemoComponents/Demolayout"
import Kitchen_1_model from "@/jsxModel/kitchen_1_model"
import { LivingroomAnnotationArray } from "@/local_data"
const Page = () => {
    return (
        <div className="relative">
            <Demolayout>
                <CanvasEnvironment


                    CameraPosition={[-0.8348149108076584, 5, 80.356012629244]}
                    Cameratarget={[-5, 4, -5]}
                    
                    // CameraPosition={[-0.8348149108076584, 5, 80.356012629244]}
                    // Cameratarget={[-45, 4, -5]}

                    // minPolarAngle={-Math.PI } // maximum top
                    // maxPolarAngle={Math.PI / 2}  // maximum bottom

                    minAzimuthAngle={-Math.PI / 34} // maximum left
                    maxAzimuthAngle={Math.PI / 32} // maximum right

                    // minDistance={90} // max zoom
                    // maxDistance={110} // min zoom   

                    Annotationposition={LivingroomAnnotationArray}
                >
                    <Kitchen_1_model />
                </CanvasEnvironment>
            </Demolayout>
        </div >
    )
}


export default Page
