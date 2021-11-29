import { Courses} from '../routes/app.routes';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <>
      <Courses/>
      <ToastContainer />
    </>
  );
}

export default App