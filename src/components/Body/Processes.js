import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";

import { processes } from "../../Data/details";

import { FcCheckmark } from "react-icons/fc";
import styles from "./styles.module.css";

const Processes = () => {
  return (
    <section className={styles.process}>
      <div className={styles.about_us_border_image}></div>

      <div style={{ padding: "2rem" }}>
        <Fade big left cascade>
          <h2 className={`${styles.process__heading} ${styles.underline}`}>
            How it works
          </h2>
        </Fade>
        <div className={styles.process__stage}>
          <div className={styles.hero__welcome}>
            <h1 className={`${styles.hero__welcome_main}`}>
              You're just 3 steps away!
            </h1>
          </div>
          <div className={styles.steps_container}>
            <ol>
              {processes.map((p, i) => (
                <Zoom delay={i * 1000} key={i}>
                  <li>
                    {p.title} <FcCheckmark className={styles.process_check} />
                  </li>
                </Zoom>
              ))}
            </ol>
          </div>
        </div>
        <p className={styles.process_easy}>Easy Peasy! Make your money!</p>
      </div>
      <div className={styles.about_us_border_image}></div>
    </section>
  );
};

export default Processes;

// function MediaCard({ p }) {
//   return (
//     <Card sx={{ maxWidth: 345 }} className={styles.processes_card}>
//       <CardMedia
//         component="img"
//         height="140"
//         image={p.image}
//         alt={p.title}
//         key={p.title}
//         clasName={styles.card_image}
//       />
//       <CardContent>
//         <Typography
//           gutterBottom
//           variant="h5"
//           component="div"
//           className={`${styles.process__stage_select_main} ${styles.color}`}
//         >
//           {p.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary">
//           {p.text}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// }
