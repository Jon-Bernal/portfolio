import jonImage from "../../../images/Portfolio-headshot-pencil-small.png";
import styles from "./About.module.scss";

// import css from "../../images/css3.png";
// import express from "../../images/express-js.png";
// import html from "../../images/html5.png";
// import javascript from "../../images/javascript.png";
// import mongodb from "../../images/mongodb.png";
// import node from "../../images/nodejs.png";
// import rest from "../../images/restfulAPI.png";
// import semantic from "../../images/semantic-ui.png";
// import fastify from "../../images/fastify.png";
// import graphql from "../../images/graphql-icon.svg";

import { FaGrinWink } from "react-icons/fa";

export function About() {
  return (
    <main className={styles.container}>
      {/* ======================= New Stuff ==================== */}
      {/* Penciled image of me here */}

      <h3>Hello! My name is Jon Bernal.</h3>

      <img
        src={jonImage}
        className={styles.headshot}
        alt={"Jon Bernal, web dev extraordinaire"}
      />

      <p>
        I grew up in Northern Virginia and now live in Washington State as a
        Software Engineer at{" "}
        <a className={styles.link} href="https://nowigence.com">
          Nowigence Inc
        </a>
        . I have significant experience with Web technologies, building and
        securing APIs, developing performant and scalable backends, and putting
        together frontends to give users a phenomenal user experience.
      </p>
      <p>
        In my spare time, I enjoy reading, rock climbing, hiking, playing with
        new linux distros and more CODING! When not hard at work, you'll find me
        spending time with my wife and three rabbits, or happily lost in the
        woods somewhere.
      </p>
    </main>
  );
}

// <p>
//   Hello, My name is Jon Bernal. I'm a soon to be award winning{" "}
//   <FaGrinWink /> Full Stack Web Developer living just North of Seattle. I
//   currently work as a Full Stack Engineer at , where I get to solve fun
//   and complex problems every day! See more of the things I have been
//   working on in my{" "}
//   <button onClick={() => {}} className={styles.link}>
//     portfolio
//   </button>
//   , on{" "}
//   <a
//     className={styles.link}
//     href="https://www.linkedin.com/in/jon-bernal/"
//   >
//     LinkedIn
//   </a>{" "}
//   or on{" "}
//   <a className={styles.link} href="https://github.com/Jon-Bernal">
//     Github
//   </a>
//   . Just don't mind the trail of broken and half finished personal
//   projects on Github.
// </p>

// <p>
//   Outside of work, I have a beautiful wife and three bunnies. I also have
//   a number of side projects I'm currently working on, such as a day
//   trading robot, an allergy application that helps people find products
//   they won't be allergic to and my personal favorite, the one you're
//   currently looking at! I'm currently happily working at Nowigence, but if
//   anyone wants to grab a hard cider (not required) and chat, don't
//   hesitate to drop me a line!
// </p>

// {/* ======================= Old Stuff ==================== */}
// <p>I'm a fullstack web developer near Seattle Washington</p>

// <p>
//   I enjoy solving complex problems and creating intuitive layouts. When
//   I'm not coding, pushing pixels or studying programming, I can be found
//   rock climbing, hiking, reading, trail running or helping rehabilitate
//   rabbits.
// </p>
{
  /* <img
  src={jonImage}
  className={styles.headshot}
  alt={"Jon Bernal, web dev extraordinaire"}
/> */
}

// <hr />

// <h2>Technologies I have experience working with</h2>
// <div className={styles.techSection}>
//   <div className={styles.techItem}>
//     <img src={html} className={styles.techLogo} alt={"HTML5"} />
//     <p>HTML5</p>
//   </div>
//   <div className={styles.techItem}>
//     <img src={css} className={styles.techLogo} alt={"CSS3"} />
//     <p>CSS3</p>
//   </div>
//   <div className={styles.techItem}>
//     <img
//       src={javascript}
//       className={styles.techLogo}
//       alt={"JavaScript"}
//     />
//     <p>Javascript</p>
//   </div>
//   <div className={styles.techItem}>
//     <img src={express} className={styles.techLogo} alt={"Express.js"} />
//     <p>Express.js</p>
//   </div>
//   <div className={styles.techItem}>
//     <img src={fastify} className={styles.techLogo} alt={"Fastify"} />
//     <p>Fastify</p>
//   </div>
//   <div className={styles.techItem}>
//     <img src={mongodb} className={styles.techLogo} alt={"MongoDB"} />
//     <p>MongoDB</p>
//   </div>
//   <div className={styles.techItem}>
//     <img src={node} className={styles.techLogo} alt={"Node.js"} />
//     <p>Node.js</p>
//   </div>
//   <div className={styles.techItem}>
//     <img src={rest} className={styles.techLogo} alt={"RESTful APIs"} />
//     <p>RESTful API</p>
//   </div>
//   <div className={styles.techItem}>
//     <img src={semantic} className={styles.techLogo} alt={"Semantic UI"} />
//     <p>Semantic UI</p>
//   </div>
//   <div className={styles.techItem}>
//     <img src={graphql} className={styles.techLogo} alt={"graphql"} />
//     <p>GraphQL</p>
//   </div>
// </div>
