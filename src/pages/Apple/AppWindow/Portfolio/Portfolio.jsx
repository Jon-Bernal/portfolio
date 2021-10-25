import { portfolioData as pd } from "../../../../data/portfolioData";
import { AppleContext } from "../../../../context/allcontexts";
import { useContext } from "react";

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
        {/* Heading */}
        <h2 className={styles.heading}>{p.name}</h2>

        {/* Image scroller */}
        <div>
          <img src={p.images[0].src} className={styles.images} />
        </div>

        {/* Meta Data */}

        {/* Description */}
        <div className={styles.textContainer}>
          <div className={styles.meta__div}>
            <p className={styles.meta__p}>
              {/* Date's worked on */}
              <span>Timeline:</span> {p.Year}
            </p>
            <p className={styles.meta__p}>
              {/* Link to live site */}
              <span>Link to Site:</span> <a href={p.link}>{p.link}</a>
            </p>
          </div>

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
