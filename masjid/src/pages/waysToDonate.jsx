import React from "react";
import Waysto from "../components/waysCom/waysto";
import RegularLink from "../components/waysCom/regularLink";
import Bankdetails from "../components/waysCom/bankdetails";
import Footer from "../components/footer";

const WaysToDonate = () => {
  return (
    <div>
      <Waysto />
      <RegularLink />
      <Bankdetails />
      <Footer />
    </div>
  );
};

export default WaysToDonate;
