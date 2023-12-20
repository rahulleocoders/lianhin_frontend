'use client'
import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useSelector } from "react-redux"
import * as THREE from 'three';

const HallModel = (props) => {
    const loader = new THREE.TextureLoader();
    const group = useRef()
    const { nodes, materials } = useGLTF('./blender_model/Hall.glb')
    const LivingroomParameter = useSelector((state) => state.LivingroomParameter?.present);
    const floorTexture = loader.load(LivingroomParameter.floor?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(10, 10);
    });

    const tvTopLeft = loader.load(LivingroomParameter.TVConsole?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });
    const tvTopRight = loader.load(LivingroomParameter.TVConsole?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });

    const CoffeeTableTexture = loader.load(LivingroomParameter.CoffeTable?.texture, (texture) => {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(1, 1);
    });
    return (
        <group ref={group} {...props} dispose={null}>
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
            <mesh
                geometry={nodes.flore.geometry}
                material={materials['Procedural Tiles']}
                position={[-15.75, 3.55, 12.7]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-17.93, -0.23, -13.15]}
            />
            <mesh
                geometry={nodes.wall001.geometry}
                material={nodes.wall001.material}
                position={[1.85, 14.67, 12.93]}
                rotation={[-Math.PI, 0, 0]}
                scale={[-0.28, -10.98, -13.33]}
            />
            <mesh
                geometry={nodes.wall002.geometry}
                material={nodes.wall002.material}
                position={[-33.44, 14.67, 12.99]}
                rotation={[-Math.PI, 0, -0.01]}
                scale={[-0.28, -10.98, -13.35]}
            />
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
                position={[-22, 14.76, 0.33]}
                scale={[6.24, 10.9, 0.11]}
            />
            <mesh
                geometry={nodes.wallplate2.geometry}
                material={nodes.wallplate2.material}
                position={[-9.46, 14.76, 0.33]}
                scale={[6.24, 10.9, 0.11]}
            />
            <group position={[-15.69, 14.32, 0.67]} rotation={[Math.PI / 2, 0, 0]} scale={[3.89, 2.73, 3.81]}>
                <mesh geometry={nodes.Plane.geometry} material={materials['Material.009']} />
                <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.010']} />
            </group>
            <mesh
                geometry={nodes.cabinate.geometry}
                material={materials['Material.001']}
                position={[-15.74, 6.01, 1.09]}
                scale={[12.53, 1.32, 0.75]}
                // material-color='black'
            />
            <mesh
                geometry={nodes.table.geometry}
                material={materials['Black Marble']}
                position={[-15.82, 5.51, 7.89]}
                scale={[3.04, 1.02, 3.14]}
            />
            <mesh
                geometry={nodes.wall_wood001.geometry}
                material={nodes.wall_wood001.material}
                position={[-0.67, 14.65, 0.24]}
                scale={[2.52, 10.97, 0.24]}
            />
            <mesh
                geometry={nodes.Cube.geometry}
                material={materials['Leather.002']}
                // position={[-25.24, 5.59, 14.04]}
                position={[-25.24, 5.59, 15.54]}
                scale={[2.65, 1.19, 5.44]}
            />
            <group position={[-15, 6.62, 7.65]} scale={7.39}>
                <mesh geometry={nodes.Plane008.geometry} material={materials['Material.017']} />
                <mesh geometry={nodes.Plane008_1.geometry} material={materials['Material.018']} />
                <mesh geometry={nodes.Plane008_2.geometry} material={materials['Material.019']} />
            </group>
        </group>
    )
}

useGLTF.preload('./blender_model/Hall.glb')
export default HallModel