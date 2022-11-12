import classes from "./SectionBG.module.css";

const SectionBG = ({ children }) => {
  return <div className={classes.sectionBG}>{children}</div>;
};

export default SectionBG;
