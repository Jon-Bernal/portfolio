import React, { useState, useEffect } from "react";

import styles from "./OsMenu.module.scss";

import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiWindows95 } from "react-icons/si";
// import { useOsThemeContext } from "../../../context/allcontexts/osContext";

const OsMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTimeout(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
  }, [clock]);

  return (
    <div className={styles.container}>
      <button className={styles.osMenuBtn} onClick={() => setIsOpen(!isOpen)}>
        <SiWindows95 className={styles.osLogo} /> Start
      </button>

      {/* Menu */}
      <div className={styles.menu} data-open={`${isOpen}`}>
        {/* <button onClick={() => setTheme(theme === "ms" ? "osx" : "ms")}>
          Change Theme
        </button> */}
      </div>

      {/* contact me system tray */}
      <div className={styles.systemTray}>
        <a
          href="https://github.com/Jon-Bernal"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.trayIcon}
        >
          <AiFillGithub className={styles.trayIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/jon-bernal/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.trayIcon}
        >
          <AiFillLinkedin className={styles.trayIcon} />
        </a>
        <p className={styles.clock}>{clock}</p>
      </div>
    </div>
  );
};

export default OsMenu;
