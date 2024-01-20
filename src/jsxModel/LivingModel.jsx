import React, { useRef } from 'react'
import { MeshPortalMaterial, MeshReflectorMaterial, useGLTF, useTexture } from '@react-three/drei'
import { AdditiveBlending } from 'three'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three';
import { useSelector } from 'react-redux';



const LivingModel = (props) => {
    const loader = new THREE.TextureLoader();
    const texture = useTexture('./images/finalhallwithbake.jpg')
    texture.flipY = false;
    texture.encoding = THREE.sRGBEncoding;
    const LivingroomParameter = useSelector((state) => state.LivingroomParameter?.present);

    const textureMaterial = new THREE.MeshStandardMaterial({
        map: texture,
        transparent: true,
        opacity: 1,
    });

    const floorTexture = loader.load(LivingroomParameter.floor?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(5, 5);
    });
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

    const { nodes, materials } = useGLTF("./blender_model/finalhallwithbake.glb");
    return (
        <group {...props} dispose={null}>

            {/* reflective floor surface */}
            <mesh position={[0, -1.27, 0]} rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <planeGeometry args={[3.85, 2.8, 10]} />
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
            // material={nodes.left_wall.material}
            >
                <meshStandardMaterial color={wall_color} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.right_wall.geometry}
            // material={nodes.right_wall.material}
            >
                <meshStandardMaterial color={wall_color} />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.celling.geometry}
                material={nodes.celling.material}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.floor.geometry}
            // material={nodes.floor.material}
            />
            <group position={[0.131, -1.03, -0.475]} scale={0.99}>
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane057.geometry}
                    material={textureMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane057_1.geometry}
                    material={textureMaterial}
                />
                <mesh
                    castShadow
                    receiveShadow
                    geometry={nodes.Plane057_2.geometry}
                    material={textureMaterial}
                />
            </group>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.tv001.geometry}
                material={textureMaterial}
                position={[0, 0.028, -1.257]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube.geometry}
                material={textureMaterial}
                position={[1.651, 0.003, -1.293]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube001.geometry}
                material={textureMaterial}
                position={[-1.655, 0.003, -1.293]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Cube002.geometry}
                material={textureMaterial}
                position={[-1.417, -1.124, 0.493]}
                scale={[1.061, 0.906, 1]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall_plane001.geometry}
                position={[-0.702, 0.03, -1.3]}
            // material={nodes.wall_plane001.material}
            >
                <boxGeometry
                    args={[1.4, 2.5, 0.03]}
                />
                <MeshReflectorMaterial
                    map={tvconsoleLeft} // Apply the texture here
                    resolution={720}
                    args={[35, 27]} // Adjust the size of the reflector
                    mirror={0.2}
                    // mirror={1}
                    mixBlur={8}
                    mixStrength={0.5}
                />
            </mesh>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.wall_plane.geometry}
                // material={nodes.wall_plane.material}
                position={[0.702, 0.03, -1.3]}
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
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.table.geometry}
                // material={textureMaterial}
                scale={[1.427, 1, 1]}
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
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.glass.geometry}
                // material={materials.Glass}
                position={[-0.145, 0, 0]}
            >
                {/* <boxGeometry /> */}
                <meshBasicMaterial color="#ffffff" opacity={0.4} transparent />
            </mesh>

            <group position={[-0.262, -0.854, -0.564]} scale={0.115}>
                <group position={[0, -0.794, 0]}>
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.trunk022.geometry}
                        material={textureMaterial}
                    />
                    <mesh
                        castShadow
                        receiveShadow
                        geometry={nodes.trunk022_1.geometry}
                        material={textureMaterial}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("./blender_model/finalhallwithbake.glb");
useTexture.preload("./images/finalhallwithbake.jpg");
export default LivingModel