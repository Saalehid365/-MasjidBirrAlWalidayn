import React from "react";
import Section1 from "./homepageComponents/section1";
import Section2 from "./homepageComponents/section2";
import SlideshowHero from "./homepageComponents/slideshowHero";
import MasjidAppeal from "./homepageComponents/masjidAppeal";
import CongoAppeal from "./homepageComponents/congoAppeal";
import RamadhaanAppeal from "./homepageComponents/ramadhaanAppeal";
import LibyaAppeal from "./homepageComponents/libyaAppeal";

const Home = () => {
  return (
    <div>
      <Section1 />
      <Section2 />
      <LibyaAppeal />
      <MasjidAppeal />
      <CongoAppeal />
      <RamadhaanAppeal />
      <SlideshowHero />
    </div>
  );
};

export default Home;
