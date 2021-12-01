import { AppRoutes } from "../routes/app.routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { ServiceProvider } from "../providers/ServiceProvider";

const App = () => {
  return (
    <ServiceProvider>
      <AppRoutes />
      <ToastContainer />
    </ServiceProvider>
  );
};

export default App;
