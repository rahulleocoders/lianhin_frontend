'use client'
import { MeshTransmissionMaterial, useGLTF, } from "@react-three/drei"

import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import * as THREE from 'three';
import { Reflector, MeshReflectorMaterial } from '@react-three/drei';
import { useThree } from "react-three-fiber";
import { driver } from "driver.js";

export let GlassMaterial = () => {
    return (
        <meshStandardMaterial
            color="white" // Adjust this color to your preference
            roughness={0.1} // Adjust the roughness
            metalness={0.5} // Adjust the metalness
            reflectivity={0.9} // Adjust the reflectivity
            transparent // Enable transparency
            opacity={0.2} // Adjust the opacity to control transparency level
        />
    )
}
export const MirrorMaterial = () => {
    return (
        <meshStandardMaterial
            color="white" // Adjust this color to your preference
            roughness={0.1} // Adjust the roughness
            metalness={0.5} // Adjust the metalness
            envMapIntensity={1} // Adjust the environment map intensity
            reflectivity={1} // Set reflectivity to 1 for a mirror-like surface
            side={THREE.DoubleSide} // Render the material on both sides of the geometry
        />
    );
};

const model_Walkthrough = () => {
    let driverobj = driver({
        showProgress: true,
        steps: [
            {
                element: "#TVConsole",
                popover: {
                    className: "first-step-popover-class",
                    title: "Select Hotspot",
                    description: "Explore different surfaces by selecting areas with hotspots.",
                    position: "left",
                    side: "left",
                    align: 'start'
                },
            },
            {
                element: ".material-conatiner .material:nth-child(2)",
                popover: {
                    className: "first-step-popover-class",
                    title: "Select Surfaces",
                    description: "Choosing surfaces enables you to visualize changes in the selected area as you apply different surface options.",
                    position: "left",
                    side: "left",
                    align: 'start'
                },
            },
            {
                element: "#filter_surface",
                popover: {
                    className: "first-step-popover-class",
                    title: "Surface Filtering Options",
                    description: "Explore advanced filtering options to refine surfaces based on brand, collection, series, and color preferences.",
                    position: "left",
                    side: "left",
                    align: 'start'
                },
            },
            {
                element: "#sort_surface",
                popover: {
                    className: "first-step-popover-class",
                    title: "Surface Sorting Options",
                    description: "Sort the surfaces based on newness, popularity, and price.",
                    position: "left",
                    side: "left",
                    align: 'start'
                },
            },
        ]
    });

    driverobj.drive();
};

