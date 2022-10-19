import { Route, Routes } from "react-router-dom";
import Volume from "@/components/Volume";
import CanvasTest from "../CanvasTest";
import FramerMotion from "../FramerMotion";
import KeyBoard from "../KeyBoard";
import Test from "../Test";
import ReactUse from "../ReactUse";
import RefTest from "../RefTest";
import Portals from "../Portals";
import TwoPageCss from "../TwoPageCss";
import Resize from "../Resize";
import Drag from "../Drag";
import Typewriting from "../TypeWriting";
import Unocss from "../Unocss";
import List from "../List";
import Pixi from "../Pixi";
import Fabric from "../Fabric";
import Three from "../Three";

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
      <Route path="protals" element={<Portals />} />
      <Route path="two-page" element={<TwoPageCss />} />
      <Route path="resize" element={<Resize />} />
      <Route path="drag" element={<Drag />} />
      <Route path="type-writing" element={<Typewriting />} />
      <Route path="unocss" element={<Unocss />} />
      <Route path="list" element={<List />} />
      <Route path="pixi" element={<Pixi />} />
      <Route path="fabric" element={<Fabric />} />
      <Route path="three" element={<Three />} />
    </Routes>
  );
}
