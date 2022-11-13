import classes from "./About.module.css";
import BaseLayout from "../../layouts/BaseLayout/BaseLayout";
import laptopImg from "../../assets/about-laptop.png";
import AboutTextCard from "./AboutTextCard/AboutTextCard";
import TechSkills from "./TechSkills/TechSkills";
// import GithubActivity from './GithubActivity/GithubActivity';

const About = () => {
  return (
    <BaseLayout>
      <div className={classes.content}>
        <div className={classes.about}>
          <div className={classes.aboutDescription}>
            <h1 className={classes.title}>
              Know Who <b className={classes.purple}>I'M</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={classes.aboutImg}>
            <img src={laptopImg} alt="about" />
          </div>
        </div>

        <h2 className={classes.skills}>
          Professional <b className={classes.purple}>Skills</b>
        </h2>
        <TechSkills />

        {/* <h2 className={classes.githubActivity}>
          Days I <b className={classes.purple}>Code</b>
        </h2>
        <GithubActivity /> */}
      </div>
    </BaseLayout>
  );
};

export default About;
