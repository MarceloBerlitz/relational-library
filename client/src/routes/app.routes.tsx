import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "../components/Layout/Layout";
import { layoutRoutes, noLayoutRoutes } from "./routes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {noLayoutRoutes.map((route) => (
          <Route {...route} />
        ))}
        {layoutRoutes.map(({ element, ...other }) => (
          <Route element={<Layout>{element}</Layout>} {...other} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};
