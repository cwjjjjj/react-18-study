import { Route, Routes } from "react-router-dom";
import Volume from "@/components/Volume";
import CanvasTest from "../CanvasTest";
import FramerMotion from "../FramerMotion";
import KeyBoard from "../KeyBoard";
import Test from "../Test";
import ReactUse from "../ReactUse";
import RefTest from "../RefTest";

export default function index() {
  return (
    <Routes>
      <Route index element={<Volume />} />
      <Route path="canvas" element={<CanvasTest />} />
      <Route path="framer-motion" element={<FramerMotion />} />
      <Route path="key-board" element={<KeyBoard />} />
      <Route path="test" element={<Test />} />
      <Route path="react-use" element={<ReactUse />} />
      <Route path="ref" element={<RefTest />} />
    </Routes>
  );
}
