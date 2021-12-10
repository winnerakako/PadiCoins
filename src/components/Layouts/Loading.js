import { useEffect } from "react";
import styles from "../../components/Body/styles.module.css";
import padicoin from "../../Images/padicon.png";

const Loading = () => {
  useEffect(() => {
    console.log("loading");
  }, []);
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div className="overall_overlay"></div>
      <div className="background">
        Loading...
        {/* <span className={`${styles.bubble} ${styles.bubble_1}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_2}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_3}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_4}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_5}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_6}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_7}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_8}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_9}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_1}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_1}`}></span>
        <span className={`${styles.bubble} ${styles.bubble_1}`}></span> */}
        <div className={`${styles.faq__animation} ${styles.fade_1}`}>
          <img src={padicoin} alt="padicoin_svg" />
        </div>
        <div className={`${styles.faq__animation} ${styles.fade_2}`}>
          <img src={padicoin} alt="padicoin_svg" />
        </div>
        <div className={`${styles.faq__animation} ${styles.fade_3}`}>
          <img src={padicoin} alt="padicoin_svg" />
        </div>
        <div className={`${styles.faq__animation} ${styles.fade_4}`}>
          <img src={padicoin} alt="padicoin_svg" />
        </div>
        <div className={`${styles.faq__animation} ${styles.fade_5}`}>
          <img src={padicoin} alt="padicoin_svg" />
        </div>
        <div className={`${styles.faq__animation} ${styles.fade_6}`}>
          <img src={padicoin} alt="padicoin_svg" />
        </div>
        <div className={`${styles.faq__animation} ${styles.fade_7}`}>
          <img src={padicoin} alt="padicoin_svg" />
        </div>
        <div className={`${styles.faq__animation} ${styles.fade_8}`}>
          <img src={padicoin} alt="padicoin_svg" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
