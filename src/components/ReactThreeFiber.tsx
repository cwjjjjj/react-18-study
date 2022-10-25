import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import gltf from "../assets/LittlestTokyo.gltf";


export default function ReactThreeFiber() {
console.log('glb',gltf)

    // const gltf = useLoader(GLTFLoader, glb);
    return (
      <>
      123
        {/* <primitive object={gltf.scene} scale={0.4} /> */}
      </>
    );
}
