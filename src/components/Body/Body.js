import React from "react";
import styles from "./styles.module.css";
import Leverage from "./Leverage";
import Processes from "./Processes";
import FAQ from "./FAQ";
import Footer from "./Footer";
import Copyright from "./Copyright";
import MoreInfo from "./MoreInfo";
import Information from "./Information";

const Section = () => {
  return (
    <div id="about">
      <section className={styles.leverage}>
        <Leverage />
        <Processes />
      </section>
      <Information />
      <FAQ />
      <MoreInfo />
      <Footer />
      <Copyright />
    </div>
  );
};

export default Section;
