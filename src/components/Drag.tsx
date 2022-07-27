import { css } from "@emotion/react";
import { useEffect, useRef } from "react";
export default function Drag() {
  const splitRef = useRef<HTMLDivElement>(null);
  const DragRef = useRef({
    isDragging: false,
    startX: 0,
    endX: 0,
    offsetX: 0,
  });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      if (!splitRef.current || !DragRef.current.isDragging) {
        return;
      }
      let x = e.pageX - splitRef.current.offsetWidth / 2;
      let y = e.pageY - splitRef.current.offsetHeight / 2;
      splitRef.current.style.left = `${x}px`;
      splitRef.current.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", (e) => {
      if (!DragRef.current.isDragging) {
        return;
      }
      DragRef.current.isDragging = false;
      DragRef.current.startX = 0;
      DragRef.current.endX = 0;
      DragRef.current.offsetX = 0;
    });
  });
  return (
    <div
      ref={splitRef}
      css={css`
        background: red;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        cursor: pointer;
        position: absolute;
      `}
      onMouseDown={(e) => {
        DragRef.current.isDragging = true;
        DragRef.current.startX = e.pageX;
      }}
    ></div>
  );
}
