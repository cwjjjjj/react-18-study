import { css } from "@emotion/react";
import { Outlet, useNavigate } from "react-router-dom";
import Route from "./components/Route";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav
        css={css`
          display: flex;
          gap: 5px;
        `}
      >
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/canvas")}>Canvas</button>
        <button onClick={() => navigate("/framer-motion")}>
          Framer Motion
        </button>
        <button onClick={() => navigate("/key-board")}>Key Board</button>
        <button onClick={() => navigate("/test")}>Test</button>
        <button onClick={() => navigate("/react-use")}>React Use</button>
        <button onClick={() => navigate("/ref")}>Ref</button>
        <button onClick={() => navigate("/protals")}>Portals</button>
        <button onClick={() => navigate("/two-page")}>Two Page</button>
        <button onClick={() => navigate("/resize")}>Resize</button>
        <button onClick={() => navigate("/drag")}>Drag</button>
        <button onClick={() => navigate("/type-writing")}>type-writing</button>
        <button onClick={() => navigate("/unocss")}>Unocss</button>
        <button onClick={() => navigate("/list")}>list</button>
        <button onClick={() => navigate("/pixi")}>pixi</button>
        <button onClick={() => navigate("/fabric")}>fabric</button>
        <button onClick={() => navigate("/three")}>three</button>
        <button onClick={() => navigate("/react-three-fiber")}>
          react-three-fiber
        </button>
        <button onClick={() => navigate("/R3f")}>r3f</button>
        <button onClick={() => navigate("/html2image")}>html2image</button>
        <button onClick={() => navigate("/virtual-list")}>virtual-list</button>
        <button onClick={() => navigate("/leva")}>leva</button>
        <button onClick={() => navigate("/react-spring")}>react-spring</button>
        <button onClick={() => navigate("/input-css")}>input-css</button>
        <button onClick={() => navigate("/lottie")}>lottie</button>
        <button onClick={() => navigate("/robot")}>robot</button>
      </nav>
      <hr />
      <Route />
      <Outlet />
    </>
  );
}

export default App;
