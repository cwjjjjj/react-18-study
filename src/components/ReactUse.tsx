import { useState } from "react";
import {
  useKey,
  useMotion,
  useMouseWheel,
  useNetworkState,
  usePageLeave,
  useThrottleFn,
} from "react-use";
import { useHover } from "react-use";
import UseKey from "react-use/lib/useKey";

const ReactUse = () => {
  const [status, setStatus] = useState("Updating stopped");
  const [value, setValue] = useState("");
  const [throttledValue, setThrottledValue] = useState("");

  const element = (hovered) => <div>Hover me! {hovered && "Thanks!"}</div>;
  const [hoverable, hovered] = useHover(element);

  const [count, set] = useState(0);
  const increment = () => set((count) => ++count);
  useKey("ArrowUp", increment);
  const mouseWheel = useMouseWheel();
  usePageLeave(() => console.log("Page left..."));

  const state = useMotion();
  console.log(useNetworkState());

  useThrottleFn(
    () => {
      setStatus("Waiting for input...");
      setThrottledValue(value);
    },
    2000,
    []
  );

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="Throttled input"
        onChange={({ currentTarget }) => {
          setStatus("Updating stopped");
          setValue(currentTarget.value);
        }}
      />
      <div>{status}</div>
      <div>Throttled value: {throttledValue}</div>
      <div>
        {hoverable}
        <div>{hovered ? "HOVERED" : ""}</div>
      </div>
      Press arrow up: {count}
      <hr />
      motion:{JSON.stringify(state, null, 2)}
      <hr />
      mouseWheel:{mouseWheel}
      <hr />
    </div>
  );
};

export default ReactUse;
