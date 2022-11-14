import classes from "./MainSection.module.css";
import homeMainIcon from "../../../assets/home-main.svg";
import Typewriter from "../../../components/UIElements/Typewriter/Typewriter";
import { LazyLoadImage } from "react-lazy-load-image-component";

const MainSection = () => {
  return (
    <section className={classes.content}>
      <div className={classes.header}>
        <h2 style={{ paddingBottom: 15 }} className={classes.title}>
          Hi There! <span className={classes.wave}>👋🏻</span>
        </h2>

        <h1 className={classes.mainTitle}>
          I'M
          <strong className={classes.mainName}> Aditya Kumar</strong>
        </h1>

        <div style={{ paddingTop: 50 }}>
          <Typewriter
            strings={[
              "MERN Stack Developer",
              "Continuously Learning",
              "Currenly learning System Design",
            ]}
            wrapperClassName={classes.typewriterWrapper}
            cursorClassName={classes.typewriterCursor}
          />
        </div>
      </div>

      <LazyLoadImage
        alt="home-img"
        effect="blur"
        src={homeMainIcon}
        wrapperClassName={classes.homeMainIcon}
      />
    </section>
  );
};

export default MainSection;
