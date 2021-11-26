import SideForm from "./SideForm";
import Slide from "react-reveal/Slide";
import { NavLink } from "react-router-dom";
import styles from "./styles.module.css";

const Description = () => {
  return (
    <div>
      <section className={styles.hero}>
        <div className={styles.hero__welcome}>
          <h1 className={styles.hero__welcome_main}>
            Sell crypto
            <span className={styles.color} style={{ marginLeft: "7px" }}>
              Instantly.
            </span>
          </h1>
          <p className={styles.hero__welcome_sub}>
            Padi<span className={styles.color}>Coins</span> is the easiest way
            to buy and sell crypto in Nigeria.
            <br /> No payment delay. No stress.
          </p>

          <NavLink
            to="/"
            className={`${styles.hero__welcome_button} ${styles.btn}`}
          >
            Get Started
          </NavLink>
        </div>
        <Slide right>
          <SideForm />
        </Slide>
      </section>
    </div>
  );
};

export default Description;
