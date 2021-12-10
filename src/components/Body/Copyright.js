import React from "react";
import logo from "../../Images/padicon.png";
import styles from "./styles.module.css";

const Copyright = () => {
  return (
    <div className={styles.footer__copyright}>
      <p className={styles.footer__copyright_text}>
        <img src={logo} className={styles.copyright_img} alt="padicoins-logo" />
        <span>PadiCoins &copy; 2021</span>
       
      </p>

      <div className={styles.footer__copyright_social}>
        <a href="https://facebook.com/PadiCoins-102301852283964">
          {" "}
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com/padicoins">
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
