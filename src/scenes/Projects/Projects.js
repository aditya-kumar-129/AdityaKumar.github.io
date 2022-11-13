import classes from "./Projects.module.css";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import { PROJECTS } from "../../constants/projects";
import ProjectCard from "./ProjectCard/ProjectCard";

const Projects = () => {
  return (
    <BaseLayout>
      <div className={classes.content}>
        <h1 className={classes.title}>
          My Recent <strong className={classes.purple}>Works</strong>
        </h1>
        <p className={classes.subtitle}>
          Here are a few projects I've worked on recently.
        </p>

        <ul className={classes.projects}>
          {PROJECTS.map((props) => (
            <ProjectCard key={props.id} {...props} />
          ))}
        </ul>
      </div>
    </BaseLayout>
  );
};

export default Projects;
