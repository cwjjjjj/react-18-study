import { Outlet, useNavigate } from "react-router-dom";
import Route from "./components/Route";

function App() {
  const navigate = useNavigate();

  return (
    <>
      <nav>
        <button onClick={() => navigate("/volume")}>Volume</button>
        <button onClick={() => navigate("/canvas")}>Canvas</button>
        <button onClick={() => navigate("/framer-motion")}>
          Framer Motion
        </button>
      </nav>
      <hr />
      <Route />
      <Outlet />
    </>
  );
}

export default App;
