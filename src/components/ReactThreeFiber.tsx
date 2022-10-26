// import { useLoader, Canvas } from "@react-three/fiber";
// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
// import model from "../assets/LittlestTokyo.gltf";
// import img from "../assets/children-share.png";
import test from "../assets/test.gltf";
// import { useGLTF } from "@react-three/drei";
// import glb from "../assets/LittlestTokyo.glb";
import { useGLTF } from "@react-three/drei";
import { useRef } from "react";

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

export default function ReactThreeFiber() {
  const group = useRef();
  const { nodes, materials } = useGLTF(test);
  return (
    <div>
      <group ref={group} dispose={null}>
        <mesh castShadow receiveShadow geometry={nodes} material={materials} />
      </group>
    </div>
  );
}

useGLTF.preload(test);
