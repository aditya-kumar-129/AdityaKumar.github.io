import classes from "./AboutTextCard.module.css";
import { ImPointRight } from "react-icons/im";

const AboutTextCard = () => {
  return (
    <div className={classes.card}>
      <p style={{ textAlign: "justify" }}>
        Hi Everyone, I am <span className={classes.purple}>Aditya Kumar </span>
        from <span className={classes.purple}> Patna, Bihar.</span>
        <br />
        Skilled Full Stack MERN Developer.
        <br /> Pursuing Bachelor in Information Science from
        <br />
        Ramaiah Institute of Technology
        <br />
        <br />
        Apart from coding, some other activities that I love to do!
      </p>

      <ul>
        <li className={classes.aboutActivity}>
          <ImPointRight /> Watching some Scientific and Horror movies
        </li>
        <li className={classes.aboutActivity}>
          <ImPointRight /> Reading About new Tech Stuffs
        </li>
      </ul>

      <p
        style={{
          color: "rgb(155 126 172)",
          textAlign: "center",
          marginTop: "1rem",
        }}
      >
        "Strive to build things that make a difference!"
      </p>
    </div>
  );
};

export default AboutTextCard;
