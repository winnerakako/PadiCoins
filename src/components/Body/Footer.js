import {useState} from "react";
import { footer_links } from "../../Data/links";
import logo from "../../Images/padilogo.png";
import Notice from "./Notice" 

import styles from "./styles.module.css";



const Footer = () => {
  const [viewNotice, setViewNotice] = useState(false)


const scrollToTop = ()=> {
  window.scrollTo({top:0, behavior:"smooth"})
}
  const noticeHandler = ()=> {
    setViewNotice(true)
    setTimeout(() => {
      setViewNotice(false)
    }, 2000);
  }
  return (
    <section className={styles.footer} id = "contact">
      <div className={styles.footer__cta}>
        <div className={styles.footer__cta_image}>
          <img src={logo} alt="logo-img" />
          <p className={styles.footer__cta_text}>
           PadiCoins is the easiest way to buy and sell crypto in Nigeria. No
            payment delay. No stress.
          </p>
          <a href="/" className={`${styles.footer__cta_button} ${styles.btn}`}>
            Get Started
          </a>
        </div>
      </div>
      {footer_links.map((f, i) => (
   
        <div className={styles.footer__developers} key={f.title}>
          <p className={styles.footer__developers_heading} >
            {f.title}
          </p>
          <ul className={styles.footer__developers_link}>
            {f.links.map((l) => (
              <li className={styles.footer__developers_list} key={l.name}>
              {l.path ?  <a
                  href={l.path}
                  className={styles.footer__developers_list_item}
                >
                  {l.name}
                </a> :
                <p className={styles.footer__developers_list_item} onClick = {()=> {
                  l.name ===  "Sell Crypto" ? scrollToTop() : 
                  noticeHandler()
              }} style ={{fontSize:"smaller", cursor:"pointer"}}>{l.name} </p>
                }
               
              </li>
            ))}
          </ul>
        </div>
     
      ))}
      {viewNotice && <Notice message = "Coming Soon" />}
    </section>
  );
};

export default Footer;
