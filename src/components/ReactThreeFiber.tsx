import { useLoader, Canvas } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import model from "../assets/LittlestTokyo.gltf";
import img from "../assets/children-share.png";
import test from "../assets/test.gltf";
import { useGLTF } from "@react-three/drei";

// function Model(props: any) {
//   const gltf = useLoader(GLTFLoader, model);
//   return <primitive object={gltf?.scene} />;
// }

// useGLTF.preload(model);

export default function ReactThreeFiber() {
  console.log("model", model);
  console.log("img", img);
  console.log("test", test);
  // const gltf = useLoader(GLTFLoader, model);
  // const testGltf = useLoader(GLTFLoader, test);
  const testGltf = useGLTF(test, true);
  return (
    <Canvas>
      {/* <primitive object={gltf?.scene} /> */}
      <primitive object={testGltf?.scene} />
    </Canvas>
  );
}
