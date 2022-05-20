import { useVolume } from "@/hooks/useVolume";

export default function Volume() {
  const { start, stop, isRecording, volume, setReady, ready } = useVolume();
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
