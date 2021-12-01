import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import { useAuth } from "../providers/AuthProvider";
import { layoutRoutes, noLayoutRoutes } from "./routes";

export const AppRoutes = () => {
  const { user } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={user ? "/home" : "/login"} />} />
        {noLayoutRoutes.map(({ element, ...other }) => (
          <Route
            key={other.path}
            element={!user ? element : <Navigate to={"/home"} />}
            {...other}
          />
        ))}
        {layoutRoutes.map(({ element, ...other }) => (
          <Route
            key={other.path}
            element={
              user ? <Layout>{element}</Layout> : <Navigate to={"/login"} />
            }
            {...other}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
