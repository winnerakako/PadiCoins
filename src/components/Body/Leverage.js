import styles from "./styles.module.css";
import Fade from "react-reveal/Fade";
import Advantages from "./Advantages";
import { FaRegKissWinkHeart } from "react-icons/fa";
import padicon from "../../Images/padicon.png";

const Leverage = () => {
  return (
    <div>
      <div className={styles.body_color}>
        <div className={styles.about_us_border_image}></div>
        <Fade left big cascade>
          <h2 className={`${styles.leverage__heading}  ${styles.underline}`}>
            Our Leverage
          </h2>
        </Fade>
        <section className={styles.leverage_us}>
          <div className={styles.leverage_us__about}>
            <h2 className={styles.leverage_us__about_main}>ABOUT US</h2>
            <p className={styles.leverage_us__about_sub}>
              Sell crypto in minutes.
            </p>
            <p className={styles.leverage_us__about_sub_light}>
              As an exchange platform with a vision to see almost every Nigerian
              benefitting from the enormous opportunities of cryptocurrencies,
              we are here to make the process easy, fast and seamless.
            </p>
            <div className={styles.div_image}>
              <img src={padicon} alt="padicoin icon" />
            </div>
          </div>

          <div className={styles.leverage_us__text}>
            <h1 className={`${styles.different_font} ${styles.color}`}>
              WHY CHOOSE US?{" "}
            </h1>
            <p className={styles.leverage_us__text_sub}>
              Padi<span className={styles.color}>Coins</span> exists to simplify
              the selling of cryptocurrencies in Nigeria.
            </p>

            <p>
              With us, you are guaranteed:
              <ul className={styles.about_us_ul}>
                <li>No extra charges</li>
                <li>No payment delay</li>
                <li>No scam</li>
              </ul>
              <p style={{ marginTop: "20px" }}>
                ....We also give sweet rates.{" "}
                <FaRegKissWinkHeart className={styles.kissface} />
              </p>
              {/* As an exchange platform with a vision to see almost every Nigerian
            benefitting from the enormous opportunities of cryptocurrencies, we
            are here to make the process easy, fast and seamless.{" "} */}
            </p>

            {/* <p>
            Our rates are comparatively the best in Nigeria as we strive to
            provide the quickest and most reliable crypto trading experiences to
            our users.
          </p> */}
          </div>
        </section>
      </div>
      <div className={styles.about_us_border_image}></div>

      <Advantages />
    </div>
  );
};

export default Leverage;
