import jonImage from "../../images/Portfolio-headshot-pencil-small.png";
import styles from "./About.module.css";

import css from "../../images/css3.png";
import express from "../../images/express-js.png";
import html from "../../images/html5.png";
import javascript from "../../images/javascript.png";
import mongodb from "../../images/mongodb.png";
import node from "../../images/nodejs.png";
import rest from "../../images/restfulAPI.png";
import semantic from "../../images/semantic-ui.png";
import fastify from "../../images/fastify.png";

export function About() {
  return (
    <div>
      <h2>About Me</h2>
      <p>I'm a fullstack web developer based in Herndon, Va</p>

      <p>
        I enjoy solving complex problems and creating intuitive layouts. When
        I'm not coding, pushing pixels or studying programming, I can be found
        rock climbing, hiking, reading, trail running or helping rehabilitate
        rabbits.
      </p>
      <img
        src={jonImage}
        className={styles.headshot}
        alt={"Jon Bernal, web dev extraordinaire"}
      />

      <hr />

      <h2>Technologies I have experience working with</h2>
      <img src={html} className={styles.skill} alt={"HTML5"} />
      <img src={css} className={styles.skill} alt={"CSS3"} />
      <img src={javascript} className={styles.skill} alt={"JavaScript"} />
      <img src={express} className={styles.skill} alt={"Express.js"} />
      <img src={fastify} className={styles.skill} alt={"Fastify"} />
      <img src={mongodb} className={styles.skill} alt={"MongoDB"} />
      <img src={node} className={styles.skill} alt={"Node.js"} />
      <img src={rest} className={styles.skill} alt={"RESTful APIs"} />
      <img src={semantic} className={styles.skill} alt={"Semantic UI"} />
    </div>
  );
}
