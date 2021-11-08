import React from "react";
import Description from "./Description";
import Header from "./Header";
import styles from "./styles.module.css";

const Hero = () => {
  return (
    <>
      <div className={styles.wave}></div>
      <Header />
      <Description />
    </>
  );
};

export default Hero;
