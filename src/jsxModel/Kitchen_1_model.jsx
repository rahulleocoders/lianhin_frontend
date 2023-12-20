'use client'
import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useSelector } from "react-redux"
// import { useSelector } from "react-redux"
import * as THREE from 'three';

const cabinetTopData = [
    { position: [-12.5, 10.68, 73.75], rotation: [0, 0, 0], scale: [1.06, 2.63, 0.04] },
    { position: [-10.35, 10.68, 73.75], rotation: [0, 0, 0], scale: [1.06, 2.63, 0.04] },
    { position: [-8.2, 10.68, 73.75], rotation: [0, 0, 0], scale: [1.06, 2.63, 0.04] },
    { position: [-6.04, 10.68, 73.75], rotation: [0, 0, 0], scale: [1.06, 2.63, 0.04] },
    { position: [-3.89, 10.68, 73.75], rotation: [0, 0, 0], scale: [1.06, 2.63, 0.04] },
    { position: [-1.73, 10.68, 73.75], rotation: [0, 0, 0], scale: [1.06, 2.63, 0.04] },
    { position: [0.42, 10.68, 73.75], rotation: [0, 0, 0], scale: [1.06, 2.63, 0.04] },
    { position: [2.58, 10.68, 73.75], rotation: [0, 0, 0], scale: [1.06, 2.63, 0.04] },
    { position: [4.73, 10.68, 73.75], rotation: [0, 0, 0], scale: [1.06, 2.63, 0.04] },
    { position: [6.89, 10.68, 73.75], rotation: [0, 0, 0], scale: [1.06, 2.63, 0.04] },
    { position: [-13.61, 10.68, 74.97], rotation: [0, -Math.PI / 2, 0], scale: [1.13, 2.63, 0.04] },
    { position: [-13.61, 10.68, 77.29], rotation: [0, -Math.PI / 2, 0], scale: [1.13, 2.63, 0.04] },
    { position: [-13.61, 10.68, 79.59], rotation: [0, -Math.PI / 2, 0], scale: [1.13, 2.63, 0.04] },
];

const cabinetBottomData = [
    { position: [-1.49, 2.06, 73.11], rotation: [0, 0, 0], scale: [11.68, 1.97, 0.89] },
    { position: [6.32, 2.22, 74.08], rotation: [0, 0, 0], scale: [2.21, 1.72, 0.09] },
    { position: [-14.14, 2.02, 80.45], rotation: [0, -Math.PI / 2, 0], scale: [8.16, 2, 0.89] },
    { position: [-2.59, 2.22, 74.08], rotation: [0, 0, 0], scale: [2.21, 1.72, 0.09] },
    { position: [-7.05, 2.22, 74.08], rotation: [0, 0, 0], scale: [2.21, 1.72, 0.09] },
    { position: [-10.29, 2.22, 74.09], rotation: [0, 0, 0], scale: [1, 1.72, 0.08] },
    { position: [-12.26, 2.22, 74.09], rotation: [0, 0, 0], scale: [0.94, 1.72, 0.08] },
    { position: [-14.99, 4.61, 75.91], rotation: [-Math.PI / 2, 0, 0], scale: [0.01, 0.16, 0.01] },
    { position: [-13.21, 2.22, 74.67], rotation: [0, Math.PI / 2, 0], scale: [0.4, 1.72, 0.08] },
    { position: [-14.12, 2.21, 81.38], rotation: [Math.PI, 0, Math.PI], scale: [0.86, 1.81, 0.08] },
];



