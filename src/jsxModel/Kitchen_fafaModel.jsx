'use client'
import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useSelector } from "react-redux"
// import { useSelector } from "react-redux"
import * as THREE from 'three';

const Kitchen_fafaModel = (props) => {
    const loader = new THREE.TextureLoader();
    const group = useRef()
    const { nodes, materials } = useGLTF('./blender_model/Kitchen_fafa.glb')
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
            <group position={[-13.87, 4.64, 42.71]} scale={[0.58, 0.39, 0.58]}>
                <mesh geometry={nodes.Mesh.geometry} material={materials['Stainless Steel.001']} />
                <mesh geometry={nodes.Mesh_1.geometry} material={nodes.Mesh_1.material} />
            </group>
            <group position={[-1.18, 4.37, 38.81]} rotation={[0, -Math.PI / 2, 0]} scale={[0.1, 0.02, 0.11]}>
                <mesh geometry={nodes.Cylinder007_1.geometry} material={nodes.Cylinder007_1.material} />
                <mesh geometry={nodes.Cylinder007_2.geometry} material={materials['Stainless Steel.003']} />
            </group>
            {/* <mesh
                geometry={nodes.bullnose.geometry}
                material={nodes.bullnose.material}
                position={[-13.38, 4.14, 43.33]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.12, 0.14, 4.71]}
            >
                <meshStandardMaterial color={'blue'} />

            </mesh>
            <mesh
                geometry={nodes.bullnose001.geometry}
                material={nodes.bullnose001.material}
                position={[-3.6, 4.14, 40.24]}
                rotation={[Math.PI / 2, -Math.PI / 2, 0]}
                scale={[0.12, 0.14, 9.63]}
            >
                <meshStandardMaterial color={'blue'} />

            </mesh> */}
            <mesh
                geometry={nodes.wall001.geometry}
                material={nodes.wall001.material}
                position={[-4.68, 7.54, 38.44]}
                scale={[10.59, 7.57, 0.14]}
            />
            <mesh
                geometry={nodes.wall.geometry}
                material={nodes.wall.material}
                position={[-15.18, 7.45, 45.26]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[6.68, 7.45, 0.14]}
            />
            <mesh
                geometry={nodes.flore.geometry}
                material={materials['Wood Floor']}
                position={[-4.48, -0.04, 45.1]}
                rotation={[-Math.PI / 2, 0, 0]}
                scale={[10.86, 6.6, 0.14]}
            />
            <mesh
                geometry={nodes.Cube003.geometry}
                material={materials['Material.004']}
                position={[-3.42, 11.74, 39.32]}
                scale={[11.68, 2.95, 0.74]}
            />
            <mesh
                geometry={nodes.Cube004.geometry}
                material={materials['Material.001']}
                position={[-1.49, 2.06, 39.36]}
                scale={[11.68, 1.97, 0.89]}
            />
            <mesh
                geometry={nodes.Cube006.geometry}
                material={materials['Material.002']}
                position={[-14.35, 2.02, 46.78]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[8.16, 2, 0.89]}
            />
            <mesh
                geometry={nodes.botom_cabinate_top1.geometry}
                material={nodes.botom_cabinate_top1.material}
                position={[-14.28, 4.14, 47.06]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[8.55, 0.12, 0.76]}
            />
            <mesh
                geometry={nodes.cabinate_4.geometry}
                material={nodes.cabinate_4.material}
                position={[-5.97, 2.22, 40.33]}
                scale={[2.37, 1.72, 0.01]}
            />
            <mesh
                geometry={nodes.Cube019.geometry}
                material={materials['Material.005']}
                position={[-14.39, 11.74, 43.57]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[3.5, 2.95, 0.7]}
            />
            <mesh
                geometry={nodes.cabinate_top_1.geometry}
                material={nodes.cabinate_top_1.material}
                position={[-12.34, 11.42, 40.08]}
                scale={[1.18, 2.63, 0.04]}
            />
            <mesh
                geometry={nodes.Cube029.geometry}
                material={nodes.Cube029.material}
                position={[-4.14, 14.39, 40.08]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.28, 10.94, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_top_11.geometry}
                material={nodes.cabinate_top_11.material}
                position={[-13.61, 11.42, 41.29]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.13, 2.63, 0.04]}
            />
            <mesh
                geometry={nodes.Cube032.geometry}
                material={nodes.Cube032.material}
                position={[-13.72, 14.39, 43.6]}
                rotation={[3.14, -1.57, 1.57]}
                scale={[0.28, 3.5, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_top_12.geometry}
                material={nodes.cabinate_top_12.material}
                position={[-13.61, 11.42, 43.66]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.13, 2.63, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_top_13.geometry}
                material={nodes.cabinate_top_13.material}
                position={[-13.61, 11.42, 46.01]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[1.13, 2.63, 0.04]}
            />
            <mesh
                geometry={nodes.Cube030.geometry}
                material={nodes.Cube030.material}
                position={[-3.35, 8.8, 39.39]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-11.68, -0.02, -0.72]}
            />
            <mesh
                geometry={nodes.Cube036.geometry}
                material={materials['Material.007']}
                position={[-14.41, 14.79, 43.58]}
                rotation={[0, 1.57, 0]}
                scale={[-3.63, -0.13, -0.72]}
            />
            <mesh
                geometry={nodes.Cube037.geometry}
                material={materials['Material.006']}
                position={[-4.2, 14.81, 39.41]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-10.29, -0.13, -0.7]}
            />
            <group position={[-14.31, 8.61, 43.05]} rotation={[0, Math.PI / 2, 0]} scale={[1.81, 0.14, 0.72]}>
                <mesh geometry={nodes.Cube046.geometry} material={materials['Material.003']} />
                <mesh geometry={nodes.Cube046_1.geometry} material={materials.brightness} />
                <mesh geometry={nodes.Cube046_2.geometry} material={materials['clock-three']} />
                <mesh geometry={nodes.Cube046_3.geometry} material={materials.fan} />
                <mesh geometry={nodes.Cube046_4.geometry} material={materials['hand-holding-seeding']} />
            </group>
            <mesh
                geometry={nodes.Cube008.geometry}
                material={nodes.Cube008.material}
                position={[-4.69, 15.05, 45.71]}
                scale={[10.63, 0.15, 7.4]}
            />
            <mesh
                geometry={nodes.wall_plane.geometry}
                material={nodes.wall_plane.material}
                position={[-4.43, 6.49, 38.61]}
                scale={[10.67, 2.26, 0.02]}
            />
            <mesh
                geometry={nodes.wall_plane_1.geometry}
                material={nodes.wall_plane_1.material}
                position={[-15.02, 6.54, 42.77]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[4.19, 2.26, 0.02]}
            />
            <mesh
                geometry={nodes.botom_cabinate_top1001.geometry}
                material={nodes.botom_cabinate_top1001.material}
                position={[4.06, 4.14, 39.33]}
                scale={[17.33, 0.12, 0.77]}
            />
            <mesh
                geometry={nodes.cabinate_8.geometry}
                material={nodes.cabinate_8.material}
                position={[-13.44, 2.22, 40.51]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[-0.4, -1.72, -0.01]}
            />
            <mesh
                geometry={nodes.cabinate_9.geometry}
                material={nodes.cabinate_9.material}
                position={[-13.44, 2.22, 46.54]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[-1.12, -1.72, -0.01]}
            />
            <mesh
                geometry={nodes.Cube002.geometry}
                material={nodes.Cube002.material}
                position={[-14.34, 8.8, 43.63]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[-3.55, -0.02, -0.7]}
            />
            <mesh
                geometry={nodes.cabinate_1006.geometry}
                material={nodes.cabinate_1006.material}
                position={[-14.28, 2.21, 47.71]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.83, 1.81, 0.08]}
            />
            <mesh
                geometry={nodes.cabinate_7.geometry}
                material={nodes.cabinate_7.material}
                position={[-13.41, 2.22, 43.15]}
                rotation={[Math.PI, Math.PI / 2, 0]}
                scale={[-2.21, -1.72, -0.01]}
            />
            <group position={[-14.21, 4.26, 43.02]} rotation={[0, Math.PI / 2, 0]} scale={[3.72, 5.38, 3.11]}>
                <mesh geometry={nodes.Cube045.geometry} material={materials['Fridge Stainless Steel.004']} />
                <mesh geometry={nodes.Cube045_1.geometry} material={materials['Dark cooker.001']} />
                <mesh geometry={nodes.Cube045_2.geometry} material={materials['Black.001']} />
            </group>
            <mesh
                geometry={nodes.cabinate_top_1001.geometry}
                material={nodes.cabinate_top_1001.material}
                position={[-9.91, 11.42, 40.08]}
                scale={[1.18, 2.63, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_top_1002.geometry}
                material={nodes.cabinate_top_1002.material}
                position={[-7.49, 11.42, 40.08]}
                scale={[1.18, 2.63, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_top_1003.geometry}
                material={nodes.cabinate_top_1003.material}
                position={[-5.06, 11.42, 40.08]}
                scale={[1.18, 2.63, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_top_1004.geometry}
                material={nodes.cabinate_top_1004.material}
                position={[-2.64, 11.42, 40.08]}
                scale={[1.18, 2.63, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_top_1005.geometry}
                material={nodes.cabinate_top_1005.material}
                position={[-0.21, 11.42, 40.08]}
                scale={[1.18, 2.63, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_top_1006.geometry}
                material={nodes.cabinate_top_1006.material}
                position={[2.22, 11.42, 40.08]}
                scale={[1.18, 2.63, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_top_1007.geometry}
                material={nodes.cabinate_top_1007.material}
                position={[4.64, 11.42, 40.08]}
                scale={[1.18, 2.63, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_6.geometry}
                material={nodes.cabinate_6.material}
                position={[-12.05, 2.21, 40.26]}
                scale={[1.18, 1.72, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_5.geometry}
                material={nodes.cabinate_5.material}
                position={[-9.6, 2.21, 40.26]}
                scale={[1.18, 1.72, 0.04]}
            />
            <mesh
                geometry={nodes.cabinate_3.geometry}
                material={nodes.cabinate_3.material}
                position={[-1.17, 2.22, 40.33]}
                scale={[2.37, 1.72, 0.01]}
            />
            <mesh
                geometry={nodes.cabinate_2.geometry}
                material={nodes.cabinate_2.material}
                position={[3.63, 2.22, 40.33]}
                scale={[2.37, 1.72, 0.01]}
            />
            <mesh
                geometry={nodes.cabinate_1001.geometry}
                material={nodes.cabinate_1001.material}
                position={[-14.32, 11.75, 47.16]}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[0.66, 2.93, 0.08]}
            />
            <mesh
                geometry={nodes.cabinate_1002.geometry}
                material={nodes.cabinate_1002.material}
                position={[5.85, 11.71, 39.34]}
                rotation={[0, -1.57, 0]}
                scale={[0.73, 2.93, 0.08]}
            />
            <mesh
                geometry={nodes.cabinate_1003.geometry}
                material={nodes.cabinate_1003.material}
                position={[6.01, 2.17, 39.34]}
                rotation={[0, -1.57, 0]}
                scale={[0.91, 2.07, 0.08]}
            />
            <mesh
                geometry={nodes.wall002.geometry}
                material={nodes.wall002.material}
                position={[6.09, 7.53, 45]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[6.68, 7.6, 0.14]}
            />
            <mesh
                geometry={nodes.flat_polish.geometry}
                material={nodes.flat_polish.material}
                position={[-13.39, 4.14, 47.06]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[8.55, 0.12, 0.14]}
            />
            <mesh
                geometry={nodes.flat_polish001.geometry}
                material={nodes.flat_polish001.material}
                position={[4.08, 4.14, 40.24]}
                scale={[17.35, 0.12, 0.14]}
            />
            {/* <mesh
                geometry={nodes.round_edge.geometry}
                material={nodes.round_edge.material}
                position={[-13.34, 4.14, 47.06]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[8.55, 0.12, 0.11]}
            >
                <meshStandardMaterial color={'red'} />
            </mesh>
            <mesh
                geometry={nodes.round_edge001.geometry}
                material={nodes.round_edge001.material}
                position={[-11.61, 4.14, 40.31]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[17.65, 0.12, 0.13]}

            >
                <meshStandardMaterial color={'red'} />
            </mesh> */}
            <mesh
                geometry={nodes.chamfer.geometry}
                material={nodes.chamfer.material}
                position={[-13.4, 4.14, 47.06]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[8.55, 0.12, 0.14]}
            >
                <meshStandardMaterial color={'pink'} />

            </mesh>
            <mesh
                geometry={nodes.chamfer001.geometry}
                material={nodes.chamfer001.material}
                position={[-11.58, 4.14, 40.22]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[17.62, 0.12, 0.14]}
            >
                <meshStandardMaterial color={'pink'} />
            </mesh>
            <mesh
                geometry={nodes.bevel.geometry}
                material={nodes.bevel.material}
                position={[-13.39, 4.14, 39.47]}
                rotation={[-Math.PI, -Math.PI / 2, 0]}
                scale={[8.55, 0.12, 0.14]}
            >
                <meshStandardMaterial color={'yellow'} />
            </mesh>
            <mesh
                geometry={nodes.bevel001.geometry}
                material={nodes.bevel001.material}
                position={[4.11, 4.14, 40.22]}
                rotation={[-Math.PI, 0, 0]}
                scale={[17.54, 0.12, 0.14]}
            >
                <meshStandardMaterial color={'yellow'} />
            </mesh>
            <mesh
                geometry={nodes.double_flat.geometry}
                material={nodes.double_flat.material}
                position={[-13.39, 3.91, 47.06]}
                rotation={[0, -Math.PI / 2, 0]}
                scale={[8.55, 0.12, 0.14]}
            >
                <meshStandardMaterial color={'black'} />
            </mesh>
            <mesh
                geometry={nodes.double_flat001.geometry}
                material={nodes.double_flat001.material}
                position={[-11.58, 3.91, 40.22]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[17.68, 0.12, 0.14]}
            >
                <meshStandardMaterial color={'black'} />
            </mesh>
        </group>
    )
}

useGLTF.preload('./blender_model/Kitchen_fafa.glb')

export default Kitchen_fafaModel