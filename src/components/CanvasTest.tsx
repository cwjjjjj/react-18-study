import { useRef, useEffect } from "react";

export default function CanvasTest() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!ctx || !canvas) return;

    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.arc(250, 250, 100, 0, Math.PI * 2, true);

    ctx.moveTo(340, 250);
    // ctx.moveTo(250, 250);
    ctx.arc(250, 250, 90, 0, Math.PI * 2, true);

    ctx.stroke();
  });
  return (
    <div className="flex justify-center items-center bg-slate-600">
      <canvas
        height={500}
        width={500}
        ref={canvasRef}
        // style={{ backgroundColor: "red", height: "100px", width: "100px" }}
        // className=" bg-red-500"
      >
        如果浏览器不支持 canvas 则显示这行字
      </canvas>
    </div>
  );
}
