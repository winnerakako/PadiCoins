import { useState } from "react";
import logo from "../../Images/paditransparent.png";
import { header_links } from "../../Data/links";
import TrackWallet from "./TrackWallet";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";
import { NavLink, Link } from "react-router-dom";
import styles from "./styles.module.css";

const Header = ({ background = "#FEF2EC" }) => {
  const [wallet, setWallet] = useState(false);
  const [menu, setMenu] = useState(false);
  const rateBtc = "555";
  const rateEth = "549";

  return (
    <>
      <div style={{ width: "100%", zIndex: "2000", position: "fixed" }}>
        <div className={styles.marquee}>
          <p className={styles.marquee_text}>
            <span>
              Today's Rate: Bitcoin(BTC) @ &#8358;{rateBtc}/$ &nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ethereum(ETH) @ &#8358;{rateEth}/$
            </span>
          </p>
          <p className={`${styles.marquee_text} ${styles.marquee_text2}`}>
            {" "}
            <span>
              Today's Rate: Bitcoin(BTC) @ &#8358;{rateBtc}/$
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Ethereum(ETH) @ &#8358;{rateEth}/${" "}
            </span>
          </p>
        </div>
        <nav className={styles.nav} style={{ background: background }}>
          <Link to="/" className={styles.nav__logo}>
            <img src={logo} alt="logo-img" className={styles.nav__logo_image} />
          </Link>

          <ul className={styles.nav__link}>
            {header_links.map((l) => (
              <li className={styles.nav__link_list} key={l.name}>
                {window.location.href.includes("terms-and-conditions") ||
                window.location.href.includes("privacy-policy") ? (
                  <NavLink
                    to={l.path}
                    className={`${styles.nav__link_list_item} ${
                      window.location.href.includes(l.path)
                        ? styles.underline
                        : null
                    }`}
                  >
                    {l.name}
                  </NavLink>
                ) : (
                  <a
                    href={l.path}
                    className={`${styles.nav__link_list_item} ${
                      window.location.href.includes(l.path)
                        ? styles.underline
                        : null
                    }`}
                  >
                    {l.name}
                  </a>
                )}
              </li>
            ))}
            <span
              onClick={() => setWallet(true)}
              style={{ fontWeight: "500", cursor: "pointer" }}
            >
              Track Transaction
            </span>
          </ul>
          <Link to="/calculator" className={`${styles.nav__button} ${styles.btn}`}>
            Calculator
          </Link>
          <FaBars onClick={() => setMenu(true)} className={styles.menuBar} />
        </nav>
      </div>
      {wallet && <TrackWallet close={() => setWallet(false)} />}
      {menu && <Menu close={() => setMenu(false)} />}
    </>
  );
};

export default Header;
