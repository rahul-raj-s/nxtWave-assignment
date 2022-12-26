import { ProtectedRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ProtectedRoutes />
      <ToastContainer position="bottom-center"/>
    </div>
  );
}

export default App;
