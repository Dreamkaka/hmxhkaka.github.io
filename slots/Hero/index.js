import HeroComp from "../../components/Hero";
import { heroActionsSel, heroDescSel, heroTitleSel, useSiteStore } from "../../store";
import { jsx as _jsx } from "react/jsx-runtime";
var Hero = function Hero() {
  var title = useSiteStore(heroTitleSel);
  var description = useSiteStore(heroDescSel);
  var actions = useSiteStore(heroActionsSel);
  return /*#__PURE__*/_jsx(HeroComp, {
    title: title,
    actions: actions,
    description: description
  });
};
export default Hero;