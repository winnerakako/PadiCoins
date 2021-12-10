import Slide from "react-reveal/Slide";
import styles from "./styles.module.css";
import transfer from "../../Images/transfer_money.png";
import confirm from "../../Images/logo_bitcoin.png";
import crypto from "../../Images/clock.jfif";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
// import crypto from "../../Images/crypto_portfolio.png";
const MoreInfo = () => {
  return (
    <>
      <div className={styles.about_us_border_image}></div>
      
      <section className={styles.cta}>
        {/* <div className={styles.process_avatar}>
          <img src={crypto} alt="transfer" />
        </div> */}
        {/* <span className={`${styles.bubble} ${styles.bubble_1}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_2}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_3}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_4}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_5}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_6}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_7}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_8}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_9}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_1}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_1}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_1}`}></span> */}
        <div>
          <h1 className={`${styles.cta__heading} ${styles.underline} `}>
            {/* Sell Crypto <span className={styles.color}> Instantly.  */}
            So, What are you waiting for?
            {/* </span> */}
          </h1>
          <h4 className={styles.cta__sub}>
            {/* Padi<span className={styles.color}>Coins</span> is the easiest way to
          buy and sell crypto in Nigeria. <br />
          No payment delay. No stress. */}
            No dulling. Start selling. You are closer to your money than you
            think!
          </h4>
          <button
            className={`${styles.cta__button} ${styles.btn}`}
            onClick={scrollToTop}
          >
            I WANT TO SELL
          </button>
        </div>
        {/* <div className={styles.cta_wave}></div> */}
      </section>
      <div className={styles.about_us_border_image}></div>
    </>
  );
};

export default MoreInfo;
