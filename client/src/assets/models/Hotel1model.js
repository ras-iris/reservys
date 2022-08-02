/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useGLTF } from '@react-three/drei'

export function Hotel1Model(props) {
  const { nodes, materials } = useGLTF('/models/hotel1.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0.03, 0.82, -0.83]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.19}>
        <mesh geometry={nodes.Plane.geometry} material={materials.wall} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials.frame} />
        <mesh geometry={nodes.Plane_2.geometry} material={materials.glass} />
        <mesh geometry={nodes.Plane_3.geometry} material={materials.room} />
        <mesh geometry={nodes.Plane_4.geometry} material={materials.Bricks} />
      </group>
      <group position={[0.03, 1.18, -0.83]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.19}>
        <mesh geometry={nodes.Plane010.geometry} material={materials.wall} />
        <mesh geometry={nodes.Plane010_1.geometry} material={materials.frame} />
        <mesh geometry={nodes.Plane010_2.geometry} material={materials.glass} />
        <mesh geometry={nodes.Plane010_3.geometry} material={materials.room} />
        <mesh geometry={nodes.Plane010_4.geometry} material={materials.Bricks} />
      </group>
      <group position={[0.03, 1.64, -0.82]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.19}>
        <mesh geometry={nodes.Plane084.geometry} material={materials.wall} />
        <mesh geometry={nodes.Plane084_1.geometry} material={materials.frame} />
        <mesh geometry={nodes.Plane084_2.geometry} material={materials.glass} />
        <mesh geometry={nodes.Plane084_3.geometry} material={materials.room} />
        <mesh geometry={nodes.Plane084_4.geometry} material={materials.Bricks} />
      </group>
      <group position={[0.03, 2, -0.82]} rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.19}>
        <mesh geometry={nodes.Plane091.geometry} material={materials.wall} />
        <mesh geometry={nodes.Plane091_1.geometry} material={materials.frame} />
        <mesh geometry={nodes.Plane091_2.geometry} material={materials.glass} />
        <mesh geometry={nodes.Plane091_3.geometry} material={materials.room} />
        <mesh geometry={nodes.Plane091_4.geometry} material={materials.Bricks} />
      </group>
      <group position={[0.02, 0.83, -0.84]} rotation={[-Math.PI, 0, Math.PI / 2]} scale={-0.19}>
        <mesh geometry={nodes.Plane153.geometry} material={materials.wall} />
        <mesh geometry={nodes.Plane153_1.geometry} material={materials.frame} />
        <mesh geometry={nodes.Plane153_2.geometry} material={materials.Material} />
        <mesh geometry={nodes.Plane153_3.geometry} material={materials['wall.001']} />
        <mesh geometry={nodes.Plane153_4.geometry} material={materials['Material.012']} />
        <mesh geometry={nodes.Plane153_5.geometry} material={materials['Material.020']} />
      </group>
      <group position={[0.03, 0.41, -1.04]} rotation={[Math.PI / 2, 0, 0]} scale={0.19}>
        <mesh geometry={nodes.Plane190.geometry} material={materials.frame} />
        <mesh geometry={nodes.Plane190_1.geometry} material={materials.glass} />
        <mesh geometry={nodes.Plane190_2.geometry} material={materials['wall.001']} />
        <mesh geometry={nodes.Plane190_3.geometry} material={materials.room} />
        <mesh geometry={nodes.Plane190_4.geometry} material={materials.Bricks} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/hotel1.glb')
