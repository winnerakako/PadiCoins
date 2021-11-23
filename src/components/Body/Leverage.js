import React from "react";
import styles from "./styles.module.css";
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import { leverage } from "../../Data/details";

const Leverage = () => {
  return (
    <>
    <Fade left big cascade >
      <h2 className={`${styles.leverage__heading}  ${styles.underline}`}>
        Our Leverage
      </h2>
      </Fade>
      <div className={styles.leverage_us}>
        <div className={styles.leverage_us__about}>
          <p className={styles.leverage_us__about_main}>ABOUT US</p>
          <p className={styles.leverage_us__about_sub}>
            Sell crypto in minutes.
          </p>
        </div>
       
        <div className={styles.leverage_us__text}>
          <p className={styles.leverage_us__text_sub}>
            Padi<span className={styles.color}>Coins</span> exists to simplify
            the process of trading cryptocurrencies in Nigeria.
          </p>
          <p>
            As an exchange platform with a vision to see almost every Nigerian
            benefitting from the enormous opportunities of cryptocurrencies, we
            are here to make the process easy, fast and seamless.{" "}
          </p>

          <p>
            Our rates are comparatively the best in Nigeria as we strive to
            provide the quickest and most reliable crypto trading experiences to
            our users.
          </p>
        </div>
 
      </div>
      <div className={styles.leverage__leverage}>
        {leverage.map((l, i) => (
           <Zoom top delay = {i*1000}>
          <div className={styles.leverage__leverage_trust} key={l.title}>
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
          </Zoom>
        ))}
      </div>
    </>
  );
};

export default Leverage;
