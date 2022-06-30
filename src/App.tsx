import { Outlet, useNavigate } from "react-router-dom";
import Route from "./components/Route";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate("/canvas")}>Canvas</button>
        <button onClick={() => navigate("/framer-motion")}>
          Framer Motion
        </button>
        <button onClick={() => navigate("/key-board")}>Key Board</button>
        <button onClick={() => navigate("/test")}>Test</button>
        <button onClick={() => navigate("/react-use")}>React Use</button>
        <button onClick={() => navigate("/ref")}>Ref</button>
      </nav>
      <hr />
      <Route />
      <Outlet />
    </>
  );
}

export default App;
