import { useState } from "react";
import PortfolioPiece from "./PortfolioPiece/PortfolioPiece";

import { portfolioData as pd } from "./portfolioData";
import styles from "./Portfolio.module.css";

export function Portfolio() {
  const [view, setView] = useState("all");

  if (view !== "all") {
    return <PortfolioPiece name={view} back={() => setView("all")} />;
  }

  return (
    <div>
      {pd.map((p) => {
        return (
          <section
            key={p.name}
            onClick={() => setView(p.name)}
            className={styles.portfolioPiece}
          >
            <img
              className={styles.ppImg}
              src={p.thumbnail.src}
              alt={p.thumbnail.alt}
            />
            <h3 className={styles.ppTitle}>{p.name}</h3>
            <div className={styles.ppTech}>
              <h4 className={styles.ppTech__header}>Tech Stack</h4>
              <div className={styles.ppTech__div}>
                {p.techUsed.map((t) => {
                  return (
                    // <span className={styles.ppTech__name}>{t.name}</span>
                    <img
                      className={styles.ppTech__img}
                      src={t.img}
                      alt={t.name}
                      title={t.name}
                    />
                  );
                })}
              </div>
            </div>
            <p className={styles.ppDesc}>{p.shortDesc}</p>
          </section>
        );
      })}
    </div>
  );
}
