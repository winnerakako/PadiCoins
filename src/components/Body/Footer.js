import { useState } from "react";
import { footer_links } from "../../Data/links";
import logo from "../../Images/padilogo.png";
import Notice from "./Notice";
import { Link } from "react-router-dom";
import padicon from "../../Images/padicon.png";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import styles from "./styles.module.css";

const Footer = () => {
  const [viewNotice, setViewNotice] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const noticeHandler = () => {
    setViewNotice(true);

    setTimeout(() => {
      setViewNotice(false);
    }, 2000);
  };
  return (
    <>
      <section className={styles.footer} id="contact">
        <div className={styles.div_image2}>
          <img src={padicon} alt="padicoin icon" />
        </div>
        <div className={styles.footer__cta}>
          <div className={styles.footer__cta_image}>
            <img src={logo} alt="logo-img" />
            <p className={styles.footer__cta_text}>
              PadiCoins is the easiest way to buy and sell crypto in Nigeria. No
              payment delay. No stress.
            </p>

            <Link
              to="/"
              className={`${styles.footer__cta_button} ${styles.btn}`}
            >
              Get Started
            </Link>
          </div>
        </div>
        {footer_links.map((f, i) => (
          <div className={styles.footer__developers} key={f.title}>
            <p className={styles.footer__developers_heading}>{f.title}</p>
            <ul className={styles.footer__developers_link}>
              {f.links.map((l) => (
                <li className={styles.footer__developers_list} key={l.name}>
                  {l.path ? (
                    l.path.includes("#") ? (
                      <a
                        href={l.path}
                        className={styles.footer__developers_list_item}
                      >
                        {l.name}
                      </a>
                    ) : (
                      <a
                        href={l.path}
                        className={styles.footer__developers_list_item}
                      >
                        {l.name}
                      </a>
                    )
                  ) : window.location.href.includes("calculator") &&
                    l.name === "Sell Crypto" ? (
                    <Link
                      to="/"
                      className={styles.footer__developers_list_item}
                    >
                      {l.name}
                    </Link>
                  ) : (
                    <span
                      className={styles.footer__developers_list_item}
                      onClick={() => {
                        l.name === "Sell Crypto"
                          ? scrollToTop()
                          : noticeHandler();
                      }}
                    >
                      {l.name}{" "}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}

        {viewNotice && <Notice message="Coming Soon" />}
      </section>
      <div className={styles.coming_soon_container}>
        <div></div>
        <FaGooglePlay />
        <p style={{ marginRight: "20px" }}>
          Coming soon on <br />
          Play store
        </p>
        <FaApple />
        <p>
          Coming soon on <br />
          App store
        </p>
      </div>
    </>
  );
};

export default Footer;
