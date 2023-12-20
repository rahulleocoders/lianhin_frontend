'use client'
import { useGLTF, useTexture } from "@react-three/drei"
import { useLoader } from "@react-three/fiber";
import { useRef } from "react"
import { useSelector } from "react-redux";
import * as THREE from 'three';

const BathroomModel = (props) => {
    const group = useRef()
    const mirrorMesh = useRef();
    const BathroomParameter = useSelector((state) => state.BathroomParameter?.present);
    const { nodes, materials } = useGLTF('./blender_model/bathroom.glb')

    const FloorSize = new THREE.Vector3();
    nodes.Floor.geometry.computeBoundingBox();
    nodes.Floor.geometry.boundingBox.getSize(FloorSize);

    // const floorTexture = useTexture('./images/surface_Glacier.jpg');
    // const floorTexture = useTexture(BathroomParameter.floor?.texture);
    // floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    // floorTexture.repeat.set(4, 10);


    const loader = new THREE.TextureLoader();
    // loader.crossOrigin = '';
    // loader.setCrossOrigin('*');
    loader.setRequestHeader('Access-Control-Allow-Origin', '*');
    loader.setCrossOrigin("anonymous");
    const floorTexture = loader.load(BathroomParameter.floor?.texture, (texture) => {
        // texture.setCrossOrigin('*');
        // texture.setRequestHeader('Access-Control-Allow-Origin', '*');
        // texture.needsUpdate = true;
        // texture.crossOrigin = '';
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 10);
    });

    // THREE.TextureLoader.prototype.crossOrigin = "anonymous";
    // function Scene() {
    //     const textureRaw = useLoader(
    //         THREE.TextureLoader,
    //         "https://dahli-demo-api.s3.us-east-2.amazonaws.com/the_great_masturbator_1929_jpg_Large_2920d864f2.jpg"
    //     );
    // }

    // const floorTexture = useLoader(THREE.TextureLoader, BathroomParameter.floor?.texture)




    // console.log(floorTexture.image.complete)
    const TileWallSize = new THREE.Vector3();
    nodes.tileWall.geometry.computeBoundingBox();
    nodes.tileWall.geometry.boundingBox.getSize(TileWallSize);

    const WallTexture = useTexture(BathroomParameter?.wall.texture);
    WallTexture.wrapS = WallTexture.wrapT = THREE.RepeatWrapping;
    WallTexture.repeat.set(4, 3); // Adjust repeat values as needed

    // Define a spring animation for the material's map property
    const cabinateTopSize = new THREE.Vector3();
    nodes.mainCabinateTop.geometry.computeBoundingBox();
    nodes.mainCabinateTop.geometry.boundingBox.getSize(cabinateTopSize);

    const CabinateTopTexture = useTexture(BathroomParameter?.cabibate.texture);
    CabinateTopTexture.wrapS = CabinateTopTexture.wrapT = THREE.RepeatWrapping;
    CabinateTopTexture.repeat.set(1, 1);

    // const CabinateBodyTexture = useTexture(BathroomParameter?.cabibate.BodyTexture);
    const CabinateBodyTexture = useTexture('https://media.istockphoto.com/id/1415424219/photo/white-marble-with-blue-and-golden-orange-patterns.jpg?s=612x612&w=0&k=20&c=2_J_djQp7SDuSnVBsNy9CxhFDeAYNsmuqxFV1PE3V0I=');
    CabinateBodyTexture.wrapS = CabinateBodyTexture.wrapT = THREE.RepeatWrapping;
    CabinateBodyTexture.repeat.set(1, 1);

    const DoorSize = new THREE.Vector3();
    nodes.DoorFrame.geometry.computeBoundingBox();
    nodes.DoorFrame.geometry.boundingBox.getSize(DoorSize);

    const DoorTexture = useTexture(BathroomParameter.door.texture);
    DoorTexture.wrapS = DoorTexture.wrapT = THREE.RepeatWrapping;
    DoorTexture.repeat.set(1, 1);

    return (
        <group ref={group} {...props} dispose={null}
        // onPointerOver={(e) => (e.stopPropagation(), console.log(e.object))}
        >
            <group position={[0.03, 0.09, -2.3]} scale={1.23}>
                <mesh
                    geometry={nodes.CTRL_Baseboard.geometry}
                    material={nodes.CTRL_Baseboard.material}
                    position={[0, -0.1, 0.18]}
                />
                <mesh geometry={nodes.CTRL_Hole.geometry} material={nodes.CTRL_Hole.material} position={[0, 0, 0.12]} />
                <mesh geometry={nodes.DoorFrame.geometry} material={nodes.DoorFrame.material} >

                    <mesh geometry={nodes.Door.geometry} material={nodes.Door.material}
                        position={[0.025, 1.05, 0.07]}
                    >
                        <boxGeometry args={[DoorSize.x, DoorSize.y, DoorSize.z + 0.05]} />
                        <meshStandardMaterial map={DoorTexture} />
                        <mesh
                            geometry={nodes.Handle_Back.geometry}
                            material={nodes.Handle_Back.material}
                            position={[-0.30, 0, 0.06]}
                        // position={[-0.78, 0, -0.01]}
                        />
                        <mesh
                            geometry={nodes.Handle_Front.geometry}
                            material={nodes.Handle_Front.material}
                            position={[-0.78, 0, -0.02]}
                            rotation={[-Math.PI, 0, 0]}
                        />
                    </mesh>
                </mesh>
            </group>
            <mesh
                geometry={nodes.washBasing.geometry}
                material={nodes.washBasing.material}
                position={[1.19, 1.2, 0.51]}
                rotation={[-Math.PI, 0, -Math.PI]}
                material-color='white'
            >
            </mesh>
            <mesh
                geometry={nodes.washBasing2.geometry}
                material={nodes.washBasing2.material}
                position={[0.12, 1.2, 0.5]}
                rotation={[-Math.PI, 0, -Math.PI]}
            />
            <mesh
                geometry={nodes.tileWall.geometry}
                // material={new THREE.MeshStandardMaterial({
                //     map: WallTexture,
                //     // mapRotation: Math.PI / 2, // Rotate the texture by 90 degrees (in radians)
                // })}
                // material={materials['Material.007']}
                position={[-2.94, 1.54, -0.57]}
                rotation={[1.57, 0, 1.57]}
                scale={[1.7, 1, 1.43]}
                // rotation={[0, 0, 1.57]}
                // scale={[1.47, 1.47, 1.74]}
                castShadow
                receiveShadow
            >
                <boxGeometry args={[TileWallSize.x, TileWallSize.y, TileWallSize.z]} />
                <meshStandardMaterial map={WallTexture} />
            </mesh>
            <mesh
                geometry={nodes.floorLight.geometry}
                material={nodes.floorLight.material}
                position={[-2.87, 0.12, -0.58]}
                scale={[0.03, 1, 1.99]}
            />
            <mesh
                geometry={nodes.Plane005.geometry}
                material={nodes.Plane005.material}
                position={[-2.88, 2.95, -0.49]}
                scale={[0.03, 1, 1.99]}
            />
            <mesh
                geometry={nodes.footmat.geometry}
                material={materials['Material.010']}
                position={[0.05, 0.1, -1.52]}
                scale={[0.58, 1, 0.32]}
            />

            <mesh
                ref={mirrorMesh}
                geometry={nodes.mirror.geometry}
                material={materials['Material.003']}
                position={[0.55, 1.88, 1]}
                rotation={[-1.57, 0, 0]}
                scale={[1, 1, 0.7]}
            >
                {/* <GlassMaterial /> */}
            </mesh>

            <mesh
                geometry={nodes.Plane003.geometry}
                material={materials['Material.006']}
                position={[-1.33, 2.94, 0.81]}
                scale={[0.93, 0.93, 0.1]}
            />
            <mesh
                geometry={nodes.Plane002.geometry}
                material={nodes.Plane002.material}
                position={[3.13, 1.39, 0.41]}
                rotation={[0, 1.57, -1.57]}
                scale={[1.28, 1, 1.61]}
            />
            <mesh
                geometry={nodes.Plane001.geometry}
                material={nodes.Plane001.material}
                position={[1.57, 1.39, 1.08]}
                rotation={[0, 0, -1.57]}
                scale={[1.28, 1, 0.67]}
            />
            <mesh
                geometry={nodes.mainCabinate.geometry}
                material={nodes.mainCabinate.material}
                rotation={[Math.PI, 0, Math.PI]}
                scale={[3.18, 0.99, 0.99]}
                position={[1.32, 0.27, 1.11]}
            >
                <mesh
                    geometry={nodes.mainCabinateBottom.geometry}
                    material={nodes.mainCabinateBottom.material}
                    position={[0, -0.16, 0.53]}
                />
                <mesh
                    geometry={nodes.mainCabinateDoor.geometry}
                    material={nodes.mainCabinateDoor.material}
                    position={[0.3, 0.33, 0.605]}
                >
                    <boxGeometry args={[0.6, 0.67, 0.01]} />
                    <meshStandardMaterial map={CabinateBodyTexture} />
                    <mesh
                        geometry={nodes.Handle001.geometry}
                        material={nodes.Handle001.material}
                        position={[-0.25, 0.1, 0.01]}
                        rotation={[0, 0, -Math.PI / 2]}
                    />
                </mesh>
                <mesh
                    geometry={nodes.mainCabinateTop.geometry}
                    material={nodes.mainCabinateTop.material}
                    position={[0.3, 0.7, 0.3]}
                >
                    <boxGeometry args={[cabinateTopSize.x + 0.0001, cabinateTopSize.y, cabinateTopSize.z]} />
                    <meshStandardMaterial map={CabinateTopTexture} />
                </mesh>
            </mesh>

            <mesh geometry={nodes.Cabinet1.geometry} material={nodes.Cabinet1.material}
                position={[-1.69, 0.25, -2.28]}
            >
                <mesh geometry={nodes.Baseboard1.geometry} material={nodes.Baseboard1.material}
                    position={[0, -0.16, 0.53]}
                />
                <mesh geometry={nodes.Cabinet1_Door.geometry} material={nodes.Cabinet1_Door.material}
                    position={[0.6, 0, 0.59]}
                >
                    <mesh
                        geometry={nodes.Handle.geometry}
                        material={nodes.Handle.material}
                        position={[-0.54, 0.58, 0.02]}
                        rotation={[0, 0, -Math.PI / 2]}
                    />
                </mesh>
                <mesh geometry={nodes.Countertop1.geometry} material={nodes.Countertop1.material}
                    position={[0, 0.7, 0]}
                />
            </mesh>
            {/* <mesh
                geometry={nodes.divider.geometry}
                material={materials['Material.004']}
                position={[-1.01, 1.39, -1.61]}
                rotation={[0, 0, -1.57]}
                scale={[1.28, 1, 0.67]}
            >
                <GlassMaterial />
            </mesh> */}
            <mesh
                geometry={nodes.RoomWall.geometry}
                material={materials['Ceiling_material.002']}
                position={[-2.99, 0.09, -2.29]}
                scale={[1, 1, 0.71]}
                material-color='#E7412B'
            // material-color='#52031d' E7412B
            >
                {/* <mesh
                    geometry={nodes.tileWall.geometry}
                    position={[1, 1, 1]}
                    rotation={[1.57, 0, 3]}
                    scale={[1.7, 1, 1.43]}
                    castShadow
                    receiveShadow
                >
                    <boxGeometry args={[TileWallSize.x, TileWallSize.y, TileWallSize.z]} />
                    <meshStandardMaterial map={WallTexture} />
                </mesh> */}

                <mesh geometry={nodes.Baseboard.geometry} material={nodes.Baseboard.material} />
                <mesh geometry={nodes.Ceiling.geometry} material={nodes.Ceiling.material}
                    material-color='white'
                />
                <mesh geometry={nodes.Floor.geometry}
                    material={materials['Material.009']}
                    position={[4.99, 0, 2.420]}
                    // position={[4.99, 0, 2.570]}
                    rotation={[0, 1.57, 0]}
                >
                    <boxGeometry args={[FloorSize.z, FloorSize.y + 0.1, FloorSize.x]}
                    // <boxGeometry args={[FloorSize.x, FloorSize.y + 0.1, FloorSize.z]}
                    />
                    <meshStandardMaterial
                        map={floorTexture}
                        side={THREE.DoubleSide}
                        roughness={0.5}
                        metalness={0.2}
                    />
                </mesh>
            </mesh>
            <mesh
                geometry={nodes.Bolt_Caps.geometry}
                material={nodes.Bolt_Caps.material}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Bowl.geometry}
                material={nodes.Bowl.material}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Drainage_Tube.geometry}
                material={nodes.Drainage_Tube.material}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Flush_Button.geometry}
                material={nodes.Flush_Button.material}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Hinges.geometry}
                material={nodes.Hinges.material}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Lid.geometry}
                material={materials['Material.001']}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Seat.geometry}
                material={nodes.Seat.material}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Tank.geometry}
                material={nodes.Tank.material}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Tank_cover.geometry}
                material={nodes.Tank_cover.material}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Valve.geometry}
                material={nodes.Valve.material}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Water.geometry}
                material={nodes.Water.material}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
            <mesh
                geometry={nodes.Water_Tube.geometry}
                material={nodes.Water_Tube.material}
                position={[-1.42, 0.77, 0.61]}
                rotation={[Math.PI / 2, 0, 3.13]}
                scale={0.01}
            />
        </group>
    )
}

useGLTF.preload('./blender_model/bathroom.glb')

export default BathroomModel