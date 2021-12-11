import { useState } from "react";
import TrackWallet from "./TrackWallet";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Menu = ({ close }) => {
  const [wallet, setWallet] = useState(false);
  const [slideback, setSlideback] = useState(false);

  const slidingOut = () => {
    setSlideback(true);
    setTimeout(() => {
      close();
    }, 480);
  };

  return ReactDOM.createPortal(
    <>
      <div className={styles.overlay_gray} onClick={slidingOut}></div>
      <div className={`${styles.menu} ${slideback && styles.slidingOut}`}>
        <p className={styles.menu_cancel} onClick={slidingOut}>
          X
        </p>
        <Link to="/" className={styles.menu_links}>
          Home
        </Link>
        <a
          href="/"
          className={styles.menu_links}
          onClick={(e) => {
            e.preventDefault();
            setWallet(true);
          }}
        >
          Track Transaction
        </a>
        <Link to="/calculator" className={styles.menu_links}>
          Calculator
        </Link>
        <a href="/#contact" className={styles.menu_links}>
          Contact
        </a>

        {wallet && <TrackWallet close={() => setWallet(false)} />}
      </div>
    </>,
    document.getElementById("modal")
  );
};

export default Menu;
