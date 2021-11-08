import React from "react";
import styles from "./styles.module.css";
const Information = () => {
  return (
    <section className={styles.info}>
      <div className={styles.info__text}>
        <h2 className={styles.info__text_main}>
          Join Our Community to start Buying, Selling and Trading Crypto!
        </h2>
        <p className={styles.info__text_sub}>
          BitMoney is the easiest way to buy and sell crypto in Nigeria. No
          payment delay. No stress.
        </p>
      </div>
      <a
        href="/"
        role="button"
        className={`${styles.info__button} ${styles.btn}`}
      >
        GET STARTED
      </a>
    </section>
  );
};

export default Information;
