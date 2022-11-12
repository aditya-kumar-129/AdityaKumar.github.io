import cx from "classnames";
import classes from "./Button.module.css";

const Button = ({
  type = "button",
  onClick,
  disabled,
  className,
  children,
  href,
  target,
  style,
  addClass,
}) => {
  if (href) {
    return (
      <a
        style={style}
        className={cx(classes.btn, classes[className], addClass)}
        href={href}
        target={target}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      style={style}
      className={cx(classes.btn, classes[className], addClass)}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
