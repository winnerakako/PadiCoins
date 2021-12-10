import { useState, useEffect } from "react";
import SideForm from "./SideForm";
import Slide from "react-reveal/Slide";
import {
  FaBitcoin,
  FaEthereum,
  FaHandPointDown,
  FaHandPointRight,
} from "react-icons/fa";
import styles from "./styles.module.css";
let t;
const catchyPhrases = [
  "Sell Crypto Easily ",
  "No Hassle, No Stress",
  "No Sign Up Needed",
  "Get Paid Instantly",
];

const Description = ({ data }) => {
  const [text, setText] = useState("Sell Crypto Easily");
  const [appearing, setAppearing] = useState(false);

  useEffect(() => {
    t = setInterval(() => {
      setText(catchyPhrases[Math.round(Math.random() * 3)]);
      setAppearing(true);
      setTimeout(() => {
        setAppearing(false);
      }, 3000);
    }, 5000);

    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <div>
      <div className={styles.hero}>
        <div className={styles.hero__welcome}>
          <h1
            className={`${appearing && styles.appearing} ${
              styles.hero__welcome_main
            }`}
          >
            {text}
          </h1>

          <p className={styles.hero__welcome_sub}>
            Padi<span className={styles.color}>Coins</span> is the easiest way
            to buy and sell crypto in Nigeria.
            <br /> No payment delay. No stress.
          </p>

          <p className={styles.supported_crypto_container}>
            Supported:{" "}
            <span className={styles.supported_crypto}>
              <FaBitcoin /> <FaEthereum style={{ color: "purple" }} />
            </span>{" "}
          </p>

          <button
            // to="/"
            className={`${styles.hero__welcome_button} ${styles.btn}`}
          >
            Let's go!
            <span>
              <FaHandPointRight className={styles.hero_pointer_right} />{" "}
              <FaHandPointDown className={styles.hero_pointer_down} />{" "}
            </span>
          </button>
        </div>
        <Slide right>
          <SideForm data={data} />
        </Slide>
      </div>
    </div>
  );
};

export default Description;
