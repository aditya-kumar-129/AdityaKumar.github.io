import classes from "./TechSkills.module.css";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiJava,
  DiBootstrap,
  DiVisualstudio,
  DiCss3,
  DiHtml5,
} from "react-icons/di";

const TechSkills = () => {
  return (
    <ul className={classes.container}>
      <li className={classes.techIcon}>
        <DiHtml5 />
      </li>
      <li className={classes.techIcon}>
        <DiCss3 />
      </li>
      <li className={classes.techIcon}>
        <DiBootstrap />
      </li>
      <li className={classes.techIcon}>
        <DiJavascript1 />
      </li>
      <li className={classes.techIcon}>
        <DiReact />
      </li>
      <li className={classes.techIcon}>
        <DiNodejs />
      </li>
      <li className={classes.techIcon}>
        <DiMongodb />
      </li>
      <li className={classes.techIcon}>
        <DiJava />
      </li>
      <li className={classes.techIcon}>
        <DiGit />
      </li>
      <li className={classes.techIcon}>
        <DiVisualstudio />
      </li>
    </ul>
  );
};

export default TechSkills;
