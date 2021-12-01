import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import User from "../pages/User/User";

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
  {
    path: "/user",
    element: <User />,
  },
];
