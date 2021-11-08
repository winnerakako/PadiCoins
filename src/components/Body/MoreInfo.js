import React from "react";
import styles from "./styles.module.css";

const MoreInfo = () => {
  return (
    <section className={styles.cta}>
      <h1 className={`${styles.cta__heading} ${styles.underline}`}>
        Buy and Sell Crypto <span className={styles.color}> Instantly. </span>
      </h1>
      <p className={styles.cta__sub}>
        Padi<span className={styles.color}>Coins</span> is the easiest way to
        buy and sell crypto in Nigeria. <br />
        No payment delay. No stress.
      </p>
      <a href="/" className={`${styles.cta__button} ${styles.btn}`}>
        GET STARTED
      </a>
      <div className={styles.cta_wave}></div>
    </section>
  );
};

export default MoreInfo;
