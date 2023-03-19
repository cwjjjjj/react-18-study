/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/RobotExpressive.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Root_Scene">
        <group name="RootNode">
          <group name="RobotArmature" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <primitive object={nodes.Bone} />
          </group>
          <group name="HandR" position={[0, 2.37, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="HandR_1" geometry={nodes.HandR_1.geometry} material={materials.Main} skeleton={nodes.HandR_1.skeleton} />
            <skinnedMesh name="HandR_2" geometry={nodes.HandR_2.geometry} material={materials.Grey} skeleton={nodes.HandR_2.skeleton} />
          </group>
          <group name="HandL" position={[0, 2.37, -0.02]} rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <skinnedMesh name="HandL_1" geometry={nodes.HandL_1.geometry} material={materials.Main} skeleton={nodes.HandL_1.skeleton} />
            <skinnedMesh name="HandL_2" geometry={nodes.HandL_2.geometry} material={materials.Grey} skeleton={nodes.HandL_2.skeleton} />
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/RobotExpressive.gltf')
