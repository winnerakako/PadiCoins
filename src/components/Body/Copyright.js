import React from "react";
import styles from "./styles.module.css";

const Copyright = () => {
  return (
    <div className={styles.footer__copyright}>
      <p className={styles.footer__copyright_text}>BitMoney &copy; 2021</p>

      <div className={styles.footer__copyright_social}>
        <a href="/">
          {" "}
          <i className="fab fa-facebook"></i>
        </a>
        <a href="/">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="/">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  );
};

export default Copyright;
