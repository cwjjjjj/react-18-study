import { useEffect, useLayoutEffect, useRef } from "react";
import { fabric } from "fabric";
import { css } from "@emotion/react";

const FabricJSCanvas = () => {
  const canvasEl = useRef(null);
  const div = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  useLayoutEffect(() => {
    if (!div.current) {
      return;
    }
    div.current.animate(
      [
        { transformOrigin: "top left", transform: "translate(100px, 100px)" },
        { transformOrigin: "top left", transform: "translate(200px,200px)" },
      ],
      { duration: 300, easing: "ease-in-out", fill: "auto" }
    );
  }, []);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasEl.current, {});
    const rect = new fabric.Rect({
      top: 100, // 距离容器顶部 100px
      left: 100, // 距离容器左侧 100px
      width: 30, // 矩形宽度 30px
      height: 30, // 矩形高度 30px
      fill: "red", // 填充 红色
    });

    canvas.add(rect);

    const circle = new fabric.Circle({
      radius: 30, // 圆的半径
      top: 20, // 距离容器顶部 20px
      left: 20, // 距离容器左侧 20px
      fill: "pink", // 填充 粉色
    });

    canvas.add(circle); // 将圆形添加到 canvas 画布里
    circle.animate("angle", "360", {
      onChange: canvas.renderAll.bind(canvas), // 每次刷新的时候都会执行
    });
    rect.animate(
      { angle: "360", width: "1000", top: "0" },
      {
        onChange: canvas.renderAll.bind(canvas), // 每次刷新的时候都会执行
      }
    );

    return () => {
      canvas.dispose();
    };
  }, []);
  return (
    <div>
      <canvas
        width="300"
        height="300"
        ref={canvasEl}
        css={css`
          border: solid 1px red;
        `}
      />
      canvas
      <div
        css={css`
          height: 100px;
          width: 100px;
          background-color: red;
        `}
        ref={div}
      />
    </div>
  );
};
export default FabricJSCanvas;
