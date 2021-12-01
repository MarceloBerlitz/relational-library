import { AppRoutes } from "../routes/app.routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <AppRoutes />
      <ToastContainer />
    </>
  );
};

export default App;
