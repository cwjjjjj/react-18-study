/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/ferrari.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 0.68, 0]} rotation={[-Math.PI / 2, 0, -Math.PI / 2]}>
        <mesh geometry={nodes.trim.geometry} material={materials.Leather_red} position={[-0.38, 0, -0.02]} />
        <mesh geometry={nodes.lights_red.geometry} material={materials.Taillight_Glass} position={[0.91, 0, -0.01]} />
        <mesh geometry={nodes.plastic_gray.geometry} material={materials.plastic_gray} position={[0.11, 0, -0.03]} />
        <mesh geometry={nodes.metal.geometry} material={materials.metal_gray} position={[0.22, 0, 0]} />
        <mesh geometry={nodes.lights.geometry} material={materials.Projector_Glass} position={[-1.85, 0, -0.07]} />
        <mesh geometry={nodes.leds.geometry} material={materials.Turn_Signal_LED} position={[-1.27, 0, 0.02]} />
        <mesh geometry={nodes.leather.geometry} material={materials.Leather} position={[-0.35, 0, -0.03]} />
        <mesh geometry={nodes.interior_light.geometry} material={materials.Interior_dark} position={[0, 0, 0]} />
        <mesh geometry={nodes.grills.geometry} material={materials.Tires} position={[0.05, -0.01, -0.03]} />
        <mesh geometry={nodes.glass.geometry} material={materials.Glass_Gray} position={[0, 0, 0.19]} />
        <mesh geometry={nodes.chrome.geometry} material={materials.metal_chrome} position={[0.03, 0, 0.01]} />
        <mesh geometry={nodes.carpet.geometry} material={materials.Carpet} position={[-0.28, 0, -0.23]} />
        <mesh geometry={nodes.carbon_fibre_trim.geometry} material={materials.Carbon_Fiber} position={[-0.18, 0, -0.04]} />
        <mesh geometry={nodes.carbon_fibre.geometry} material={materials.Carbon_Fiber} position={[-0.44, -0.35, 0.12]} />
        <mesh geometry={nodes.brakes.geometry} material={materials.Taillight_Glass} position={[1.99, 0, 0.2]} />
        <mesh geometry={nodes.interior_dark.geometry} material={materials.Interior_light} position={[0, 0, 0.01]} />
        <mesh geometry={nodes.body.geometry} material={materials.Body_Color} position={[-0.01, 0, 0.02]} />
        <mesh geometry={nodes.blue.geometry} material={materials._0098_DodgerBlue} position={[-0.35, -0.44, 0.07]} />
        <mesh geometry={nodes.wipers.geometry} material={materials.Tires} position={[-1.09, 0.01, 0.11]} />
        <mesh geometry={nodes.yellow_trim.geometry} material={materials.Ferrari_Yellow} position={[-1.4, 0, 0.05]} />
      </group>
      <group position={[0.82, 0.36, 1.5]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.wheel.geometry} material={materials.metal_gray} />
        <mesh geometry={nodes.tire.geometry} material={materials.Tires} position={[-0.01, 0, 0]} />
        <mesh geometry={nodes.rim_rr.geometry} material={materials.metal_gray} position={[0.13, 0, 0]} />
        <mesh geometry={nodes.centre.geometry} material={materials.Ferrari_Yellow} position={[0.11, 0, 0]} />
        <mesh geometry={nodes.brake.geometry} material={materials.metal_gray} position={[0.01, 0, 0]} />
        <mesh geometry={nodes.nuts.geometry} material={materials.Interior_dark} position={[0.1, 0, 0.01]} />
      </group>
      <group position={[-0.82, 0.36, 1.49]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.tire_1.geometry} material={materials.Tires} position={[0.01, 0, 0]} />
        <mesh geometry={nodes.brake_1.geometry} material={materials.metal_gray} position={[-0.02, 0, 0]} />
        <mesh geometry={nodes.centre_1.geometry} material={materials.Ferrari_Yellow} position={[-0.11, 0, 0]} />
        <mesh geometry={nodes.wheel_1.geometry} material={materials.metal_gray} />
        <mesh geometry={nodes.rim_rl.geometry} material={materials.metal_gray} position={[-0.13, 0, 0]} />
        <mesh geometry={nodes.nuts_1.geometry} material={materials.Interior_dark} position={[-0.1, 0, 0.01]} />
      </group>
      <group position={[-0.84, 0.36, -1.16]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.rim_fl.geometry} material={materials.metal_gray} position={[-0.11, 0, 0]} />
        <mesh geometry={nodes.brake_2.geometry} material={materials.metal_gray} />
        <mesh geometry={nodes.centre_2.geometry} material={materials.Ferrari_Yellow} position={[-0.1, 0, 0]} />
        <mesh geometry={nodes.nuts_2.geometry} material={materials.Interior_dark} position={[-0.09, 0, 0.01]} />
        <mesh geometry={nodes.wheel_2.geometry} material={materials.metal_gray} />
        <mesh geometry={nodes.tire_2.geometry} material={materials.Tires} position={[0.01, 0, 0]} />
      </group>
      <group position={[0.83, 0.36, -1.15]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.brake_3.geometry} material={materials.metal_gray} />
        <mesh geometry={nodes.centre_3.geometry} material={materials.Ferrari_Yellow} position={[0.1, 0, 0]} />
        <mesh geometry={nodes.wheel_3.geometry} material={materials.metal_gray} />
        <mesh geometry={nodes.rim_fr.geometry} material={materials.metal_gray} position={[0.11, 0, 0]} />
        <mesh geometry={nodes.tire_3.geometry} material={materials.Tires} position={[-0.01, 0, 0]} />
        <mesh geometry={nodes.nuts_3.geometry} material={materials.Interior_dark} position={[0.09, 0, 0.01]} />
      </group>
      <group position={[-0.35, 0.8, -0.35]} rotation={[-1.92, 0, 0]}>
        <mesh geometry={nodes.steering_carbon.geometry} material={materials.Carbon_Fiber} position={[0, 0.02, 0.01]} rotation={[Math.PI / 9, 0, 0]} />
        <mesh geometry={nodes.steering_centre.geometry} material={materials.Ferrari_Yellow} />
        <mesh geometry={nodes.steering_column.geometry} material={materials.Interior_dark} position={[0, 0.07, -0.01]} rotation={[Math.PI / 9, 0, 0]} />
        <mesh geometry={nodes.steering_leather.geometry} material={materials.Leather} position={[0, 0.02, 0.01]} rotation={[Math.PI / 9, 0, 0]} />
        <mesh geometry={nodes.steering_metal.geometry} material={materials.metal_gray} position={[0.09, 0.02, -0.07]} rotation={[Math.PI / 9, 0, 0]} />
        <mesh geometry={nodes.steering_red_lights.geometry} material={materials.Taillight_Glass} position={[0.01, 0.02, -0.07]} rotation={[Math.PI / 9, 0, 0]} />
        <mesh geometry={nodes.steering_trim.geometry} material={materials.Leather_red} position={[0, 0.02, -0.08]} rotation={[Math.PI / 9, 0, 0]} />
      </group>
    </group>
  )
}

useGLTF.preload('/ferrari.glb')