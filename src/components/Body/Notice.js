import styles from "./styles.module.css";

const Notice = ({ message }) => {
  return <p className={styles.notice_paragraph}>{message}</p>;
};

export default Notice;
