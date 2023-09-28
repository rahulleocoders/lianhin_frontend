import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'
import * as THREE from 'three';
import { Textureimages } from '@/local_data';

const KitchenModel = (props) => {
  const group = useRef()
  const { nodes, materials } = useGLTF('/blender_model/kitchen.glb')

   const floorTexture = useTexture(Textureimages[0]);
  // floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
  // floorTexture.repeat.set(5, 1.5);



  return (
    <group ref={group} {...props} dispose={null} scale={1.2}>
      <group scale={0.25}>
        <mesh
          geometry={nodes.Torus.geometry}
          material={materials['Material.001']}
          position={[-0.01, -0.89, -0.95]}
          scale={[0.69, 0.17, 0.69]}
        />
      </group>
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
          geometry={nodes.Plane003.geometry}
          material={materials['Material.006']}
          position={[9.12, -14.12, -8.13]}
          rotation={[0, Math.PI / 2, 0]}
          scale={[7.44, 4.01, 7.92]}
          // material-color='red'
        />
      </group>
      <group position={[6.06, 1, -4.43]} scale={[1.09, 1, 3.03]}>
        <group position={[-0.15, 0.86, 0.01]} rotation={[Math.PI, 0, Math.PI]} scale={[1, 1.72, 0.84]}>
          <mesh geometry={nodes.Cube029.geometry} material={materials['Ash 001']} />
          <mesh geometry={nodes.Cube029_1.geometry} material={materials['Matal solid paint white']} />
        </group>
      </group>
      <group position={[-0.87, 2.71, -0.03]} scale={[0.07, 0.97, 1.7]}>
        <mesh geometry={nodes.Cube001.geometry} material={materials['Material.003']} />
        <mesh geometry={nodes.Cube001_1.geometry} material={materials['Material.004']} />
      </group>
      <mesh
        geometry={nodes.flore_cabinate_1.geometry}
        material={materials['Material.005']}
        position={[-0.3, 0.73, -0.03]}
        scale={[0.61, 0.75, 0.56]}
      />
      <mesh
        geometry={nodes.flore_cabinate_2.geometry}
        material={materials.Material}
        position={[-0.25, 0.75, 1.14]}
        scale={[0.57, 0.75, 0.6]}
      />
      <mesh
        geometry={nodes.chimni.geometry}
        material={materials['Material.007']}
        position={[-0.7, 2.98, 2.91]}
        scale={[0.11, 0.5, 0.19]}
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
        position={[0.14, 3.1, -4.63]}
        rotation={[0, -1.57, 0]}
        scale={[0.29, 0.63, 0.55]}
      />
      <mesh
        geometry={nodes.wall_cabinate004.geometry}
        material={nodes.wall_cabinate004.material}
        position={[1.25, 3.1, -4.63]}
        rotation={[0, -1.57, 0]}
        scale={[0.29, 0.63, 0.55]}
      />
      <mesh
        geometry={nodes.wall_cabinate005.geometry}
        material={nodes.wall_cabinate005.material}
        position={[2.26, 3.1, -4.63]}
        rotation={[0, -1.57, 0]}
        scale={[0.29, 0.63, 0.45]}
      />
      <mesh
        geometry={nodes.wall_cabinate006.geometry}
        material={nodes.wall_cabinate006.material}
        position={[3.17, 2.64, -4.43]}
        rotation={[0, -1.57, 0]}
        scale={[0.47, 1.1, 0.45]}
      />
      <mesh
        geometry={nodes.wall_cabinate007.geometry}
        material={nodes.wall_cabinate007.material}
        position={[4.09, 2.64, -4.43]}
        rotation={[0, -1.57, 0]}
        scale={[0.47, 1.1, 0.45]}
      />
      <mesh
        geometry={nodes.wall_cabinate008.geometry}
        material={nodes.wall_cabinate008.material}
        position={[5, 1.87, -4.42]}
        rotation={[0, -1.57, 0]}
        scale={[0.46, 1.87, 0.45]}
      />
      <mesh
        geometry={nodes.flore.geometry}
        // material={new THREE.MeshStandardMaterial({ map: floorTexture })}
        material={nodes.flore.material}
        position={[2.69, -0.05, 0.05]}
        scale={[3.83, 0.05, 5.15]}
      >
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial map={floorTexture} />
      </mesh>
      <mesh
        geometry={nodes.Room_plane.geometry}
        material={nodes.Room_plane.material}
        position={[-0.96, 2.46, -4.88]}
        rotation={[Math.PI, 0, 0]}
        scale={[1.92, 0.37, 1]}

      />
      <mesh
        geometry={nodes.Room_plane_1.geometry}
        material={materials['Wall_material.001']}
        position={[-0.93, 2.46, 5.05]}
        rotation={[-Math.PI, -Math.PI / 2, 0]}
        scale={[3.25, 0.37, 1]}
        material-color='red'
      />
      <mesh
        geometry={nodes.Room_plane_2.geometry}
        material={materials['Wall_material.002']}
        position={[1.8, 2, 5]}
        scale={[2.1, 0.37, 1]}
      >
        <boxGeometry args={[2.6, 2.4, 0.04]} />
        <meshStandardMaterial map={floorTexture} />
      </mesh>
      <mesh
        geometry={nodes.cabinate_top.geometry}
        material={new THREE.MeshStandardMaterial({ map: floorTexture })}
        // material={nodes.cabinate_top.material}
        // position={[-0.32, 1.53, -0.03]}
        // scale={[0.65, 0.05, 5.03]}
        scale={[0.65, 0, 5.03]}
      // material-color='yellow'
      />
      <mesh
        geometry={nodes.flore_cabinate__3.geometry}
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
        position={[-0.25, 0.75, -1.2]}
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
        geometry={nodes.celling.geometry}
        material={nodes.celling.material}
        position={[2.11, 4.27, 0.03]}
        // rotation={[-Math.PI, 0, -Math.PI]}
        scale={[-3.32, -0.09, -5.3]}
        material-color='blue'
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
        scale={[1, 1.56, 0.9]}
        material-color='pink'
      >
        <mesh geometry={nodes.Baseboard002.geometry} material={nodes.Baseboard002.material} />
      </mesh>
      <mesh
        geometry={nodes.flore_cabinate_10.geometry}
        material={nodes.flore_cabinate_10.material}
        position={[0.91, 0.74, -4.41]}
        rotation={[0, -1.57, 0]}
        scale={[0.47, 0.75, 0.6]}
      />
      <mesh
        geometry={nodes.cabinate_top_1.geometry}
        // material={nodes.cabinate_top_1.material}
        material={new THREE.MeshStandardMaterial({ map: floorTexture })}
        position={[2.43, 1.53, -4.41]}
        rotation={[0, Math.PI / 2, 0]}
        scale={[0.45, 0.05, 2.11]}
      />
      <mesh
        geometry={nodes.flore_cabinate_11.geometry}
        material={nodes.flore_cabinate_11.material}
        position={[2.12, 0.74, -4.42]}
        rotation={[0, -1.57, 0]}
        scale={[0.49, 0.75, 0.6]}
      />
      <mesh
        geometry={nodes.flore_cabinate_12.geometry}
        material={nodes.flore_cabinate_12.material}
        position={[3.18, 0.74, -4.39]}
        rotation={[0, -1.57, 0]}
        scale={[0.46, 0.75, 0.45]}
      />
      <mesh
        geometry={nodes.flore_cabinate_13.geometry}
        material={nodes.flore_cabinate_13.material}
        position={[4.09, 0.74, -4.38]}
        rotation={[0, -1.57, 0]}
        scale={[0.45, 0.75, 0.45]}
      />
      <mesh
        geometry={nodes.cabinate_top_1001.geometry}
        // material={nodes.cabinate_top_1001.material}
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
    </group>
  )

  // const ref = useRef()
  // useFrame(() => (ref.current.rotation.x = ref.current.rotation.y += 0.01))
  // return (
  //   <mesh ref={ref}
  //     onClick={e => console.log('click')}
  //     onPointerOver={e => console.log('hover')}
  //     onPointerOut={e => console.log('unhover')}>
  //     <boxGeometry attach="geometry" args={[1, 1, 1]} />
  //     <meshNormalMaterial attach="material" />
  //   </mesh>
  // )
}

useGLTF.preload('/blender_model/kitchen.glb')
export default KitchenModel