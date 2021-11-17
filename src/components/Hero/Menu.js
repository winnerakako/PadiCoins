import { useState } from "react";
import TrackWallet from "./TrackWallet";
import styles from "./styles.module.css";

const Menu = ({ close }) => {
  const [wallet, setWallet] = useState(false);
  return (
    <div className={styles.menu}>
      <p className={styles.menu_cancel} onClick={close}>
        X
      </p>
      <a
        href="/#wallet"
        className={styles.menu_links}
        onClick={() => setWallet(true)}
      >
        Wallet
      </a>
      <a href="/#contact" className={styles.menu_links}>
        Contact
      </a>
      <a href="/#contact" className={styles.menu_links}>
        Log In
      </a>
      <a href="/#contact" className={styles.menu_links}>
        Sign Up
      </a>
      {wallet && <TrackWallet close={() => setWallet(false)} />}
    </div>
  );
};

export default Menu;
