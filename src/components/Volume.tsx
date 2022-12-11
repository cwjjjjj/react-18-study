import { useVolume } from "@/hooks/useVolume";
import { useEffect, useRef } from "react";

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
      let tt = 1;
      console.log("123", tt);
    } catch {
      console.log("err");
    }
  };
  useEffect(() => {
    test();
    testTry();
    console.trace("isRecording", isRecording);
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    console.log("videoRef", videoRef.current);
    const timer = setInterval(() => {
      console.log("ready", videoRef.current?.seekable);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const element = (
    <div
      onClick={(e) => {
        console.log("element", element);
      }}
    >
      element {JSON.stringify(isRecording)}
    </div>
  );

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

      <video
        src="https://videocdn.jellow.site/lvw5lLB8HEamWyYqY5e-EEFtSRvL.mp4?sign=46c7c80d197ac439361ae23d09075d68&t=629c524f"
        width={600}
        height={600}
        controls
        ref={videoRef}
        poster="../assets/children-share.png"
      ></video>
      {element}
    </div>
  );
}
