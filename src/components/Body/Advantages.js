import { useEffect, useState } from "react";
import Zoom from "react-reveal/Zoom";
import { leverage } from "../../Data/details";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import SwipeableViews from "react-swipeable-views";

import styles from "./styles.module.css";
let t;

const Advantages = () => {
  const [text, setText] = useState(leverage[0]);
  const [appearing, setAppearing] = useState(false);

  const randomize = () => {
    t = setInterval(() => {
      let random = Math.floor(Math.random() * 3);

      setText(leverage[random]);

      setAppearing(true);
      setTimeout(() => {
        setAppearing(false);
      }, 6000);
    }, 8000);
  };

  useEffect(() => {
    randomize();

    return () => {
      clearInterval(t);
    };
  }, []);

  return (
    <div
      className={styles.leverage__leverage}
      style={{ backgroundImage: "url(" + text.image + ")" }}
    >
      <div className={styles.overlay}></div>
      {/* <div className = {styles.advantages_text}>

        </div> */}

      {/* <AiOutlineArrowLeft className={styles.arrow_left} /> */}
      <SwipeableViews>
        <div
          className={`${appearing && styles.appearing} ${
            styles.leverage__leverage_trust
          }`}
          key={text.title}
        >
          {/* <div className={styles.leverage__leverage_trust_img}>
          <img src={text.image} alt="badge-img" />
        </div> */}
          <Zoom>
            <h1
              className={`${styles.leverage__leverage_trust_main}  ${styles.underline}`}
            >
              {text.title.toUpperCase()}
            </h1>
          </Zoom>
          <p className={styles.leverage__leverage_trust_sub}>{text.text}</p>
          {/* <span className={styles.dot}>
            {leverage.map((t, j) => (
              <GiPlainCircle style={{ color: i === j ? "#f1590e" : "white" }} />
            ))}
          </span> */}
        </div>
      </SwipeableViews>
      {/* <span className={styles.arrow_right}>
        <BsFillArrowRightCircleFill />
      </span> */}
      <span className={styles.arrow_right} onClick={randomize}>
        <BsFillArrowRightCircleFill />
      </span>
    </div>
  );
};

export default Advantages;
