import React from "react";
import Section1 from "./homepageComponents/section1";
import Section2 from "./homepageComponents/section2";
import SlideshowHero from "./homepageComponents/slideshowHero";
import MasjidAppeal from "./homepageComponents/masjidAppeal";
import CongoAppeal from "./homepageComponents/congoAppeal";
import RamadhaanAppeal from "./homepageComponents/ramadhaanAppeal";

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <MasjidAppeal />
      <CongoAppeal />
      <RamadhaanAppeal />
      <SlideshowHero />
    </div>
  );
};

export default Home;
