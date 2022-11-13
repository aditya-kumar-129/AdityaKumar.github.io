import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { DARK_THEME_PARTICLES, LIGHT_THEME_PARTICLES } from "./particleType";
import { useThemeContext } from "../../../hooks/themeHook/themeHook";
import { useCallback } from "react";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log();
  }, []);

  const { dark } = useThemeContext();

  const particles = dark ? DARK_THEME_PARTICLES : LIGHT_THEME_PARTICLES;

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particles}
    />
  );
};

export default Particle;
// https://github.com/matteobruni/tsparticles/blob/main/websites/particles.js.org/presets/star.json
