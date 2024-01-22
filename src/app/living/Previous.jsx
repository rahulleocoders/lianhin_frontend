import React from 'react'

const Previous = () => {
    return (
        <div>

            <div className="relative hidden">
                <Demolayout>
                    <CanvasEnvironment
                        // CameraPosition={[-17, 12, 18.5]}
                        // Cameratarget={[-17, 12, 8.5]}

                        Cameratarget={[0, 0, 0]}
                        CameraPosition={[0, 0, 10]}

                        // minPolarAngle={-Math.PI / 8} // maximum top
                        // maxPolarAngle={Math.PI / 2}  // maximum bottom

                        // minAzimuthAngle={5} // maximum left
                        // maxAzimuthAngle={7} // maximum right

                        // minDistance={7} // max zoom
                        // maxDistance={13} // min zoom   

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
                <div></div>
            </div >
        </div>
    )
}

export default Previous