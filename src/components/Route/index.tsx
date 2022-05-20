import { Route, Routes, BrowserRouter } from "react-router-dom";
import Main from "@/components/Main";
import Volume from "@/components/Volume";

export default function index() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="volume" element={<Volume />} />
      </Routes>
    </BrowserRouter>
  );
}
