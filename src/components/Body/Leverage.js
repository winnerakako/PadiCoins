import React from "react";
import styles from "./styles.module.css";
import { leverage } from "../../Data/details";

const Leverage = () => {
  return (
    <>
      <h2 className={`${styles.leverage__heading}  ${styles.underline}`}>
        Our Leverage
      </h2>
      <div className={styles.leverage_us}>
        <div className={styles.leverage_us__about}>
          <p className={styles.leverage_us__about_main}>ABOUT US</p>
          <p className={styles.leverage_us__about_sub}>
            Buy, sell and trade crypto in minutes.
          </p>
        </div>
        <div className={styles.leverage_us__text}>
          <p className={styles.leverage_us__text_sub}>
            Padi<span className={styles.color}> Coins</span> is the easiest way
            to buy and sell crypto in Nigeria. No payment delay. No stress.
          </p>
        </div>
      </div>
      <div className={styles.leverage__leverage}>
        {leverage.map((l) => (
          <div className={styles.leverage__leverage_trust}>
            <div className={styles.leverage__leverage_trust_img}>
              <img src={l.image} alt="badge-img" />
            </div>
            <p
              className={`${styles.leverage__leverage_trust_main} ${styles.color}`}
            >
              {l.title}
            </p>
            <p className={styles.leverage__leverage_trust_sub}>{l.text}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Leverage;
