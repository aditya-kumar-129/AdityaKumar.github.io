import classes from "./BtnToggleTheme.module.css";
import Button from "../UIElements/Button/Button";
// https://blog.logrocket.com/how-to-use-svgs-in-react/
import { ReactComponent as ToggleLightIcon } from "../../assets/toggle-light.svg";
import { ReactComponent as ToggleDarkIcon } from "../../assets/toggle-dark.svg";

// (darkVariable, function)
import { useThemeContext } from "../../hooks/themeHook/themeHook";

const BtnToggleTheme = ({ className }) => {
  const { dark, toggleTheme } = useThemeContext();

  return (
    <Button addClass={className} onClick={toggleTheme}>
      {dark && <ToggleLightIcon className={classes.toggleTheme} />}
      {!dark && <ToggleDarkIcon className={classes.toggleTheme} />}
    </Button>
  );
};

export default BtnToggleTheme;
