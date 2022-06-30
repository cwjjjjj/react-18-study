import { useState } from "react";
import { useThrottleFn } from "react-use";

const ReactUse = () => {
  const [status, setStatus] = useState("Updating stopped");
  const [value, setValue] = useState("");
  const [throttledValue, setThrottledValue] = useState("");

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
    </div>
  );
};

export default ReactUse;
