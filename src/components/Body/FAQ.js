import { frequentQuestions } from "../../Data/details";
import questions from "../../Images/questions.png";
import Fade from "react-reveal/Fade";
import Bounce from "react-reveal/Bounce";
import styles from "./styles.module.css";
const FAQ = () => {
  const toggleHandler = (i) => {
    const accordion = document.getElementsByClassName(
      styles.faq__question_container
    );
    accordion[i].classList.toggle(styles.active);
  };
  return (
    <section className={styles.faq} id="faq">
      <div className={styles.faq__image}>
        <img src={questions} alt="questions-img" />
      </div>

      <div className={styles.faq__question}>
        <div className={styles.faq__question_title}>
          <Fade right cascade>
            <h2>Frequently Asked Questions</h2>
          </Fade>
          <a href="/" className={styles.underline}>
            View All
          </a>
        </div>
        {frequentQuestions.map((q, i) => (
          <Bounce bottom cascade key={i}>
            <div
              className={styles.faq__question_container}
              onClick={() => toggleHandler(i)}
              key={q.title}
            >
              <p className={styles.faq__question_container_label}>{q.title}</p>
              <p className={styles.faq__question_container_answer}>{q.text}</p>
            </div>
          </Bounce>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