const Final_Living_Model = (props) => {
    const loader = new THREE.TextureLoader();
    const group = useRef()
    const spotLightRef = useRef();// const { scene } = useThree();

    useEffect(() => {

        if (spotLightRef.current) {
            // Rotate the spotlight by changing its position
            spotLightRef.current.position.set(1, 1, 0);
            // Adjust the spotlight target position as needed
            spotLightRef.current.target.position.set(-180, 90, 90);
        }
        setTimeout(() => model_Walkthrough(), 10);

    }, []);

    const { nodes, materials } = useGLTF('./blender_model/FinalHall.glb')
    const LivingroomParameter = useSelector((state) => state.LivingroomParameter?.present);
    const floorTexture = loader.load(LivingroomParameter.floor?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(9, 9);
    });

    const tvTopLeft = loader.load(LivingroomParameter.TVConsole?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });
    const tvTopRight = loader.load(LivingroomParameter.TVConsole?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });

    tvTopRight.flipY = false; // tvTopRight.repeat.x = -1; tvTopRight.center.set(0.5, 0.5);
    tvTopRight.rotation = Math.PI;

    const CoffeeTableTexture = loader.load(LivingroomParameter.CoffeTable?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });

    let wall_color = LivingroomParameter?.wall.color
    return (
        <group ref={group} {...props} dispose={null}>
            {/* small room */}
            <mesh>
                <boxGeometry args={[7, 7, 7]} />
                <meshStandardMaterial color={'pink'} side={THREE.BackSide} />
            </mesh>

            {/* Dome-like light effect */}

            {/* <group position={[-25, 23, 1]} rotation={[0, 0, -1]}>
                <mesh rotation={[0, 0, -15]} >
                    <circleGeometry args={[2, 60, 0, Math.PI]} />
                    <meshBasicMaterial color={'#ffe191'} transparent opacity={0.2} />
                    <spotLight intensity={15} color={0xffe191}
                        position={[2, 1, 0]}
                        // target={[1, 1, 1]}
                        // angle={1}
                        angle={Math.PI / 4}
                    // penumbra={10}
                    // ref={spotLightRef}
                    />
                </mesh>

            </group> */}


            {/* <mesh position={[-26, 22, 0.7]}  rotation={[1, 0, 0]}>
                <spotLight angle={Math.PI /4} intensity={10} color={0xffe191} position={[0, 0, 0]}  />
            </mesh> */}



            <group position={[-34.19, 0.5, 4.42]} scale={[1, 1.92, 1.47]}>
                <mesh
                    geometry={nodes.Plane002.geometry}
                    material={materials.curtain}
                    position={[1.51, 1.56, -4.37]}
                    scale={[4.58, 4.05, 4.58]}
                />
            </group>
            <group position={[-12.36, 0, 17.3]}>
                <group position={[-4.63, 7.02, -10.87]} scale={[1.13, 1.67, 1.13]}>
                    <mesh geometry={nodes.trunk022.geometry} material={materials['trunk.020']} />
                    <mesh geometry={nodes.trunk022_1.geometry} material={materials['Leaves.005']} />
                    <mesh geometry={nodes.trunk022_2.geometry} material={materials.Glass} />
                </group>
            </group>
            <mesh
                geometry={nodes.wall.geometry}
                material={materials.Material}
                position={[-15.74, 14.68, -0.06]}
                rotation={[0, 0, -Math.PI]}
                scale={[-17.55, -10.99, -0.33]}
            />

            {/* mirror effect for bathroom refenece */}
            {/* <mesh
                geometry={nodes.flore.geometry}
                material={materials['Procedural Tiles']}
                position={[-15.75, 3.55, 12.7]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-17.93, -0.23, -13.15]}
            >
                <meshStandardMaterial
                    map={floorTexture}
                    side={THREE.DoubleSide}
                    roughness={0.5}
                    metalness={0.2}
                />
                <MeshTransmissionMaterial
                    ior={1.3}
                    thickness={0.8}
                    reflectivity={1} // Set reflectivity to 1 for a perfect mirror
                    textureMatrix={{
                        flipY: true, // Flip reflection in the Y-axis
                    }}
                />
            </mesh> */}

            {/* <mesh
                // geometry={nodes.flore.geometry}
                // material={materials['Procedural Tiles']}
                position={[-15.75, 3.80, 12.7]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-17.93, -0.23, -13.15]}
            >
                <boxGeometry args={[2, 0.01, 2]} /> 
                <MeshTransmissionMaterial
                    ior={1.3}
                    thickness={0.8}
                    reflectivity={1} // Set reflectivity to 1 for a perfect mirror
                    textureMatrix={{
                        flipY: true, // Flip reflection in the Y-axis
                    }}
                />
            </mesh> */}

            {/* <mesh
                geometry={nodes.flore.geometry}
                material={materials['Procedural Tiles']}
                position={[-15.75, 3.55, 12.7]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-17.93, -0.23, -13.15]}
            >
                <meshStandardMaterial
                    map={floorTexture}
                    side={THREE.DoubleSide}
                    roughness={0.5}
                    metalness={0.2}
                    reflectivity={1}
                />
            </mesh> */}

            {/* <mesh>
                <mesh geometry={nodes.flore.geometry}>
                    <meshStandardMaterial
                        map={floorTexture}
                        side={THREE.DoubleSide}
                        roughness={0.5}
                        metalness={0.2}
                        reflectivity={1} 
                    />
                </mesh>
               
            </mesh>

            <Reflector
                resolution={1024}
                args={[17.93 * 2, 13.15 * 2]} // Adjust the size according to your floor dimensions
                rotation={[-Math.PI / 2, 0, 0]}
                position={[-15.75, 0, 12.7]}
                mirror={1} // Adjust the mirror factor to control reflection intensity
                mixBlur={0.5} // Adjust the blur factor for a smoother reflection
                mixStrength={1} // Adjust the mix strength for the reflection
                depthScale={0.5} // Adjust the depth scale for the reflection
            /> */}


            {/* <mesh
                // rotation={[-Math.PI / 2, 0, 0]}
                position-y={-2}
                // geometry={nodes.flore.geometry}
                // material={materials['Procedural Tiles']}
                // position={[-15.75, 3.55, 12.7]}
                // rotation={[-Math.PI, 0, -Math.PI]}
                scale={[1, 1, 1]}
            >
                <planeGeometry args={[170, 170]} />
                <meshStandardMaterial
                    map={floorTexture}
                    side={THREE.DoubleSide}
                    roughness={0.5}
                    metalness={0.2}
                    reflectivity={1}
                />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={2048}
                    mixBlur={1}
                    mixStrength={40}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#101010"
                    metalness={0.5}
                />

            </mesh> */}


            {/* reflective surface */}
            <mesh position={[-15.6, 3.9, 13]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[35, 27]} />
                <MeshReflectorMaterial
                    map={floorTexture} // Apply the texture here
                    // resolution={512}
                    resolution={720}
                    args={[35, 27]} // Adjust the size of the reflector
                    mirror={0.3}
                    mixBlur={8}
                    mixStrength={0.5}
                />
            </mesh>





            <mesh
                geometry={nodes.wall001.geometry}
                material={nodes.wall001.material}
                position={[1.85, 14.67, 12.93]}
                rotation={[-Math.PI, 0, 0]}
                scale={[-0.28, -10.98, -13.33]}
            >
                <meshStandardMaterial color={wall_color} />
            </mesh>
            <mesh
                geometry={nodes.wall002.geometry}
                material={nodes.wall002.material}
                position={[-33.44, 14.67, 12.99]}
                rotation={[-Math.PI, 0, -0.01]}
                scale={[-0.28, -10.98, -13.35]}

            >
                <meshStandardMaterial color={wall_color} />
            </mesh>
            <mesh
                geometry={nodes.celling.geometry}
                material={nodes.celling.material}
                position={[-15.71, 25.91, 11.98]}
                scale={[17.94, 0.37, 12.41]}
            />
            <mesh
                geometry={nodes.wall_wood.geometry}
                material={nodes.wall_wood.material}
                position={[-30.76, 14.65, 0.24]}
                scale={[2.52, 10.97, 0.24]}
            />
            <mesh
                geometry={nodes.wallplate1.geometry}
                material={nodes.wallplate1.material}
                // position={[-22, 12.92, 0.33]}
                position={[-22, 14.5, 0.33]}
            // scale={[6.24, 12.64, 0.11]}
            >
                {/* <boxGeometry args={[12.5, 25.15, 0.15]} /> */}
                <boxGeometry args={[12.5, 22, 0.15]} />
                <meshStandardMaterial
                    map={tvTopLeft} side={THREE.DoubleSide}
                    roughness={0.5} metalness={0.2}
                />
            </mesh>
            <mesh
                geometry={nodes.wallplate2.geometry}
                material={nodes.wallplate2.material}
                // position={[-9.46, 12.92, 0.33]}
                position={[-9.46, 14.5, 0.33]}

            >
                {/* <boxGeometry args={[12.5, 25.15, 0.15]} /> */}
                <boxGeometry args={[12.5, 22, 0.15]} />
                <meshStandardMaterial
                    map={tvTopRight} side={THREE.DoubleSide}
                    roughness={0.5} metalness={0.2}
                />
            </mesh>
            {/* <mesh
                geometry={nodes.wallplate1.geometry}
                material={nodes.wallplate1.material}
                position={[-22, 14.76, 0.33]}
                scale={[6.24, 10.9, 0.11]}
            />
            <mesh
                geometry={nodes.wallplate2.geometry}
                material={nodes.wallplate2.material}
                position={[-9.46, 14.76, 0.33]}
                scale={[6.24, 10.9, 0.11]}
            /> */}
            <group position={[-15.69, 14.32, 0.67]} rotation={[Math.PI / 2, 0, 0]} scale={[3.89, 2.73, 3.81]}>
                <mesh geometry={nodes.Plane.geometry} material={materials['Material.009']} />
                <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.010']} material-color='#000000' />
            </group>
            <group position={[-15.74, 6.01, 1.22]} scale={[12.53, 1.32, 0.75]}>
                <mesh geometry={nodes.Cube018.geometry} material={materials['Material.001']}
                    material-color='#343434'
                />
                <mesh geometry={nodes.Cube018_1.geometry} material={materials['Material.002']} />
            </group>
            <mesh
                geometry={nodes.table.geometry}
                material={materials['Black Marble']}
                position={[-15.82, 5.51, 7.89]}
                scale={[3.04, 1.02, 2.14]}
            // scale={[3.04, 1.02, 3.14]}
            >
                <meshStandardMaterial
                    map={CoffeeTableTexture}
                    side={THREE.DoubleSide}
                    roughness={0.5}
                    metalness={0.2}
                />
            </mesh>
            <mesh
                geometry={nodes.wall_wood001.geometry}
                material={nodes.wall_wood001.material}
                position={[-0.67, 14.65, 0.24]}
                scale={[2.52, 10.97, 0.24]}

            />
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials['Leather.002']}
                position={[-25.24, 5.59, 15.04]}
                scale={[2.65, 1.19, 5.44]}
                material-color='#EEDCA1 '
            />
            <group position={[-15, 6.62, 7.65]} scale={7.39}>
                <mesh geometry={nodes.Plane008.geometry} material={materials['Material.017']} />
                <mesh geometry={nodes.Plane008_1.geometry} material={materials['Material.018']} />
                <mesh geometry={nodes.Plane008_2.geometry} material={materials['Material.019']} />
            </group>
        </group>
    )
}

useGLTF.preload('./blender_model/FinalHall.glb')

export default Final_Living_Model