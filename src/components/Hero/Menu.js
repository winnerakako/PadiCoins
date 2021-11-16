import React from "react";
import styles from "./styles.module.css";

const Menu = ({ close }) => {
  return (
    <div className={styles.menu}>
      <p className={styles.menu_cancel} onClick={close}>
        X
      </p>
      <a href="/" activeClassName={styles.peach} className={styles.menu_links}>
        Home
      </a>
      <a href="/#wallet" className={styles.menu_links}>
        Wallet
      </a>
      <a href="/#contact" className={styles.menu_links}>
        Contact
      </a>
    </div>
  );
};

export default Menu;
