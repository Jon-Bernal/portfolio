import { useState } from "react";
import PortfolioPiece from "./PortfolioPiece/PortfolioPiece";

import { portfolioData } from "./portfolioData";

export function Portfolio() {
  const [view, setView] = useState("all");

  if (view !== "all") {
    return <PortfolioPiece name={view} back={() => setView("all")} />;
  }

  return (
    <div>
      {portfolioData.map((p) => {
        return (
          <section
            key={p.name}
            onClick={() => setView(p.name)}
            style={{ border: "1px solid red" }}
          >
            <h3>{p.name}</h3>
            <p>{p.shortDesc}</p>
            <img src={p.thumbnail.src} alt={p.thumbnail.alt} />
          </section>
        );
      })}
    </div>
  );
}
