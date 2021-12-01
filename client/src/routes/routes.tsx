import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";

export const noLayoutRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
];

export const layoutRoutes = [
  {
    path: "/home",
    element: <Home />,
  },
];
