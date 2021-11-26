import { useState } from "react";
import TrackWallet from "./TrackWallet";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Menu = ({ close }) => {
  const [wallet, setWallet] = useState(false);
  return (
    <div className={styles.menu}>
      <p className={styles.menu_cancel} onClick={close}>
        X
      </p>
      <NavLink to="/" className={styles.menu_links}>
        Home
      </NavLink>
      <NavLink
        to="/"
        className={styles.menu_links}
        onClick={(e) => {
          e.preventDefault();
          setWallet(true);
        }}
      >
        Wallet
      </NavLink>
      <NavLink to="/#contact" className={styles.menu_links}>
        Contact
      </NavLink>
      {/* <a href="/#contact" className={styles.menu_links}>
        Log In
      </a>
      <a href="/#contact" className={styles.menu_links}>
        Sign Up
      </a> */}
      {wallet && <TrackWallet close={() => setWallet(false)} />}
    </div>
  );
};

export default Menu;
