import { ProtectedRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import { Interview } from "./pages";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Interview />
      {/* <ProtectedRoutes />
      <ToastContainer position="bottom-center" /> */}
    </div>
  );
}

export default App;
