import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Home = lazy(() => import("../scenes/Home/Home"));
const About = lazy(() => import("../scenes/About/About"));

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
        <Route path={routes.ABOUT} element={<About />} />
      </Routes>
    </>
  );
};

export default BaseRoutes;
