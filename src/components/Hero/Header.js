import { useState } from "react";
import logo from "../../Images/paditransparent.png";
import { header_links } from "../../Data/links";
import TrackWallet from "./TrackWallet";
import Menu from "./Menu";
import { FaBars } from "react-icons/fa";
import styles from "./styles.module.css";

const Header = () => {
  const [wallet, setWallet] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.nav__logo}>
            <img src={logo} alt="logo-img" className = {styles.nav__logo_image} />
        </div>

        <ul className={styles.nav__link}>
          {header_links.map((l) => (
            <li className={styles.nav__link_list} key={l.name}>
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
            </li>
          ))}
            <span onClick={() => setWallet(true)} style = {{fontWeight:"500", cursor:"pointer"}}>Wallet</span>
        </ul>
        <a href="/" className={`${styles.nav__button} ${styles.btn}`}>
          Get Started
        </a>
        <FaBars onClick={() => setMenu(true)} className={styles.menuBar} />
      </nav>
      {wallet && <TrackWallet close={() => setWallet(false)} />}
      {menu && <Menu close={() => setMenu(false)} />}
    </>
  );
};

export default Header;
