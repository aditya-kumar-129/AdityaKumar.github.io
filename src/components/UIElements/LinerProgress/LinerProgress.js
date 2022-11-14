import cx from "classnames";
import classes from "./LinerProgress.module.css";

const LinerProgress = () => {
  return (
    <div className={classes.linearProgress}>
      <div className={cx(classes.bar, classes.bar1)} />
      <div className={cx(classes.bar, classes.bar2)} />
    </div>
  );
};

export default LinerProgress;
