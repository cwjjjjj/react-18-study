import { useRef } from "react";
import Son from "./Son";
export default function RefTest() {
  const ref = useRef();
  return (
    <div>
      <Son ref={ref} test="test" />
    </div>
  );
}
