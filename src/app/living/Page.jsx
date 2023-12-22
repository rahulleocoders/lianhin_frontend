'use client'
import CanvasEnvironment from "@/components/CanvasEnvironment"
import Demolayout from "@/components/DemoComponents/Demolayout"
import { LivingroomAnnotationArray } from "@/local_data"
// import Living_1_Model from "@/jsxModel/living_1_Model"
// import LivingModel from "@/jsxModel/LivingModel"
const Page = () => {
    return (
        <div className="relative">
            <Demolayout>
                <CanvasEnvironment
                    CameraPosition={[-17, 12, 18.5]}
                    Cameratarget={[-17, 12, 8.5]}

                    minPolarAngle={-Math.PI / 8} // maximum top
                    maxPolarAngle={Math.PI / 2}  // maximum bottom

                    minAzimuthAngle={5} // maximum left
                    maxAzimuthAngle={7} // maximum right

                    minDistance={7} // max zoom
                    maxDistance={13} // min zoom   

                    // CameraPosition={[-18.5, 12, 18.699922]}
                    // Cameratarget={[-18.5, 12, 10]}

                    // CameraPosition={[-17, 15, 100]}
                    // Cameratarget={[-17, 10, 10]}

                    // CameraPosition={[-9.0, 8.49464, 26.772]}
                    // Cameratarget={[-9, 8, -25]}
                    Annotationposition={LivingroomAnnotationArray}
                >
                    <Final_Living_Model />
                    {/* <Living_1_Model /> */}
                    {/* <LivingModel /> */}
                </CanvasEnvironment>
            </Demolayout>
        </div >
    )
}


export default Page



// 'use client'
// import CanvasEnvironment from "@/components/CanvasEnvironment"
// import Demolayout from "@/components/DemoComponents/Demolayout"
import LivingModel from "@/jsxModel/LivingModel"
import Final_Living_Model from "@/jsxModel/Final_Living_Model"
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