const Kitchen_1_model = (props) => {
    const loader = new THREE.TextureLoader();
    const group = useRef()
    const { nodes, materials } = useGLTF('./blender_model/kitche_1.glb')
    const LivingroomParameter = useSelector((state) => state.LivingroomParameter?.present);
    const floorTexture = loader.load(LivingroomParameter.floor?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(10, 10);
    });
    const CoffeeTableTexture = loader.load(LivingroomParameter.CoffeTable?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });
    const tvTopLeft = loader.load(LivingroomParameter.TVConsole?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh
                geometry={nodes.wall001.geometry}
                material={nodes.wall001.material}
                position={[-3.29, 7.24, 72.11]}
                scale={[12.02, 7.21, 0.14]}
            />
            <mesh
                geometry={nodes.wall.geometry}
                material={nodes.wall.material}
                position={[-15.18, 7.26, 78.93]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[6.68, 7.19, 0.14]}
            />
            <mesh
                geometry={nodes.flore.geometry}
                material={materials['Wood Floor']}
                position={[-3.07, -0.04, 82.32]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[12.22, 10.35, 0.14]}
            >
                <meshStandardMaterial
                    map={floorTexture}
                    side={THREE.DoubleSide}
                    roughness={0.5}
                    metalness={0.2}
                />
            </mesh>
            <mesh
                geometry={nodes.Cube003.geometry}
                material={materials['Material.004']}
                position={[-3.42, 11, 72.98]}
                scale={[11.68, 2.95, 0.74]}
                material-color='black'
            />
            <mesh
                geometry={nodes.Cube004.geometry}
                material={materials['Material.001']}
                position={[-1.49, 2.06, 73.11]}
                scale={[11.68, 1.97, 0.89]}
            />

            <mesh
                geometry={nodes.Cube006.geometry}
                material={materials['Material.002']}
                position={[-14.14, 2.02, 80.45]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[8.16, 2, 0.89]}
            />
            <mesh
                geometry={nodes.botom_cabinate_top1.geometry}
                material={nodes.botom_cabinate_top1.material}
                position={[-14.14, 4.14, 80.73]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[8.55, 0.12, 0.94]}
            >
                <meshStandardMaterial
                    map={tvTopLeft}
                    side={THREE.DoubleSide}
                    roughness={0.5}
                    metalness={0.2}
                />
            </mesh>
            {cabinetBottomData.map((data, index) => (
                <mesh
                    key={index}
                    geometry={nodes[`cabinate_${index + 1}`]?.geometry}
                    material={nodes[`cabinate_${index + 1}`]?.material}
                    position={data.position}
                    // rotation={data.rotation}
                    scale={data.scale}
                >
                    <meshStandardMaterial map={CoffeeTableTexture} side={THREE.DoubleSide} roughness={0.5} metalness={0.2} />
                </mesh>
            ))}

            {/* <mesh
                geometry={nodes.cabinate_1.geometry}
                material={nodes.cabinate_1.material}
                position={[-12.26, 2.22, 74.09]}
                scale={[0.94, 1.72, 0.08]}
            />
            <mesh
                geometry={nodes.cabinate_2.geometry}
                material={nodes.cabinate_2.material}
                position={[-10.29, 2.22, 74.09]}
                scale={[1, 1.72, 0.08]}
            />
            <mesh
                geometry={nodes.cabinate_3.geometry}
                material={nodes.cabinate_3.material}
                position={[-7.05, 2.22, 74.08]}
                scale={[2.21, 1.72, 0.09]}
            />
            <mesh
                geometry={nodes.cabinate_4.geometry}
                material={nodes.cabinate_4.material}
                position={[-2.59, 2.22, 74.08]}
                scale={[2.21, 1.72, 0.09]}
            />
            <mesh
                geometry={nodes.cabinate_5.geometry}
                material={nodes.cabinate_5.material}
                position={[1.86, 2.22, 74.08]}
                scale={[2.21, 1.72, 0.09]}
            >
                <meshStandardMaterial
                    map={floorTexture}
                    side={THREE.DoubleSide}
                    roughness={0.5}
                    metalness={0.2}
                />
            </mesh>
            <mesh
                geometry={nodes.cabinate_6.geometry}
                material={nodes.cabinate_6.material}
                position={[6.32, 2.22, 74.08]}
                scale={[2.21, 1.72, 0.09]}
            />
            <mesh
                geometry={nodes.cabinate_7.geometry}
                material={nodes.cabinate_7.material}
                position={[-13.21, 2.22, 77.31]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[2.21, 1.72, 0.09]}
            />
            <mesh
                geometry={nodes.cabinate_8.geometry}
                material={nodes.cabinate_8.material}
                position={[-13.21, 2.22, 74.67]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.4, 1.72, 0.08]}
            />
            <mesh
                geometry={nodes.cabinate_9.geometry}
                material={nodes.cabinate_9.material}
                position={[-13.21, 2.22, 80.51]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.94, 1.72, 0.08]}
            />


            <mesh
                geometry={nodes.cabinate_1006.geometry}
                material={nodes.cabinate_1006.material}
                position={[-14.12, 2.21, 81.38]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.86, 1.81, 0.08]}
                material-color='blue'
            /> */}
            <mesh
                geometry={nodes.Cube019.geometry}
                material={materials['Material.005']}
                position={[-14.39, 11, 77.24]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[3.5, 2.95, 0.7]}
            />
            {cabinetTopData.map((data, index) => (
                <mesh
                    key={index}
                    geometry={nodes[`cabinate_top_${index + 1}`].geometry}
                    material={nodes[`cabinate_top_${index + 1}`].material}
                    position={data.position}
                    rotation={data.rotation}
                    scale={data.scale}
                >
                    <meshStandardMaterial map={CoffeeTableTexture} side={THREE.DoubleSide} roughness={0.5} metalness={0.2} />
                </mesh>
            ))}
            {/* <mesh
                geometry={nodes.cabinate_top_10.geometry}
                material={nodes.cabinate_top_10.material}
                position={[6.89, 10.68, 73.75]}
                scale={[1.06, 2.63, 0.04]}
            /> */}

            {/* <mesh
                geometry={nodes.cabinate_top_9.geometry}
                material={nodes.cabinate_top_9.material}
                position={[4.73, 10.68, 73.75]}
                scale={[1.06, 2.63, 0.04]}
            /> */}
            {/* <mesh
                geometry={nodes.cabinate_top_8.geometry}
                material={nodes.cabinate_top_8.material}
                position={[2.58, 10.68, 73.75]}
                scale={[1.06, 2.63, 0.04]}
            /> */}
            {/* <mesh
                geometry={nodes.cabinate_top_7.geometry}
                material={nodes.cabinate_top_7.material}
                position={[0.42, 10.68, 73.75]}
                scale={[1.06, 2.63, 0.04]}
            /> */}
            {/* <mesh
                geometry={nodes.cabinate_top_6.geometry}
                material={nodes.cabinate_top_6.material}
                position={[-1.73, 10.68, 73.75]}
                scale={[1.06, 2.63, 0.04]}
            /> */}
            {/* <mesh
                geometry={nodes.cabinate_top_5.geometry}
                material={nodes.cabinate_top_5.material}
                position={[-3.89, 10.68, 73.75]}
                scale={[1.06, 2.63, 0.04]}
            /> */}
            {/* <mesh
                geometry={nodes.cabinate_top_4.geometry}
                material={nodes.cabinate_top_4.material}
                position={[-6.04, 10.68, 73.75]}
                scale={[1.06, 2.63, 0.04]}
            /> */}
            {/* <mesh
                geometry={nodes.cabinate_top_3.geometry}
                material={nodes.cabinate_top_3.material}
                position={[-8.2, 10.68, 73.75]}
                scale={[1.06, 2.63, 0.04]}
            /> */}
            {/* <mesh
                geometry={nodes.cabinate_top_2.geometry}
                material={nodes.cabinate_top_2.material}
                position={[-10.35, 10.68, 73.75]}
                scale={[1.06, 2.63, 0.04]}
            /> */}
            {/* <mesh
                geometry={nodes.cabinate_top_1.geometry}
                material={nodes.cabinate_top_1.material}
                position={[-12.5, 10.68, 73.75]}
                scale={[1.06, 2.63, 0.04]}
            >
                <meshStandardMaterial
                    map={CoffeeTableTexture}
                    side={THREE.DoubleSide}
                    roughness={0.5}
                    metalness={0.2}
                />
            </mesh> */}

            {/* <mesh
                geometry={nodes.cabinate_top_11.geometry}
                material={nodes.cabinate_top_11.material}
                position={[-13.61, 10.68, 74.97]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.13, 2.63, 0.04]}
            /> */}

            {/* <mesh
                geometry={nodes.cabinate_top_12.geometry}
                material={nodes.cabinate_top_12.material}
                position={[-13.61, 10.68, 77.29]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.13, 2.63, 0.04]}
            /> */}
            {/* <mesh
                geometry={nodes.cabinate_top_13.geometry}
                material={nodes.cabinate_top_13.material}
                position={[-13.61, 10.68, 79.59]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.13, 2.63, 0.04]}
            /> */}
            <mesh
                geometry={nodes.Cube029.geometry}
                material={nodes.Cube029.material}
                position={[-4.14, 13.66, 73.75]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.28, 10.94, 0.04]}
            />
            <mesh
                geometry={nodes.Cube032.geometry}
                material={nodes.Cube032.material}
                position={[-13.72, 13.66, 80.73]}
                rotation={[3.14, -1.57, 1.57]}
                scale={[0.28, 6.99, 0.04]}
            />
            <mesh
                geometry={nodes.Cube030.geometry}
                material={nodes.Cube030.material}
                position={[-3.35, 8.06, 73.05]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-11.68, -0.02, -0.72]}
            />
            <mesh
                geometry={nodes.Cube036.geometry}
                material={materials['Material.007']}
                position={[-14.41, 14.05, 80.73]}
                rotation={[0, 1.57, 0]}
                scale={[-6.96, -0.13, -0.72]}
            />
            <mesh
                geometry={nodes.Cube037.geometry}
                material={materials['Material.006']}
                position={[-3.4, 14.08, 73.08]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-11.68, -0.13, -0.7]}
            />
            <group position={[-14.34, 7.9, 76.72]} rotation={[0, Math.PI / 2, 0]} scale={[1.81, 0.14, 0.72]}>
                <mesh geometry={nodes.Cube046.geometry} material={materials['Material.003']} />
                <mesh geometry={nodes.Cube046_1.geometry} material={materials.brightness} />
                <mesh geometry={nodes.Cube046_2.geometry} material={materials['clock-three']} />
                <mesh geometry={nodes.Cube046_3.geometry} material={materials.fan} />
                <mesh geometry={nodes.Cube046_4.geometry} material={materials['hand-holding-seeding']} />
            </group>
            <mesh
                geometry={nodes.Cube008.geometry}
                material={nodes.Cube008.material}
                position={[-4, 14.32, 79.38]}
                scale={[11.31, 0.15, 7.4]}
            />
            <mesh
                geometry={nodes.wall_plane.geometry}
                material={nodes.wall_plane.material}
                position={[-3.23, 6.14, 72.28]}
                scale={[11.85, 1.93, 0.02]}
            />
            <mesh
                geometry={nodes.wall_plane_1.geometry}
                material={nodes.wall_plane_1.material}
                position={[-15.02, 6.14, 76.44]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[4.19, 1.93, 0.02]}
            />
            <mesh
                geometry={nodes.botom_cabinate_top1001.geometry}
                material={nodes.botom_cabinate_top1001.material}
                position={[2.59, 4.14, 73.22]}
                scale={[15.81, 0.12, 0.94]}
            >
                <meshStandardMaterial
                    map={tvTopLeft}
                    side={THREE.DoubleSide}
                    roughness={0.5}
                    metalness={0.2}
                />
            </mesh>

            <mesh
                geometry={nodes.Cube002.geometry}
                material={nodes.Cube002.material}
                position={[-14.24, 8.06, 77.87]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[-4.23, -0.02, -0.7]}
            />


            <mesh
                geometry={nodes.Cylinder011.geometry}
                material={nodes.Cylinder011.material}
                position={[-2.33, 5.51, 73.21]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.06, 0.02, 0.06]}
            />
            <mesh
                geometry={nodes.Cylinder004.geometry}
                material={nodes.Cylinder004.material}
                position={[-14.99, 4.61, 75.91]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[0.01, 0.16, 0.01]}
            />
            <group position={[-14.1, 4.26, 76.69]} rotation={[0, Math.PI / 2, 0]} scale={[3.72, 5.38, 3.63]}>
                <mesh geometry={nodes.Cube045.geometry} material={materials['Fridge Stainless Steel.004']} />
                <mesh geometry={nodes.Cube045_1.geometry} material={materials['Dark cooker.001']} />
                <mesh geometry={nodes.Cube045_2.geometry} material={materials['Black.001']} />
            </group>
        </group>
    )
}
useGLTF.preload('./blender_model/kitche_1.glb')
export default Kitchen_1_model