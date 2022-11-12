import classes from "./IntroSection.module.css";
import avatar from "../../../assets/avatar.svg";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";
import Tilt from "react-parallax-tilt";
import { LazyLoadImage } from "react-lazy-load-image-component";

const IntroSection = () => {
  return (
    <section className={classes.content}>
      <div className={classes.introduction}>
        <div className={classes.introductionText}>
          <h1 className={classes.title}>
            LET ME <span className={classes.purple}> INTRODUCE </span> MYSELF
          </h1>

          <div className={classes.description}>
            <p>
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
            </p>

            <p>
              My field of Interest'classes are building new
              <i>
                <b className={classes.purple}> Web Technologies and Products</b>
              </i>
            </p>

            <p>
              A passionate Full Stack Software Developer 🚀 <br />I have an
              experience of building
              <i>
                <b className={classes.purple}>Web </b>
              </i>
              applications with
              <br />
              <i>
                <b className={classes.purple}>JavaScript, Reactjs, Bootstrap</b>
              </i>
              and some other cool libraries
            </p>
          </div>
        </div>

        <Tilt trackOnWindow={true}>
          <LazyLoadImage alt="avatar" effect="blur" src={avatar} />
        </Tilt>
      </div>

      <div className={classes.introSocial}>
        <h1>FIND ME ON</h1>
        <p>
          Feel free to <span className={classes.purple}>connect </span>with me
        </p>
        <ul className={classes.socialLinks}>
          <li className={classes.socialLink}>
            <a
              href="https://github.com/aditya-kumar-129/"
              target="_blank"
              rel="noreferrer"
              className={classes.socialIcon}
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={classes.socialLink}>
            <a
              href="https://www.instagram.com/aditya_kumar_129/"
              target="_blank"
              rel="noreferrer"
              className={classes.socialIcon}
            >
              <FaInstagramSquare />
            </a>
          </li>
          <li className={classes.socialLink}>
            <a
              href="https://www.linkedin.com/in/aditya-kumar129/"
              target="_blank"
              rel="noreferrer"
              className={classes.socialIcon}
            >
              <FaLinkedinIn />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
