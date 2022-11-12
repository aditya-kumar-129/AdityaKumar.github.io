import classes from "./HomeLayout.module.css";
import Header from "../../components/Header/Header";
import Particle from "../../components/UIElements/Particles/Particle";
import Footer from "../../components/Footer/Footer";
import MainNavigation from "../../components/Navigation/MainNavigation/MainNavigation";

const HomeLayout = ({ children }) => {
  return (
    <div className={classes.layout}>
      <Particle />
      <Header>
        <MainNavigation />
      </Header>
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
