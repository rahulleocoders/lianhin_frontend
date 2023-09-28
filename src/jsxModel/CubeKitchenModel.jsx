import { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import { Textureimages } from '@/local_data'
import * as THREE from 'three';



const CubeKitchenModel = (props) => {
    const group = useRef()
    const { nodes, materials } = useGLTF('/blender_model/cubeKitchen.glb')
    const floorTexture = useTexture(Textureimages[0]);
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(1, 2);
    // floorTexture.wrapS = THREE.ClampToEdgeWrapping; // Clamp horizontally
    // floorTexture.wrapT = THREE.ClampToEdgeWrapping;\
    // let textureAspect = floorTexture.image.width / floorTexture.image.height; 
    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[-4.05, 3.53, -2.07]}>
                <group position={[3.36, -1.76, 2.04]} scale={[1, 1.27, 1]}>
                    <mesh geometry={nodes.Circle007.geometry} material={materials['Stainless Steel Clean.006']} />
                    <mesh geometry={nodes.Circle007_1.geometry} material={materials['Stainless Steel Clean.007']} />
                    <mesh geometry={nodes.Circle007_2.geometry} material={materials['Stainless Steel Clean.008']} />
                    <mesh geometry={nodes.Circle007_3.geometry} material={materials['Brushed stainless steel.002']} />
                    <mesh geometry={nodes.Circle007_4.geometry} material={materials['Material.010']} />
                    <mesh geometry={nodes.Circle007_5.geometry} material={materials['Metal Mesh Grill.002']} />
                </group>
            </group>
            <group position={[-2.6, 4.93, 2]} scale={0.25}>
                <mesh
                    geometry={nodes.besing.geometry}
                    material={materials['Material.006']}
                    position={[9.33, -14.12, -8.13]}
                    rotation={[0, Math.PI / 2, 0]}
                    scale={[10.48, 4.01, 8.78]}
                />
            </group>
            <group position={[5.48, 1, -4.43]} scale={[1.09, 1, 3.03]}>
                <group position={[-0.15, 0.86, 0.01]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 1.72, 0.81]}>
                    <mesh geometry={nodes.Cube029.geometry} material={materials['Ash 001']} />
                    <mesh geometry={nodes.Cube029_1.geometry} material={materials['Matal solid paint white']} />
                </group>
            </group>
            <group position={[4.99, 2.46, -4.1]} scale={1.63}>
                <group position={[0.01, 0, 0]}>
                    <mesh geometry={nodes.Vert.geometry} material={nodes.Vert.material} />
                    <mesh geometry={nodes.Vert_1.geometry} material={nodes.Vert_1.material} />
                </group>
                <group position={[0.37, 0, 0]}>
                    <mesh geometry={nodes.Vert001.geometry} material={nodes.Vert001.material} />
                    <mesh geometry={nodes.Vert001_1.geometry} material={nodes.Vert001_1.material} />
                </group>
                <group position={[0.37, -0.72, 0]}>
                    <mesh geometry={nodes.Vert002.geometry} material={nodes.Vert002.material} />
                    <mesh geometry={nodes.Vert002_1.geometry} material={nodes.Vert002_1.material} />
                </group>
                <group position={[0.13, -1.4, 0]}>
                    <mesh geometry={nodes.Vert003.geometry} material={nodes.Vert003.material} />
                    <mesh geometry={nodes.Vert003_1.geometry} material={nodes.Vert003_1.material} />
                </group>
            </group>
            <group position={[5.02, 1.87, -4.09]} scale={1.65}>
                <group position={[0.01, 0, 0.02]}>
                    <mesh geometry={nodes.Cylinder018.geometry} material={nodes.Cylinder018.material} />
                    <mesh geometry={nodes.Cylinder018_1.geometry} material={nodes.Cylinder018_1.material} />
                    <mesh geometry={nodes.Cylinder018_2.geometry} material={nodes.Cylinder018_2.material} />
                    <mesh geometry={nodes.Cylinder018_3.geometry} material={nodes.Cylinder018_3.material} />
                </group>
                <group position={[0.11, -0.36, -0.01]} scale={1.03}>
                    <mesh geometry={nodes.Cylinder019.geometry} material={nodes.Cylinder019.material} />
                    <mesh geometry={nodes.Cylinder019_1.geometry} material={nodes.Cylinder019_1.material} />
                    <mesh geometry={nodes.Cylinder019_2.geometry} material={nodes.Cylinder019_2.material} />
                    <mesh geometry={nodes.Cylinder019_3.geometry} material={nodes.Cylinder019_3.material} />
                </group>
                <group position={[0.25, -0.71, -0.01]} scale={1.03}>
                    <mesh geometry={nodes.Cylinder020.geometry} material={nodes.Cylinder020.material} />
                    <mesh geometry={nodes.Cylinder020_1.geometry} material={nodes.Cylinder020_1.material} />
                    <mesh geometry={nodes.Cylinder020_2.geometry} material={nodes.Cylinder020_2.material} />
                    <mesh geometry={nodes.Cylinder020_3.geometry} material={nodes.Cylinder020_3.material} />
                </group>
                <group position={[0.36, -1.04, -0.01]} scale={1.03}>
                    <mesh geometry={nodes.Cylinder021.geometry} material={nodes.Cylinder021.material} />
                    <mesh geometry={nodes.Cylinder021_1.geometry} material={nodes.Cylinder021_1.material} />
                    <mesh geometry={nodes.Cylinder021_2.geometry} material={nodes.Cylinder021_2.material} />
                    <mesh geometry={nodes.Cylinder021_3.geometry} material={nodes.Cylinder021_3.material} />
                </group>
            </group>
            <group position={[-0.87, 2.71, -0.03]} scale={[0.07, 0.97, 1.7]}>
                <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.003']} />
                <mesh geometry={nodes.Cube001_2.geometry} material={materials['Material.004']} />
            </group>
            <mesh
                geometry={nodes.flore_cabinate_1.geometry}
                material={materials['Material.005']}
                position={[-0.29, 0.73, -0.03]}
                scale={[0.61, 0.75, 0.59]}
            />
            <mesh
                geometry={nodes.flore_cabinate_2.geometry}
                material={materials.Material}
                position={[-0.23, 0.74, 1.14]}
                scale={[0.57, 0.75, 0.6]}
            />
            <mesh
                geometry={nodes.chimni.geometry}
                material={materials['Material.007']}
                position={[-0.7, 3.09, 2.91]}
                scale={[0.11, 0.6, 0.24]}
            />
            <mesh
                geometry={nodes.wall_cabinate.geometry}
                material={nodes.wall_cabinate.material}
                position={[-0.69, 3.1, -2.32]}
                scale={[0.29, 0.63, 0.4]}
            />
            <mesh
                geometry={nodes.wall_cabinate002.geometry}
                material={nodes.wall_cabinate002.material}
                position={[-0.69, 3.1, -4.4]}
                scale={[0.29, 0.63, 0.55]}
            />
            <mesh
                geometry={nodes.wall_cabinate001.geometry}
                material={nodes.wall_cabinate001.material}
                position={[-0.69, 3.1, -3.28]}
                scale={[0.29, 0.63, 0.55]}
            />
            <mesh
                geometry={nodes.wall_cabinate003.geometry}
                material={nodes.wall_cabinate003.material}
                position={[0.03, 3.1, -4.63]}
                rotation={[0, -1.57, 0]}
                scale={[0.29, 0.63, 0.45]}
            />
            <mesh
                geometry={nodes['wall-cabinate004'].geometry}
                material={nodes['wall-cabinate004'].material}
                position={[0.94, 3.1, -4.63]}
                rotation={[0, -1.57, 0]}
                scale={[0.29, 0.63, 0.45]}
            />
            <mesh
                geometry={nodes.wall_cabinate005.geometry}
                material={nodes.wall_cabinate005.material}
                position={[1.84, 3.1, -4.63]}
                rotation={[0, -1.57, 0]}
                scale={[0.29, 0.63, 0.45]}
            />
            <mesh
                geometry={nodes.wall_cabinate006.geometry}
                material={nodes.wall_cabinate006.material}
                position={[2.72, 2.64, -4.43]}
                rotation={[0, -1.57, 0]}
                scale={[0.47, 1.1, 0.41]}
            />
            <mesh
                geometry={nodes.wall_cabinate007.geometry}
                material={nodes.wall_cabinate007.material}
                position={[3.55, 2.64, -4.43]}
                rotation={[0, -1.57, 0]}
                scale={[0.47, 1.1, 0.41]}
            />
            <mesh
                geometry={nodes['wall-cabinate008'].geometry}
                material={nodes['wall-cabinate008'].material}
                position={[4.42, 1.87, -4.42]}
                rotation={[0, -1.57, 0]}
                scale={[0.46, 1.87, 0.45]}
            />
            <mesh
                geometry={nodes.cabinate_top.geometry}
                // material={nodes.cabinate_top.material}
                material={new THREE.MeshStandardMaterial({ map: floorTexture })}
                position={[-0.32, 1.53, -0.03]}
                // position={[1, 1, 1]}
                scale={[0.65, 0.05, 5.03]}
            >
                {/* <boxGeometry args={[2, 2, 2]} /> */}
            </mesh>
            <mesh
                geometry={nodes.flore_cabinate_3.geometry}
                material={materials['Material.014']}
                position={[-0.25, 0.75, 2.34]}
                scale={[0.57, 0.75, 0.6]}
            />
            <mesh
                geometry={nodes.flore_cabinate_4.geometry}
                material={materials['Material.015']}
                position={[-0.25, 0.75, 3.54]}
                scale={[0.57, 0.75, 0.6]}
            />
            <mesh
                geometry={nodes.flore_cabinate_6.geometry}
                material={materials['Material.017']}
                position={[-0.26, 0.75, -1.2]}
                scale={[0.57, 0.75, 0.6]}
            />
            <mesh
                geometry={nodes.flore_cabinate_7.geometry}
                material={materials['Material.018']}
                position={[-0.25, 0.75, -2.39]}
                scale={[0.57, 0.75, 0.6]}
            />
            <mesh
                geometry={nodes.flore_cabinate_8.geometry}
                material={nodes.flore_cabinate_8.material}
                position={[-0.25, 0.75, -3.59]}
                scale={[0.57, 0.75, 0.6]}
            />
            <mesh
                geometry={nodes.flore_cabinate_9.geometry}
                material={materials['Material.020']}
                position={[-0.25, 0.75, 4.59]}
                scale={[0.57, 0.75, 0.45]}
            />
            <mesh
                geometry={nodes.celling001.geometry}
                material={nodes.celling001.material}
                position={[2.72, 4.3, 0.03]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-3.96, -0.09, -5.3]}
            />
            <mesh
                geometry={nodes.wall_2.geometry}
                material={nodes.wall_2.material}
                position={[-0.95, 0.02, -4.9]}
                scale={[1.16, 1.56, 1]}>
                <mesh geometry={nodes.Baseboard.geometry} material={nodes.Baseboard.material} />
            </mesh>
            <mesh
                geometry={nodes.wall_1.geometry}
                material={nodes.wall_1.material}
                position={[6.57, 0, 5.01]}
                scale={[1.11, 1.56, 1]}>
                <mesh geometry={nodes.Baseboard001.geometry} material={nodes.Baseboard001.material} />
            </mesh>
            <mesh
                geometry={nodes.wall.geometry}
                material={nodes.wall.material}
                position={[-1.13, 0, 5.22]}
                scale={[1, 1.56, 0.9]}>
                <mesh geometry={nodes.Baseboard002.geometry} material={nodes.Baseboard002.material} />
            </mesh>
            <mesh
                geometry={nodes.flore_cabinate_10.geometry}
                material={nodes.flore_cabinate_10.material}
                position={[0.83, 0.74, -4.41]}
                rotation={[0, -1.57, 0]}
                scale={[0.47, 0.75, 0.47]}
            />
            <mesh
                geometry={nodes.flore_abinate_11.geometry}
                material={nodes.flore_abinate_11.material}
                position={[1.81, 0.74, -4.42]}
                rotation={[0, -1.57, 0]}
                scale={[0.49, 0.75, 0.51]}
            />
            <mesh
                geometry={nodes.flore_cabinate_12.geometry}
                material={nodes.flore_cabinate_12.material}
                position={[2.74, 0.74, -4.39]}
                rotation={[0, -1.57, 0]}
                scale={[0.46, 0.75, 0.41]}
            />
            <mesh
                geometry={nodes.flore_cabinate_13.geometry}
                material={nodes.flore_cabinate_13.material}
                position={[3.55, 0.74, -4.38]}
                rotation={[0, -1.57, 0]}
                scale={[0.45, 0.75, 0.41]}
            />
            <mesh
                geometry={nodes.cabinate_top_1.geometry}
                material={new THREE.MeshStandardMaterial({ map: floorTexture })}
                position={[2.43, 1.53, 4.57]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.45, 0.05, 2.11]}
            />
            <mesh
                geometry={nodes.flore_cabinate_10001.geometry}
                material={nodes.flore_cabinate_10001.material}
                position={[0.94, 0.74, 4.56]}
                rotation={[0, 1.56, 0]}
                scale={[0.47, 0.75, 0.6]}
            />
            <mesh
                geometry={nodes.flore_cabinate_10002.geometry}
                material={nodes.flore_cabinate_10002.material}
                position={[2.15, 0.74, 4.56]}
                rotation={[0, 1.56, 0]}
                scale={[0.47, 0.75, 0.6]}
            />
            <mesh
                geometry={nodes.flore_cabinate_10003.geometry}
                material={nodes.flore_cabinate_10003.material}
                position={[3.36, 0.74, 4.56]}
                rotation={[0, 1.56, 0]}
                scale={[0.47, 0.75, 0.6]}
            />
            <mesh
                geometry={nodes.cabinate_top_plane.geometry}
                material={materials['Material.011']}
                position={[-0.3, 1.53, -0.03]}
                scale={[0.65, 0.05, 5.03]}
            />
            <mesh
                geometry={nodes.cabinate_top_1_plane.geometry}
                material={materials['Material.013']}
                position={[2.43, 1.53, 4.56]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[0.45, 0.05, 2.11]}
            />
            <mesh
                geometry={nodes.cabinate_top_3.geometry}
                // material={nodes.cabinate_top_3.material}
                material={new THREE.MeshStandardMaterial({ map: floorTexture })}
                position={[2.14, 1.53, -4.46]}
                scale={[1.81, 0.05, 0.48]}
            />
            <mesh
                geometry={nodes.cabinate_top_plane_3.geometry}
                material={materials['Material.022']}
                position={[2.14, 1.53, -5.73]}
                scale={[1.81, 0.05, 0.48]}
            />
            <mesh
                geometry={nodes.cabinate_top_plane_3001.geometry}
                material={materials['Material.023']}
                position={[2.05, 1.56, -4.43]}
                scale={[1.81, 0.03, 0.48]}
            />
            <mesh
                geometry={nodes.flore.geometry}
                material={nodes.flore.material}
                position={[2.64, -0.05, 0.08]}
                scale={[3.76, 0.06, 5.19]}
            />
            <mesh
                geometry={nodes.Cube001.geometry}
                // material={nodes.Cube001.material}
                material={new THREE.MeshStandardMaterial({ map: floorTexture })}
                position={[3.36, 2.8, 11.2]}
                scale={[2.61, 2.41, 0.17]}
            >
                <boxGeometry args={[2, 2, 2]} />
            </mesh>
            <mesh
                geometry={nodes.wall_plane.geometry}
                material={nodes.wall_plane.material}
                position={[0.69, 2.03, -4.89]}
                rotation={[0, 0, -Math.PI]}
                scale={[-1.62, -0.44, -0.01]}
            />
            <mesh
                geometry={nodes.wall_plane002.geometry}
                material={nodes.wall_plane002.material}
                position={[0.7, 2.04, 5]}
                scale={[1.62, 0.44, 0.01]}
            />
            <mesh
                geometry={nodes.wall_plane001.geometry}
                material={nodes.wall_plane001.material}
                position={[-0.93, 2.04, 0.05]}
                rotation={[0, Math.PI / 2, 0]}
                scale={[4.95, 0.44, 0.01]}
            />
            <mesh geometry={nodes.Wine.geometry} material={nodes.Wine.material} position={[5.02, 3.03, -4.12]} scale={1.75}>
                <group position={[0, 0.29, 0]}>
                    <mesh geometry={nodes.Cylinder009.geometry} material={materials['silver wrap']} />
                    <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['redish wrap']} />
                    <mesh geometry={nodes.Cylinder009_2.geometry} material={materials['dots silver']} />
                </group>
                {/* <mesh geometry={nodes.Cylinder006_1.geometry} material={materials['label handice']} position={[0, 0.29, 0]} /> */}
                <mesh geometry={nodes.Cylinder060.geometry} material={materials['wine white']} />
            </mesh>
            <mesh
                geometry={nodes.Wine007.geometry}
                material={nodes.Wine007.material}
                position={[5.02, 1.28, -4.12]}
                scale={1.75}
            />
            <mesh
                geometry={nodes.Wine008.geometry}
                material={nodes.Wine008.material}
                position={[5.19, 0.7, -4.12]}
                scale={1.75}
            />
            <mesh
                geometry={nodes.Wine010.geometry}
                material={nodes.Wine010.material}
                position={[5.63, 1.87, -4.12]}
                scale={1.75}
            />
            <group position={[5.18, 3.03, -4.11]} scale={1.84}>
                <mesh geometry={nodes.Cylinder065.geometry} material={nodes.Cylinder065.material} />
                <mesh geometry={nodes.Cylinder065_1.geometry} material={nodes.Cylinder065_1.material} />
                <group position={[0, 0.29, 0]}>
                    <mesh geometry={nodes.Cylinder066.geometry} material={nodes.Cylinder066.material} />
                    <mesh geometry={nodes.Cylinder066_1.geometry} material={materials['redish wrap.001']} />
                </group>
                <mesh geometry={nodes.Cylinder075.geometry} material={materials['wine red']} />
            </group>
            <group position={[5.02, 0.7, -4.11]} scale={1.74}>
                <mesh geometry={nodes.Cylinder003.geometry} material={nodes.Cylinder003.material} />
                <mesh geometry={nodes.Cylinder003_1.geometry} material={nodes.Cylinder003_1.material} />
            </group>
            <group position={[5.43, 1.29, -4.11]} scale={1.78}>
                <mesh geometry={nodes.Cylinder004.geometry} material={nodes.Cylinder004.material} />
                <mesh geometry={nodes.Cylinder004_1.geometry} material={nodes.Cylinder004_1.material} />
            </group>
            <group position={[5.43, 2.44, -4.11]} scale={1.75}>
                <mesh geometry={nodes.Cylinder005.geometry} material={nodes.Cylinder005.material} />
                <mesh geometry={nodes.Cylinder005_1.geometry} material={nodes.Cylinder005_1.material} />
            </group>
            <group position={[5.43, 0.17, -4.11]} scale={1.66}>
                <mesh geometry={nodes.Cylinder007.geometry} material={nodes.Cylinder007.material} />
                <mesh geometry={nodes.Cylinder007_1.geometry} material={nodes.Cylinder007_1.material} />
            </group>
            <group position={[5.18, 1.86, -4.11]} scale={1.81}>
                <mesh geometry={nodes.Cylinder001.geometry} material={nodes.Cylinder001.material} />
                <mesh geometry={nodes.Cylinder001_1.geometry} material={nodes.Cylinder001_1.material} />
            </group>
            <mesh
                geometry={nodes.Plastic_inside.geometry}
                material={materials['Material.024']}
                position={[0, 0.33, 0]}
                rotation={[Math.PI, -1.08, Math.PI]}
            />
            <mesh
                geometry={nodes.Liquid.geometry}
                material={materials.Liquid}
                position={[0, 0, 0]}
                rotation={[Math.PI, -1.08, Math.PI]}
            />
            <group position={[-0.01, 0.11, 0.02]} rotation={[Math.PI, -1.08, Math.PI]}>
                <mesh geometry={nodes.Circle003.geometry} material={materials.Label_Front} />
                <mesh geometry={nodes.Circle003_1.geometry} material={materials.Label_Back} />
            </group>
            <mesh
                geometry={nodes.Cap_Upper.geometry}
                material={nodes.Cap_Upper.material}
                position={[0, 0.33, 0]}
                rotation={[Math.PI, -1.08, Math.PI]}
            />
            <group position={[0, 0.3, 0]} rotation={[Math.PI, -1.08, Math.PI]}>
                <mesh geometry={nodes.Circle004.geometry} material={nodes.Circle004.material} />
                <mesh geometry={nodes.Circle004_1.geometry} material={materials.Cap_silver} />
            </group>
            <mesh
                geometry={nodes.Wine009.geometry}
                material={nodes.Wine009.material}
                position={[5.63, 3.03, -4.12]}
                scale={1.75}
            />
            <mesh
                geometry={nodes.Wine011.geometry}
                material={nodes.Wine011.material}
                position={[5.44, 3.04, -4.12]}
                scale={1.64}>
                {/* <mesh geometry={nodes.Cylinder011_1.geometry} material={nodes.Cylinder011_1.material} position={[0, 0.3, 0]} /> */}
                {/* <mesh geometry={nodes.Cylinder012_1.geometry} material={nodes.Cylinder012_1.material} position={[0, 0.3, 0]} /> */}
                <mesh geometry={nodes.Cylinder086.geometry} material={materials['wine red.001']} />
            </mesh>
            <mesh
                geometry={nodes.Wine012.geometry}
                material={nodes.Wine012.material}
                position={[5.44, 1.87, -4.12]}
                scale={1.64}
            />
            <mesh
                geometry={nodes.Wine013.geometry}
                material={nodes.Wine013.material}
                position={[5.18, 2.46, -4.12]}
                scale={1.64}
            />
            <mesh
                geometry={nodes.Wine014.geometry}
                material={nodes.Wine014.material}
                position={[5.6, 0.7, -4.12]}
                scale={1.64}
            />
            <mesh
                geometry={nodes.Wine015.geometry}
                material={nodes.Wine015.material}
                position={[5.04, 0.16, -4.12]}
                scale={1.54}
            />
        </group>
    )
}
useGLTF.preload('/blender_model/cubeKitchen.glb')
export default CubeKitchenModel