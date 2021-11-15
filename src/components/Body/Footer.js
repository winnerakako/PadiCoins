import React from "react";
import { footer_links } from "../../Data/links";
import logo from "../../Images/logo.png";
import styles from "./styles.module.css";
const Footer = () => {
  return (
    <section className={styles.footer} id = "contact">
      <div className={styles.footer__cta}>
        <div className={styles.footer__cta_image}>
          <img src={logo} alt="logo-img" />
          <p className={styles.footer__cta_text}>
            BitMoney is the easiest way to buy and sell crypto in Nigeria. No
            payment delay. No stress.
          </p>
          <a href="/" className={`${styles.footer__cta_button} ${styles.btn}`}>
            Get Started
          </a>
        </div>
      </div>
      {footer_links.map((f) => (
        <div className={styles.footer__developers} key={f.title}>
          <p className={styles.footer__developers_heading} >
            {f.title}
          </p>
          <ul className={styles.footer__developers_link}>
            {f.links.map((l) => (
              <li className={styles.footer__developers_list} key={l.name}>
                <a
                  href={l.path}
                  className={styles.footer__developers_list_item}
                >
                  {l.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Footer;
