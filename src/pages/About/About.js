import jonImage from "../../images/Portfolio-headshot-pencil-small.png";
import styles from "./About.module.css";

export function About() {
  return (
    <div>
      <h2>About Me</h2>
      <img
        src={jonImage}
        className={styles.headshot}
        alt={"Jon Bernal, web dev extraordinaire"}
      />
    </div>
  );
}
