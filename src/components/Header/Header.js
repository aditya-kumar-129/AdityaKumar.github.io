import cx from "classnames";
import classes from "./Header.module.css";
import { useState } from "react";

const Header = ({ children }) => {
  const [headerHighlight, setHeaderHighlight] = useState(false);

  window.addEventListener("scroll", () => {
    setHeaderHighlight(window.scrollY >= 20);
  });

  return (
    <div className={cx(classes.header, { [classes.highlighted]: headerHighlight })}>
      <div className={classes.container}>{children}</div>
    </div>
  );
};

export default Header;
