import { useState } from "react";
import PortfolioPiece from "./PortfolioPiece/PortfolioPiece";

import { portfolioData as pd } from "./portfolioData";
import styles from "./Portfolio.module.scss";

export function Portfolio() {
  const [view, setView] = useState("all");
  const [idx, setIdx] = useState(0);

  if (view !== "all") {
    return <PortfolioPiece name={view} back={() => setView("all")} />;
  }

  return (
    <section className={styles.container}>
      <h3 className={styles.ppTitle}>{pd[idx].name}</h3>
      <img
        className={styles.ppImg}
        src={pd[idx].thumbnail.src}
        alt={pd[idx].thumbnail.alt}
      />
      <div className={styles.ppTech}>
        <h4 className={styles.ppTech__header}>Tech Stack</h4>
        <div className={styles.ppTech__div}>
          {pd[idx].techUsed.map((t) => {
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
      <p className={styles.ppDesc}>{pd[idx].shortDesc}</p>
      <div className={styles.btnRow}>
        <button onClick={() => setView(pd[idx].name)}>more</button>
        <button disabled={idx === 0} onClick={() => idx > 0 && setIdx(idx - 1)}>
          prev
        </button>
        <button
          disabled={idx >= pd.length - 1}
          onClick={() => idx < pd.length - 1 && setIdx(idx + 1)}
        >
          next
        </button>
      </div>
    </section>
  );
}
