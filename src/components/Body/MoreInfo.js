import styles from "./styles.module.css";
const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
const MoreInfo = () => {
  return (
    <>
      <div className={styles.about_us_border_image}></div>

      <section className={styles.cta}>
        <div>
          <h1 className={`${styles.cta__heading} ${styles.underline} `}>
            So, What are you waiting for?
          </h1>
          <h4 className={styles.cta__sub}>
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
      </section>
      <div className={styles.about_us_border_image}></div>
    </>
  );
};

export default MoreInfo;
