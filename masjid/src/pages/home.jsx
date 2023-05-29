import React from "react";
import Hero from "../components/homeCom/hero";
import Regular from "../components/homeCom/regular";
import Build from "../components/homeCom/build";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="w-screen">
      <Hero />
      <Regular />
      <Build />
      <Footer />
    </div>
  );
};

export default Home;
