import React from "react";
import styles from "./styles.module.css";
import Fade from "react-reveal/Fade"
import Zoom from "react-reveal/Zoom"
import { processes } from "../../Data/details";

const Processes = () => {
  return (
    <section className={styles.process}>
    <Fade big left cascade >
      <h2 className={`${styles.process__heading} ${styles.underline}`}>
        How it works
      </h2>
      </Fade>
      <div className={styles.process__stage}>
        {processes.map((p, i) => (
          <Zoom delay={(i)*1000}>
          <div className={styles.process__stage_select} key = {p.title}>
            <div className={styles.process__stage_select_img}>
              <img src={p.image} alt={p.title} />
            </div>
            <p
              className={`${styles.process__stage_select_main} ${styles.color}`}
            >
              {p.title}
            </p>
            <p className={styles.process__stage_select_sub}>{p.text}</p>
          </div>
          </Zoom>
        ))}
      </div>
    </section>
  );
};

export default Processes;
