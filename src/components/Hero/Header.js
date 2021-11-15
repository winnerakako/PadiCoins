import React from "react";
import logo from "../../Images/logo.png";
import { header_links } from "../../Data/links";
import styles from "./styles.module.css";

const Header = () => {
  return (
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
              onClick={l.onClick}
              className={`${styles.nav__link_list_item} ${
                window.location.href.includes(l.path) ? styles.underline : null
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
    </nav>
  );
};

export default Header;
