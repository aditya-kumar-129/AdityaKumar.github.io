import classes from "./Footer.module.css";
import { AiFillGithub } from "react-icons/ai";
import { FaInstagramSquare, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <div className={classes.copyright}>
          <h3 className={classes.heading}>
            Designed and Developed by Aditya Kumar
          </h3>
        </div>

        <div className={classes.copyright}>
          <h3 className={classes.heading}>Copyright © {year} Aditya Kumar</h3>
        </div>

        <div className={classes.body}>
          <ul className={classes.socialIcons}>
            <li>
              <a
                href="https://github.com/aditya-kumar-129/"
                target="_blank"
                rel="noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/aditya_kumar_129/"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagramSquare />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aditya-kumar129/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
