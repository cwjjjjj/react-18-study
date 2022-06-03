import { Route, Routes } from "react-router-dom";
import Volume from "@/components/Volume";
import CanvasTest from "../CanvasTest";
import FramerMotion from "../FramerMotion";

export default function index() {
  return (
    <Routes>
      <Route index element={<Volume />} />
      <Route path="canvas" element={<CanvasTest />} />
      <Route path="framer-motion" element={<FramerMotion />} />
    </Routes>
  );
}
