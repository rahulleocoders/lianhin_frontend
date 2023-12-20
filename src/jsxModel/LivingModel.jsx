'use client'
import { useGLTF } from "@react-three/drei"
import { useRef } from "react"
import { useSelector } from "react-redux"
import * as THREE from 'three';
// import { useLoader } from "@react-three/fiber";
// import { useSelector } from "react-redux";

const LivingModel = (props) => {
    const loader = new THREE.TextureLoader();
    const group = useRef()
    const { nodes, materials } = useGLTF('./blender_model/living.glb')
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


    tvTopRight.flipY = false;
    // tvTopRight.repeat.x = -1; tvTopRight.center.set(0.5, 0.5);
    tvTopRight.rotation = Math.PI;

    return (
        <group ref={group} {...props} dispose={null}>
            <group position={[-12.36, 0, 0]} scale={0.81}>
                <mesh
                    geometry={nodes.Cylinder001.geometry}
                    material={materials['Old Wood']}
                    position={[0, 0.05, 0]}
                    scale={0.05}
                />
                <mesh
                    geometry={nodes.Plane001.geometry}
                    material={materials['Sofa_Fabric Optimus Sand']}
                    position={[-17.52, 0.21, 22.75]}
                    rotation={[-Math.PI, 0, -Math.PI]}
                    scale={[10.41, 10.93, 6.6]}
                />
            </group>
            <group position={[-34.19, 0.5, 4.42]} scale={[1, 1.92, 1.47]}>
                <mesh
                    geometry={nodes.Plane002.geometry}
                    material={nodes.Plane002.material}
                    position={[-0.11, 0.06, -4.37]}
                    scale={4.58}
                />
                <mesh
                    geometry={nodes.Plane003.geometry}
                    material={nodes.Plane003.material}
                    position={[-0.11, 0.06, 0.04]}
                    scale={4.58}
                />
            </group>
            <group position={[-12.36, 0, 17.3]}>
                <group position={[-5.02, 3.69, -9.85]} scale={[1.21, 1.78, 1.21]}>
                    <mesh geometry={nodes.trunk022.geometry} material={materials['trunk.020']} />
                    <mesh geometry={nodes.trunk022_1.geometry} material={materials['Leaves.005']} />
                </group>
            </group>
            <mesh
                geometry={nodes.wall.geometry}
                material={materials.Material}
                position={[-15.74, 12.98, -0.06]}
                rotation={[0, 0, -Math.PI]}
                scale={[-19.04, -12.59, -0.33]}
                material-color='blue'
            />
            <mesh
                geometry={nodes.flore.geometry}
                material={materials['Marble Tile 4']}
                position={[-15.75, 0.17, 12.7]}
                rotation={[-Math.PI, 0, -Math.PI]}
                scale={[-20.06, -0.23, -13.15]}
            // material-color='yellow'
            >
                <meshStandardMaterial
                    map={floorTexture}
                    side={THREE.DoubleSide}
                    roughness={0.5}
                    metalness={0.2}
                />
            </mesh>
            <mesh
                geometry={nodes.wall001.geometry}
                material={materials['Material.004']}
                position={[3.61, 12.97, 12.93]}
                rotation={[-Math.PI, 0, 0]}
                scale={[-0.28, -12.58, -13.33]}
                // material-color='red'
            />
            <mesh
                geometry={nodes.wall002.geometry}
                material={materials['Material.005']}
                position={[-35.06, 12.97, 12.99]}
                rotation={[-Math.PI, 0, -0.01]}
                scale={[-0.28, -12.58, -13.35]}
            />
            <mesh
                geometry={nodes.celling.geometry} // material={nodes.celling.material}
                material={new THREE.MeshBasicMaterial({ color: 'white', side: THREE.DoubleSide })}
                position={[-15.71, 25.91, 11.98]}
                scale={[19.75, 0.37, 12.41]}
            />
            <mesh
                geometry={nodes.wall_wood.geometry}
                material={nodes.wall_wood.material}
                position={[-31.52, 12.93, 0.24]}
                scale={[3.32, 12.6, 0.24]}
            />


            <mesh
                geometry={nodes.wallplate1.geometry}
                material={nodes.wallplate1.material}
                position={[-22, 12.92, 0.33]} // scale={[6.24, 12.64, 0.11]}
            >
                <boxGeometry args={[12.5, 25.15, 0.15]} />
                <meshStandardMaterial
                    map={tvTopLeft} side={THREE.DoubleSide}
                    roughness={0.5} metalness={0.2}
                />
            </mesh>


            <mesh
                geometry={nodes.wallplate2.geometry}
                material={nodes.wallplate2.material}
                position={[-9.46, 12.92, 0.33]}

            >
                <boxGeometry args={[12.5, 25.15, 0.15]} />
                <meshStandardMaterial
                    map={tvTopRight} side={THREE.DoubleSide}
                    roughness={0.5} metalness={0.2}
                />
            </mesh>


            {/* <mesh
                geometry={nodes.wallplate1.geometry}
                material={nodes.wallplate1.material}
                position={[-22, 12.92, 0.33]}
                scale={[6.24, 12.64, 0.11]}
            /> */}
            {/* <mesh
                geometry={nodes.wallplate2.geometry}
                material={nodes.wallplate2.material}
                position={[-9.46, 12.92, 0.33]}
                scale={[6.24, 12.64, 0.11]}
            /> */}

            <group position={[-15.69, 11.06, 0.67]} rotation={[Math.PI / 2, 0, 0]} scale={[3.89, 2.73, 3.81]}>
                <mesh geometry={nodes.Plane.geometry} material={materials['Material.009']} />
                <mesh geometry={nodes.Plane_1.geometry} material={materials['Material.010']} />
            </group>
            <group position={[-15.74, 2.58, 1.85]} scale={[12.53, 1.32, 1.45]}>
                <mesh geometry={nodes.Cube018.geometry} material={materials['Material.011']} />
                <mesh geometry={nodes.Cube018_1.geometry} material={materials['Material.012']} />
            </group>
            <mesh
                geometry={nodes.table.geometry}
                material={materials['Black Marble']}
                position={[-15.43, 1.74, 8.67]}
                scale={[2.93, 1.38, 3.28]}
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
                position={[0.01, 12.93, 0.24]}
                scale={[3.32, 12.6, 0.24]}
            />
            <group position={[-14.61, 3.12, 8.3]} scale={9.2}>
                <mesh geometry={nodes.Plane008.geometry} material={nodes.Plane008.material} />
                <mesh geometry={nodes.Plane008_1.geometry} material={nodes.Plane008_1.material} />
                <mesh geometry={nodes.Plane008_2.geometry} material={nodes.Plane008_2.material} />
                <group position={[0.03, 0.02, 0]} rotation={[0, 0.03, 0]}>
                    <mesh geometry={nodes.Plane006.geometry} material={nodes.Plane006.material} />
                    <mesh geometry={nodes.Plane006_1.geometry} material={nodes.Plane006_1.material} />
                    <mesh geometry={nodes.Plane006_2.geometry} material={nodes.Plane006_2.material} />
                </group>
                <group position={[0.03, 0.01, 0]} rotation={[0, -0.17, 0]}>
                    <mesh geometry={nodes.Plane007.geometry} material={nodes.Plane007.material} />
                    <mesh geometry={nodes.Plane007_1.geometry} material={nodes.Plane007_1.material} />
                    <mesh geometry={nodes.Plane007_2.geometry} material={nodes.Plane007_2.material} />
                </group>
            </group>
            <mesh
                geometry={nodes.Cup_Glass.geometry}
                material={materials.Glass}
                position={[-17.42, 3.11, 7.54]}
                scale={9.77}
            />
        </group>
    )
}
useGLTF.preload('./blender_model/living.glb')

export default LivingModel
