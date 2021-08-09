import React, { useState } from "react";
import { portfolioData as pd } from "../portfolioData";
import ReactMarkdown from "react-markdown";

import styles from "./PortfolioPiece.module.scss";

const PortfolioPiece = ({ name, back }) => {
  const data = pd.filter((p) => p.name === name)[0];
  const [show, setShow] = useState("images");
  const [idx, setIdx] = useState(0);

  return (
    <div className={`${styles.container}`}>
      <div className={styles.title}>
        <h3>
          {data.name} {show}:
        </h3>
      </div>
      <div className={styles.content}>
        {show === "images" && (
          <img
            className={styles.imageContent}
            src={data.images[idx].src}
            alt={data.images[idx].caption}
          />
        )}
        {show !== "images" && (
          <div className={styles.textContent}>
            <ReactMarkdown>{data[show]}</ReactMarkdown>
          </div>
        )}
      </div>
      <div className={styles.navBtns}>
        <button
          onClick={() => {
            setShow("images");
          }}
        >
          Screenshots
        </button>
        <button
          onClick={() => {
            setShow("description");
          }}
        >
          Purpose
        </button>
        <button
          onClick={() => {
            setShow("Frontend");
          }}
        >
          Frontend
        </button>
        <button
          onClick={() => {
            setShow("Backend");
          }}
        >
          Backend
        </button>
        <button
          onClick={() => {
            setShow("Infastructure");
          }}
        >
          Infastructure
        </button>
      </div>
      <div className={styles.imgControls}>
        {show === "images" && (
          <>
            <button disabled={idx === 0} onClick={() => setIdx(idx - 1)}>
              Prev
            </button>
            <button
              disabled={idx === data.images.length - 1}
              onClick={() => setIdx(idx + 1)}
            >
              Next
            </button>
          </>
        )}
      </div>
      <div className={styles.back}>
        <button onClick={back}>back</button>
      </div>
    </div>
  );
};

export default PortfolioPiece;
