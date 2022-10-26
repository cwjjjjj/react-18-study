// import { useLoader, Canvas } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import model from "../assets/LittlestTokyo.gltf";
// import img from "../assets/children-share.png";
// import test from "../assets/test.gltf";
// import { useGLTF } from "@react-three/drei";
// import glb from "../assets/LittlestTokyo.glb";
// import { PerspectiveCamera, useGLTF } from "@react-three/drei";
// import { useRef } from "react";

// export default function ReactThreeFiber() {
//   console.log("model", model);
//   console.log("img", img);
//   console.log("test", test);
//   // const gltf = useLoader(GLTFLoader, model);
//   // const testGltf = useLoader(GLTFLoader, test);
//   const testGltf = useGLTF(test);
//   const testGlb = useGLTF(glb);
//   // console.log("testgltf", test);
//   console.log("testGlb", testGlb);

//   return (
//     <div>
//       123
//       <Canvas>
//         <primitive object={testGlb.scene} />
//         {/* <primitive object={gltf?.scene} /> */}
//         {/* <primitive object={testGltf?.scene} /> */}
//       </Canvas>
//     </div>
//   );
// }

// export default function ReactThreeFiber({ ...props }) {
//   const group = useRef();
//   const { nodes, materials } = useGLTF(test) ?? {};
//   console.log({ nodes, materials });
//   return (
//     <group {...props} dispose={null}>
//       <group
//         name="camera"
//         position={[10, 0, 50]}
//         rotation={[Math.PI / 2, 0, 0]}
//       >
//         <PerspectiveCamera fov={40} near={10} far={1000} />
//       </group>
//       <group
//         name="sun"
//         position={[100, 50, 100]}
//         rotation={[-Math.PI / 2, 0, 0]}
//       >
//         <pointLight intensity={10} />
//       </group>
//       <mesh geometry={nodes.Curve007_1} />
//       <mesh geometry={nodes.Curve007_2} />
//     </group>
//   );
// }

// useGLTF.preload(test);
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import { useGLTF, Environment } from "@react-three/drei";
import { EffectComposer, DepthOfField } from "@react-three/postprocessing";
import * as THREE from "three";
import img from "../assets/pokeball-v2-transformed.glb";

function Pokeball({ z }) {
  const ref = useRef();
  const { nodes, materials } = useGLTF(img);
  const { viewport, camera } = useThree();
  const { width, height } = viewport.getCurrentViewport(camera, [0, 0, z]);

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
      ref={ref}
      scale={0.016}
      geometry={nodes.PokeBall__0.geometry}
      material={materials["Scene_-_Root"]}
      material-emissive="darkblue"
    />
  );
}

export default function ReactThreeFiber({ count = 70, depth = 70 }) {
  return (
    <Canvas
      gl={{ alpha: false, antialias: true }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 10], fov: 20, near: 0.01, far: depth + 20 }}
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
          return <Pokeball key={i} z={zSpread} />;
        })}

        <EffectComposer multisampling={0}>
          <DepthOfField
            target={[0, 0, 56]}
            focalLength={0.8}
            bokehScale={10}
            height={700}
          />
        </EffectComposer>
      </Suspense>
    </Canvas>
  );
}
