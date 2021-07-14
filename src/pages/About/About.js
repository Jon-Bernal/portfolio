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
import graphql from "../../images/graphql-icon.svg";

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
      <div className={styles.techSection}>
        <div className={styles.techItem}>
          <img src={html} className={styles.techLogo} alt={"HTML5"} />
          <p>HTML5</p>
        </div>
        <div className={styles.techItem}>
          <img src={css} className={styles.techLogo} alt={"CSS3"} />
          <p>CSS3</p>
        </div>
        <div className={styles.techItem}>
          <img
            src={javascript}
            className={styles.techLogo}
            alt={"JavaScript"}
          />
          <p>Javascript</p>
        </div>
        <div className={styles.techItem}>
          <img src={express} className={styles.techLogo} alt={"Express.js"} />
          <p>Express.js</p>
        </div>
        <div className={styles.techItem}>
          <img src={fastify} className={styles.techLogo} alt={"Fastify"} />
          <p>Fastify</p>
        </div>
        <div className={styles.techItem}>
          <img src={mongodb} className={styles.techLogo} alt={"MongoDB"} />
          <p>MongoDB</p>
        </div>
        <div className={styles.techItem}>
          <img src={node} className={styles.techLogo} alt={"Node.js"} />
          <p>Node.js</p>
        </div>
        <div className={styles.techItem}>
          <img src={rest} className={styles.techLogo} alt={"RESTful APIs"} />
          <p>RESTful API</p>
        </div>
        <div className={styles.techItem}>
          <img src={semantic} className={styles.techLogo} alt={"Semantic UI"} />
          <p>Semantic UI</p>
        </div>
        <div className={styles.techItem}>
          <img src={graphql} className={styles.techLogo} alt={"graphql"} />
          <p>GraphQL</p>
        </div>
      </div>
    </div>
  );
}
