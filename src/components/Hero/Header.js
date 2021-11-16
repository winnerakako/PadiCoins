import { useState } from "react";
import logo from "../../Images/logo.png";
import { header_links } from "../../Data/links";
import TrackWallet from "./TrackWallet";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";
import styles from "./styles.module.css";

const Header = () => {
  const [wallet, setWallet] = useState(false);
  const [menu, setMenu] = useState(false);
  const checkWallet = () => {
    setWallet(true);
  };
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
          <a href="/">
            <img src={logo} alt="logo-img" />
          </a>
        </div>

        <ul className={styles.nav__link}>
          {header_links.map((l) => (
            <li className={styles.nav__link_list} key={l.name}>
              <a
                href={l.path}
                onClick={l.path === "/#wallet" && checkWallet}
                className={`${styles.nav__link_list_item} ${
                  window.location.href.includes(l.path)
                    ? styles.underline
                    : null
                }`}
              >
                {l.name}
              </a>
            </li>
          ))}
        </ul>
        <a href="/" className={`${styles.nav__button} ${styles.btn}`}>
          Get Started
        </a>
        <FaBars onClick={() => setMenu(true)}/>
      </nav>
      {wallet && <TrackWallet close={() => setWallet(false)} />}
      {menu && <Menu close={() => setMenu(false)} />}
    </>
  );
};

export default Header;
