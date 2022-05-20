import { useEffect, useRef, useState } from "react";

export const useVolume = () => {
  const [volume, setVolume] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [ready, setReady] = useState(false);

  const audioContext = useRef<AudioContext>();
  const analyser = useRef<AnalyserNode>();
  const microPhone = useRef<MediaStreamAudioSourceNode>();
  const recordEventNode = useRef<ScriptProcessorNode>();
  const basicStream = useRef<MediaStream>();

  useEffect(() => {
    if (!ready) {
      return;
    }
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        audioContext.current = new AudioContext();
        analyser.current = audioContext.current.createAnalyser();
        microPhone.current =
          audioContext.current.createMediaStreamSource(stream);
        recordEventNode.current = audioContext.current.createScriptProcessor(
          2048,
          1,
          1
        );
        analyser.current.smoothingTimeConstant = 0.8;
        analyser.current.fftSize = 1024;
        basicStream.current = stream;
        start();
      });
    }
  }, [ready]);

  function analyzeMicrophoneVolume() {
    const aNode = analyser.current as AnalyserNode;
    const array = new Uint8Array(aNode.frequencyBinCount);
    aNode.getByteFrequencyData(array);
    let values = 0;
    const length = array.length;
    for (let i = 0; i < length; i++) {
      values += array[i];
    }
    const average = values / length;
    // console.log("音量大小：" + Math.round(average))
    setVolume(average);
  }

  const start = () => {
    (microPhone.current as MediaStreamAudioSourceNode).connect(
      analyser.current as AnalyserNode
    );
    (analyser.current as AnalyserNode).connect(
      recordEventNode.current as ScriptProcessorNode
    );
    (recordEventNode.current as ScriptProcessorNode).connect(
      (audioContext.current as AudioContext).destination
    );
    (recordEventNode.current as ScriptProcessorNode).addEventListener(
      "audioprocess",
      analyzeMicrophoneVolume
    );
    setIsRecording((currentBlowingStatus) => !currentBlowingStatus);
  };

  const stop = () => {
    basicStream.current?.getTracks().forEach((track) => track.stop());
    (recordEventNode.current as ScriptProcessorNode).disconnect();
    (analyser.current as AnalyserNode).disconnect();
    (microPhone.current as MediaStreamAudioSourceNode).disconnect();
    (audioContext.current as AudioContext).close();
    setIsRecording((currentBlowingStatus) => !currentBlowingStatus);
  };

  return { start, stop, isRecording, volume, setReady, ready } as const;
};
