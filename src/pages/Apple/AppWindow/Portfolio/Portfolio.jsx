import { portfolioData as pd } from "../../../../data/portfolioData";

import styles from "./Portfolio.module.scss";

const Portfolio = () => {
  return (
    <div className={styles.thumbnailsContainer}>
      {pd.map((s) => {
        return (
          <div className={styles.thumbnail}>
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
  );
};

export default Portfolio;
