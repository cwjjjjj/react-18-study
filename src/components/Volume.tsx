import { useVolume } from "@/hooks/useVolume";
import { useEffect } from "react";

export default function Volume() {
  const { start, stop, isRecording, volume, setReady, ready } = useVolume();
  const test = () => {
    setTimeout(
      console.log,
      100,
      new Promise((resolve, reject) => reject(3)).catch((e) =>
        console.log("e", e)
      )
    );
  };

  const testTry = () => {
    try {
      // let tt = 1
      console.log("123", tt);
    } catch {
      console.log("err");
    }
  };
  useEffect(() => {
    test();
    testTry();
  }, []);
  return (
    <div>
      <button onClick={() => setReady(true)}>开始录音</button>
      <button
        onClick={() => {
          setReady(false);
          stop();
        }}
      >
        停止录音
      </button>
      <button onClick={() => setReady(!ready)}>
        {ready ? "停止" : "开始"}
      </button>
      <div>{isRecording ? "录音中" : "未录音"}</div>
      <div>音量大小：{volume}</div>
    </div>
  );
}
