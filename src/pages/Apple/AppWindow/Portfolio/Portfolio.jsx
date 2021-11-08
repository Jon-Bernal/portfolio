import { portfolioData as pd } from "../../../../data/portfolioData";
import { AppleContext } from "../../../../context/allcontexts";
import { useContext } from "react";
import Backbutton from "../../../../assets/svg/BackButton";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  const { appleState, appleDispatch } = useContext(AppleContext);

  if (appleState.portfolioItem !== null) {
    const p = pd[appleState.portfolioItem];

    function createMarkup(html) {
      return { __html: html };
    }

    return (
      <div className={styles.container}>
        {/* Controls and label */}
        {/* <button
          className={styles.backButton}
          onClick={() => appleDispatch({ type: "back button" })}
        >
          <Backbutton />
        </button> */}

        {/* Heading */}
        <h2 className={styles.heading}>{p.name}</h2>

        {/* Image scroller */}
        <div>
          <img
            src={p.images[0].src}
            className={styles.images}
            alt={p.images[0].alt}
          />
        </div>

        {/* Meta Data */}
        <div className={styles.meta__div}>
          <p className={styles.meta__p}>
            {/* Date's worked on */}
            Timeline: {p.Year}
          </p>
          <p className={styles.meta__p}>
            {/* Link to live site */}
            Link to Site: <a href={p.link}>{p.link}</a>
          </p>
        </div>

        {/* Description */}
        <div className={styles.textContainer}>
          <div className={styles.text}>
            <h3>Description:</h3>
            <p dangerouslySetInnerHTML={createMarkup(p.description)}></p>
          </div>

          {/* Frontend */}
          <div className={styles.text}>
            <h3>Frontend:</h3>
            <p dangerouslySetInnerHTML={createMarkup(p.Frontend)}></p>
          </div>

          {/* Backend */}
          <div className={styles.text}>
            <h3>Backend:</h3>
            <p dangerouslySetInnerHTML={createMarkup(p.Backend)}></p>
          </div>

          {/* Infastructure */}
          <div className={styles.text}>
            <h3>Infastructure:</h3>
            <p dangerouslySetInnerHTML={createMarkup(p.Infastructure)}></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.portfolioSelectionPage}>
      {/* Controls and label */}
      {/* <button
        className={styles.backButton}
        onClick={() => appleDispatch({ type: "back button" })}
        disabled={appleState.backStateStack.length > 0 ? false : true}
      >
        <Backbutton />
      </button> */}
      <h2 className={styles.portfolioSelection__header}>Portfolio</h2>
      <div className={styles.thumbnailsContainer}>
        {pd.map((s, i) => {
          return (
            <div
              onClick={() => {
                appleDispatch({ type: "view portfolio item", index: i });
              }}
              className={styles.thumbnail}
            >
              <h2 className={styles.thumbnailText}>{s.name}</h2>
              <img
                className={styles.thumbnailImg}
                src={s.thumbnail.src}
                alt={s.thumbnail.src}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
