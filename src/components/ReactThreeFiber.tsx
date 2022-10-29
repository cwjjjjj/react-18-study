import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { useGLTF, Environment, OrbitControls } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import * as THREE from "three";
import img from "../assets/pokeball-v2-transformed.glb";
import img2 from "../assets/square.gltf";
import { css } from "@emotion/react";

function Pokeball({ z }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF(img);
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);
  const [isScale, setIsScale] = useState(false);

  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.001),
      (data.rZ += 0.005)
    );

    ref.current.position.set(data.x * width, (data.y += 0.025), z);

    if (data.y > height) data.y = -height;
  });

  return (
    <mesh
      onClick={() => {
        setIsScale(!isScale);
      }}
      ref={ref}
      scale={isScale ? 0.1 : 0.016}
      geometry={nodes.PokeBall__0.geometry}
      material={materials["Scene_-_Root"]}
      material-emissive="black"
    />
  );
}

function House() {
  const ref1 = useRef();
  const ref2 = useRef();
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, -100]);
  const { nodes, materials } = useGLTF(img2);
  console.log("img2", { nodes, materials });
  const [data] = useState({
    x: THREE.MathUtils.randFloatSpread(2),
    y: THREE.MathUtils.randFloatSpread(height),
    rX: Math.random() * Math.PI,
    rY: Math.random() * Math.PI,
    rZ: Math.random() * Math.PI,
  });

  useFrame((state) => {
    ref1.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.001),
      (data.rZ += 0.005)
    );

    ref1.current.position.set(data.x * width, (data.y += 0.025), -100);

    if (data.y > height) data.y = -height;
  });

  useFrame((state) => {
    ref2.current.rotation.set(
      (data.rX += 0.001),
      (data.rY += 0.001),
      (data.rZ += 0.005)
    );

    ref2.current.position.set(data.x * width, (data.y += 0.025), -100);

    if (data.y > height) data.y = -height;
  });
  return (
    <group>
      <mesh
        ref={ref1}
        scale={0.016}
        geometry={nodes.Curve007_1.geometry}
        material={materials["Material.001"]}
        material-emissive="black"
      />
      <mesh
        ref={ref2}
        scale={0.016}
        geometry={nodes.Curve007_2.geometry}
        material={materials["Material.002"]}
        material-emissive="black"
      />
    </group>
  );
}

export default function ReactThreeFiber({ count = 70, depth = 70 }) {
  return (
    <Canvas
      gl={{ alpha: false, antialias: true }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 10], fov: 60, near: 0.01, far: depth + 20 }}
      style={{
        height: "100vh",
      }}
    >
      <color attach="background" args={["#2a75bb"]} />

      <ambientLight intensity={0.2} />
      <spotLight
        position={[10, 20, 10]}
        penumbra={1}
        intensity={3.5}
        color="white"
      />

      <Suspense fallback={null}>
        <Environment preset="sunset" />

        {Array.from({ length: count }, (_, i) => {
          const zSpread = -(i / count) * depth - 25; // function of the depth and then offset by - 25 so the 3d models are not too close
          console.log("z", zSpread);
          return <Pokeball key={i} z={zSpread} />;
        })}
        <House />

        <EffectComposer multisampling={0}>
          <DepthOfField
            target={[0, 0, 56]}
            focalLength={0.8}
            bokehScale={10}
            height={700}
          />
        </EffectComposer>
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
