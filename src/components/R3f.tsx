import * as THREE from "three";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls, Stage, Stats, useGLTF } from "@react-three/drei";
// @ts-ignore
import shoeGltf from "../assets/shoe.gltf";
import houseGltf from "../assets/LittlestTokyo.gltf";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import squareGltf from "../assets/square.gltf";
import { House2 } from "@/assets/LittlestTokyo";
import { useState } from "react";
import { useSpring, animated } from "@react-spring/three";

function Ball({ ...props }) {
  const a = useThree();
  const [isBig, setIsBig] = useState(false);
  return (
    <>
      <mesh
        position={[-10, 10, 0]}
        {...props}
        scale={isBig ? 2 : 1}
        onClick={() => {
          setIsBig(!isBig);
          console.log("11");
        }}
      >
        <sphereGeometry />
        <meshStandardMaterial color="hotpink" />
      </mesh>
    </>
  );
}

/* This file was initially auto-generated by https://github.com/pmndrs/gltfjsx and then adapted manually */

function Shoe({ color, ...props }: any) {
  const { nodes, materials }: any = useGLTF(shoeGltf);
  const [isBig, setIsBig] = useState(false);
  // The following is a read-out of the models contents, all of its
  // meshes, groups and so on.
  return (
    <group
      {...props}
      dispose={null}
      onClick={() => {
        console.log("@@");
        setIsBig(!isBig);
      }}
      scale={isBig ? 2 : 1}
    >
      {/* We can alter materials by piercing into them: materia-property={...} */}
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe.geometry}
        material={materials.laces}
        material-envMapIntensity={0.8}
      />
      {/* Or, we define new materials, which now allows full re-use */}
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry}>
        <meshStandardMaterial
          color={color}
          aoMap={materials.mesh.aoMap}
          normalMap={materials.mesh.normalMap}
          normalMap-encoding={THREE.LinearEncoding}
          roughnessMap={materials.mesh.roughnessMap}
          metalnessMap={materials.mesh.metalnessMap}
          envMapIntensity={0.8}
        />
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_2.geometry}
        material={materials.caps}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_3.geometry}
        material={materials.inner}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_4.geometry}
        material={materials.sole}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_5.geometry}
        material={materials.stripes}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_6.geometry}
        material={materials.band}
        material-envMapIntensity={0.8}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.shoe_7.geometry}
        material={materials.patch}
        material-envMapIntensity={0.8}
      />
    </group>
  );
}

function Shoe2({ ...props }) {
  const { scene }: any = useGLTF(shoeGltf);
  const [isBig, setIsBig] = useState(false);
  return (
    <>
      <primitive
        object={scene}
        {...props}
        onClick={() => {
          setIsBig(!isBig);
          console.log("shoe2");
        }}
        scale={isBig ? 2 : 1}
      />
    </>
  );
}

// gltfjsx generate
function Shoe3(props: any) {
  const [isBig, setIsBig] = useState(false);
  const { scale } = useSpring({ scale: isBig ? 2 : 1 });

  const { nodes, materials }: any = useGLTF(shoeGltf);
  return (
    <animated.group
      {...props}
      dispose={null}
      scale={scale}
      onClick={() => {
        console.log("shoe3");
        setIsBig(!isBig);
      }}
    >
      <mesh geometry={nodes.shoe.geometry} material={materials.laces} />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} />
      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} />
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} />
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} />
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} />
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} />
    </animated.group>
  );
}

function House({ ...props }) {
  const { nodes, materials, scene }: any = useGLTF(houseGltf);
  return (
    <>
      <primitive
        object={scene}
        scale={0.006}
        position={[10, -10, 0]}
        {...props}
      />
    </>
  );
}

function Square({ ...props }) {
  const { nodes, materials, scene }: any = useGLTF(squareGltf);
  const gltf = useLoader(GLTFLoader, squareGltf);

  return (
    <>
      <primitive object={scene} scale={0.4} {...props} />
    </>
  );
}

export default function R3f() {
  return (
    <Canvas
      shadows
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      <pointLight position={[-10, 10, 1]} />
      <Ball position={[-5, 5, 1]} />

      <Stage environment="city" intensity={0.6}>
        <Shoe color="tomato" position={[10, 0, 0]} />
        <Shoe
          color="orange"
          scale={-1}
          // rotation={[0, 0.5, Math.PI]}
          position={[0, 0, -2]}
        />
      </Stage>
      <Shoe2 position={[0, 5, 1]} />
      <Shoe3 position={[2, 5, 1]} />
      <House position={[5, -5, 1]} />
      <Square position={[5, 5, 1]} />
      <House2 scale={0.006} position={[-5, -5, 1]} />
      <OrbitControls />
      <Stats className="fps" />
    </Canvas>
  );
}
