import classes from "./BaseLayout.module.css";
import Header from "../../components/Header/Header";
import Particle from "../../components/UIElements/Particles/Particle";
import Footer from "../../components/Footer/Footer";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";

const BaseLayout = ({ children }) => {
  return (
    <div className={classes.layout}>
      {/* <Particle /> */}
      <Header>
        <MainNavigation />
      </Header>
      <div className={classes.container}>{children}</div>
      <Footer />
    </div>
  );
};

export default BaseLayout;
