// source
import robotGltf from "../assets/RobotExpressive.gltf";

import * as THREE from "three";
import { Canvas } from "@react-three/fiber";
import {
  Html,
  OrbitControls,
  Stats,
  useAnimations,
  useGLTF,
} from "@react-three/drei";
import { useState, useRef, Suspense, useEffect } from "react";
import R3fLoader from "./R3fLoader";

function Robot(props: any) {
  const [currentAction, setCurrentAction] = useState("");
  const { nodes, materials, animations }: any = useGLTF(robotGltf);
  const { ref, mixer, names, actions, clips } = useAnimations(animations);
  useEffect(() => {
    actions?.[currentAction]?.play();
  }, [currentAction]);
  return (
    <>
      <Html>
        <div>
          {names.length &&
            names.map((item) => {
              console.log("action item", item);
              return (
                <button
                  onClick={() => {
                    setCurrentAction(item);
                  }}
                >
                  {item}
                </button>
              );
            })}
        </div>
      </Html>
      <group ref={ref} {...props} dispose={null}>
        <group name="Root_Scene">
          <group name="RootNode">
            <group
              name="RobotArmature"
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <primitive object={nodes.Bone} />
            </group>
            <group
              name="HandR"
              position={[0, 2.37, -0.02]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <skinnedMesh
                name="HandR_1"
                geometry={nodes.HandR_1.geometry}
                material={materials.Main}
                skeleton={nodes.HandR_1.skeleton}
              />
              <skinnedMesh
                name="HandR_2"
                geometry={nodes.HandR_2.geometry}
                material={materials.Grey}
                skeleton={nodes.HandR_2.skeleton}
              />
            </group>
            <group
              name="HandL"
              position={[0, 2.37, -0.02]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={100}
            >
              <skinnedMesh
                name="HandL_1"
                geometry={nodes.HandL_1.geometry}
                material={materials.Main}
                skeleton={nodes.HandL_1.skeleton}
              />
              <skinnedMesh
                name="HandL_2"
                geometry={nodes.HandL_2.geometry}
                material={materials.Grey}
                skeleton={nodes.HandL_2.skeleton}
              />
            </group>
          </group>
        </group>
      </group>
    </>
  );
}

export default function R3f() {
  return (
    <Canvas
      shadows
      style={{
        height: "500px",
        width: "500px",
      }}
    >
      <Suspense fallback={<R3fLoader />}>
        {/* <arrowHelper dir={new THREE.Vector3(1, 2, 3)} /> */}
        <pointLight position={[-100, 100, 1]} />
        <Robot />
        <OrbitControls />
        <Stats className="fps" />
      </Suspense>
    </Canvas>
  );
}
