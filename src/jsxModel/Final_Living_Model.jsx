'use client'
import React, { useEffect, useRef } from 'react'
import { MeshPortalMaterial, MeshReflectorMaterial, useGLTF, useTexture } from '@react-three/drei'
import { AdditiveBlending } from 'three'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { useSelector } from 'react-redux';
import { driver } from 'driver.js'


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
    const texture = useTexture('./images/lasttry.jpg')
    texture.flipY = false;
    // texture.encoding = THREE.sRGBEncoding;
    texture.colorSpace = THREE.SRGBColorSpace;
    const LivingroomParameter = useSelector((state) => state.LivingroomParameter?.present)

    const textureMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
    });

    const floorTexture = loader.load(LivingroomParameter.floor?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(5, 5);
    });
    // const bookCover = loader.load('./images/bookCover.jpg', (texture) => {
    //     texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    //     texture.repeat.set(1, 1);
    // });
    const tvconsoleLeft = loader.load(LivingroomParameter.TVConsole?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });
    const tvconsoleRight = loader.load(LivingroomParameter.TVConsole?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });

    tvconsoleRight.flipY = false; // tvconsoleRight.repeat.x = -1; tvconsoleRight.center.set(0.5, 0.5);
    tvconsoleRight.rotation = Math.PI;

    const CoffeeTableTexture = loader.load(LivingroomParameter.CoffeTable?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });

    let wall_color = LivingroomParameter?.wall.color
    useEffect(() => {
        setTimeout(() => model_Walkthrough(), 500);
    }, []);

    const { nodes, materials } = useGLTF("./blender_model/lasttrynew.glb");
    return (
        <group {...props} dispose={null}>

            {/* reflective floor surface */}
            {/* <mesh position={[0, -1.27, 1.45]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow> */}
            {/* <planeGeometry args={[4.4, 5.6, 5]} /> */}
            <mesh position={[0, -1.27, 2.6]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[5.4, 8.2, 5]} />
                <MeshReflectorMaterial
                    map={floorTexture} // Apply the texture here
                    resolution={720}
                    args={[35, 27]} // Adjust the size of the reflector
                    mirror={0.3}
                    mixBlur={8}
                    mixStrength={0.5}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.left_wall.geometry}
                // position={[-0.289, 0.053, 1.441]}
                // scale={[1, 0.898, 1]}
                scale={[1, 0.898, 1.45]}
                position={[-0.289, 0.053, 2.6]}
            >
                <meshStandardMaterial color={wall_color} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.right_wall.geometry}
                // position={[0.264, 0.051, 1.441]}
                // scale={[1, 0.898, 1]}
                scale={[1, 0.898, 1.45]}
                position={[0.264, 0.051, 2.6]}
            >
                <meshStandardMaterial color={wall_color} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.celling.geometry}
                material={nodes.celling.material}
                position={[-0.014, 0.118, 2.2]}
                scale={[1, 1, 1.4]}
            />
            {/* <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor.geometry}
                material={textureMaterial}
                position={[-0.011, -0.014, 1.43]}
                scale={[1.138, 1, 1.966]}
            /> */}
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tv001.geometry}
                material={textureMaterial}
                position={[0, -0.068, -1.257]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wood.geometry}
                material={textureMaterial}
                position={[1.863, 0.056, -1.293]}
                scale={[0.816, 0.898, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wood001.geometry}
                material={textureMaterial}
                position={[-1.885, 0.056, -1.293]}
                scale={[0.816, 0.898, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass.geometry}
                material={materials["Glass.001"]}
                position={[-0.251, -0.971, 0.104]}
            >
                {/* <meshBasicMaterial opacity={0.4} transparent /> */}
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall_plane001.geometry}
                position={[-0.79, 0.037, -1.3]}
                scale={[1.127, 1.09, 1]}
            >
                <boxGeometry args={[1.4, 2.5, 0.03]} />
                <MeshReflectorMaterial
                    map={tvconsoleLeft} // Apply the texture here
                    resolution={720}
                    args={[35, 27]} // Adjust the size of the reflector
                    // mirror={1}
                    mirror={0.2}
                    mixBlur={8}
                    mixStrength={0.5}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall_plane.geometry}
                // position={[0, 0.022, 0]}
                position={[0.79, 0.037, -1.3]}
                scale={[1.127, 1.09, 1]}
            >
                <boxGeometry args={[1.4, 2.5, 0.03]} />
                <MeshReflectorMaterial
                    map={tvconsoleRight} // Apply the texture here
                    resolution={720}
                    args={[35, 27]} // Adjust the size of the reflector
                    mirror={0.2}
                    mixBlur={8}
                    mixStrength={0.5}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.cabinate.geometry}
                material={textureMaterial}
                scale={[1.127, 1, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table.geometry}
                // material={nodes.table.material}
                position={[-0.066, -1.163, 0.081]}
                scale={[0.859, 1.015, 1.264]}
            >
                <meshStandardMaterial
                    map={CoffeeTableTexture}
                    side={THREE.DoubleSide}
                    roughness={0.5}
                    metalness={0.2}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.parda.geometry}
                material={textureMaterial}
                position={[-0.287, 0.038, 1.097]}
                scale={[1, 0.912, 1]}
            />
            <group position={[0, 0, 4.837]} rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.w3_lambert3SG1_0016.geometry}
                        material={textureMaterial}
                        position={[-3.989, -77.906, -471.148]}
                        rotation={[1.023, 0.996, -1.155]}
                    />
                </group>
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.front_wall.geometry}
                // material={nodes.front_wall.material}
                position={[-0.005, 0.199, 10]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2, 2, 2]}
            >
                <meshStandardMaterial color={wall_color}
                    side={THREE.DoubleSide}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={textureMaterial}
                position={[-1.546, -1.168, 1.052]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube003.geometry}
                material={textureMaterial}
                position={[-1.519, -1.17, 0.836]}
                scale={[1, 0.822, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={textureMaterial}
                position={[-1.519, -1.17, 0.836]}
                scale={[1, 0.822, 1]}
            />
            <group position={[0.072, -1.045, 0.057]} rotation={[0, Math.PI / 2, 0]}>
                <group
                    position={[0, 0.034, -0.001]}
                    rotation={[Math.PI, -1.429, Math.PI]}
                >
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane007.geometry}
                        material={materials["Cover book-02.001"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane007_1.geometry}
                        material={materials["paper.001"]}
                    />
                </group>
                <group position={[0, 0.017, 0.005]} rotation={[0, -Math.PI / 2, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane006.geometry}
                        material={materials["Cover book-03"]}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.Plane006_1.geometry}
                        material={textureMaterial}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("./blender_model/lasttrynew.glb");
useTexture.preload("./images/lasttry.jpg");
export default Final_Living_Model