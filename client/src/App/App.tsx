import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import { AppRoutes } from "../routes/app.routes";
import { ServiceProvider } from "../providers/ServiceProvider";
import { AuthProvider } from "../providers/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <ServiceProvider>
        <AppRoutes />
        <ToastContainer />
      </ServiceProvider>
    </AuthProvider>
  );
};

export default App;
