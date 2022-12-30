import { css } from "@emotion/react";
import { Html, useProgress } from "@react-three/drei";
import { useEffect } from "react";
import loading from "../assets/loading.svg";

export default function R3fLoader() {
  const { progress, ...rest } = useProgress();
  useEffect(() => {
    console.log("progress", { progress }, rest);
  });
  return (
    <Html center>
      <div
        css={css`
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        `}
      >
        {progress} %
      </div>
      <img src={loading} alt="" />
    </Html>
  );
}
