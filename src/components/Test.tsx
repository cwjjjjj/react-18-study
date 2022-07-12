import { useLockBodyScroll, usePermission, useToggle } from "react-use";

const Demo = () => {
  const [locked, toggleLocked] = useToggle(false);
  const state = usePermission({ name: "microphone" });
  console.log(state);

  useLockBodyScroll(locked);

  return (
    <div>
      <button onClick={() => toggleLocked()}>
        {locked ? "Unlock" : "Lock"}
      </button>
    </div>
  );
};
export default Demo;
