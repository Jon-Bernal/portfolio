import React from "react";

import headshot from "../../../../assets/images/headshot.png";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.headshotBorder}>
        <img
          src={headshot}
          className={styles.headshot}
          alt="pencil style drawing of Jon"
        />
      </div>
      <div className={styles.content}>
        <h1>
          <span style={{ fontWeight: "bold" }}>Jon</span> Bernal
        </h1>
        <p>
          I grew up in Northern Virginia and now live in Washington State as a
          Software Engineer at{" "}
          <a className={styles.link} href="https://nowigence.com">
            Nowigence Inc
          </a>
          . I have significant experience with Web technologies, building and
          securing APIs, developing performant and scalable backends, and
          putting together frontends to give users a phenomenal user experience.
        </p>
        <p>
          In my spare time, I enjoy reading, rock climbing, hiking, playing with
          new linux distros and more CODING! When not hard at work, you'll find
          me spending time with my wife and three rabbits, or happily lost in
          the woods somewhere.
        </p>
      </div>
    </div>
  );
};

export default About;
