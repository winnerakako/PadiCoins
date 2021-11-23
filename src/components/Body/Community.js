import React from "react";
import styles from "./styles.module.css";
const Community = () => {
  const scrollToTop = (e) => {
    e?.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className={styles.info}>
      <div className={styles.info__text}>
        <h2 className={styles.info__text_main}>
          Join Our Community to start selling Crypto!
        </h2>
        <p className={styles.info__text_sub}>
          Do you want to sell your cryptocurrencies immediately and receive
          payments instantly?
          <br />
          Skip those unnecessary registrations and let's get down to business!
        </p>
      </div>
      <a
        href="/"
        role="button"
        onClick={scrollToTop}
        className={`${styles.info__button} ${styles.btn}`}
      >
        GET STARTED
      </a>
    </section>
  );
};

export default Community;
