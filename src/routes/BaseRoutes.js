import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import ModalProjectCard from "../scenes/Projects/ModalProjectCard/ModalProjectCard";

const Home = lazy(() => import("../scenes/Home/Home"));
const About = lazy(() => import("../scenes/About/About"));
const Projects = lazy(() => import("../scenes/Projects/Projects"));
const Resume = lazy(() => import("../scenes/Resume/Resume"));

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
        <Route path={routes.PROJECTS} element={<Projects />} />
        <Route path={routes.PROJECT} element={<ModalProjectCard />} />
        <Route path={routes.RESUME} element={<Resume />} />
      </Routes>
    </>
  );
};

export default BaseRoutes;
