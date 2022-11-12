import classes from "./Burger.module.css";

const Burger = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.burger}>
      <span />
      <span />
      <span />
    </button>
  );
};

export default Burger;
