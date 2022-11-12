import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../scenes/Home/Home"));

export const routes = {
  HOME: "/",
  ABOUT: "/about",
  PROJECTS: "/projects",
  PROJECT: "/project/:id",
  RESUME: "/resume",
};

const BaseRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={routes.HOME} element={<Home />} />
      </Routes>
    </>
  );
};

export default BaseRoutes;
