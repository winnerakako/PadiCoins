import { frequentQuestions } from "../../Data/details";
import questions from "../../Images/questions.png";
import styles from "./styles.module.css";
const FAQ = () => {
  const toggleHandler = (i) => {
    const accordion = document.getElementsByClassName(
      styles.faq__question_container
    );
    accordion[i].classList.toggle(styles.active);
  };
  return (
    <section className={styles.faq}>
      <div className={styles.faq__image}>
        <img src={questions} alt="questions-img" />
      </div>
      <div className={styles.faq__question}>
        <div className={styles.faq__question_title}>
          <h2>Frequently Asked Questions</h2>
          <a href="/" className={styles.underline}>
            View All
          </a>
        </div>
        {frequentQuestions.map((q, i) => (
          <div
            className={styles.faq__question_container}
            onClick={() => toggleHandler(i)}
            key = {q.title}
          >
            <p className={styles.faq__question_container_label}>{q.title}</p>
            <p className={styles.faq__question_container_answer}>{q.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
