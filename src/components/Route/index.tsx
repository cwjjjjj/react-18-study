import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "@/components/Main";
import Volume from "@/components/Volume";
import CanvasTest from "../CanvasTest";

export default function index() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="volume" element={<Volume />} />
        <Route path="canvas" element={<CanvasTest />} />
      </Routes>
    </BrowserRouter>
  );
}
