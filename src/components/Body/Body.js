import React from "react";
import Leverage from "./Leverage";
import Processes from "./Processes";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Copyright from "./Copyright";
import MoreInfo from "./MoreInfo";
import Community from "./Community";
import styles from "./styles.module.css";

const Section = () => {
  return (
    <div id="about">
      <Leverage />
      {/* <section> */}
      <Processes />
      {/* </section> */}
      <Community />
      <FAQ />
      <MoreInfo />
      <Footer />

      <Copyright />
    </div>
  );
};

export default Section;
