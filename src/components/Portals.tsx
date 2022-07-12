import { css } from "@emotion/react";
import { useEffect } from "react";
import { createPortal } from "react-dom";

const renderPortals = () => {
  return (
    <div
      css={css`
        height: 100vh;
        width: 100vw;
        background-color: red;
        position: fixed;
      `}
    >
      xixi..
    </div>
  );
};

export default function Portals() {
  const myPortal = document.createElement("div");

  useEffect(() => {
    document.body.appendChild(myPortal);
  });
  return <>{createPortal(renderPortals(), myPortal)}</>;
}
