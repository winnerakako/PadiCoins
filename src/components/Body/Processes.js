import React from "react";
import styles from "./styles.module.css";
import { processes } from "../../Data/details";

const Processes = () => {
  return (
    <section className={styles.process}>
      <h2 className={`${styles.process__heading} ${styles.underline}`}>
        How it works
      </h2>
      <div className={styles.process__stage}>
        {processes.map((p) => (
          <div className={styles.process__stage_select}>
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
        ))}
      </div>
    </section>
  );
};

export default Processes;
