import React, { useState, useEffect } from "react";

import styles from "./OsMenu.module.css";

import { AiOutlineWindows, AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const OsMenu = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clock, setClock] = useState();

  useEffect(() => {
    setIsOpen(false);
  }, [theme]);

  useEffect(() => {}, []);

  return (
    <div className={styles.container}>
      <button className={styles.osMenuBtn} onClick={() => setIsOpen(!isOpen)}>
        <AiOutlineWindows className={styles.osLogo} />
      </button>

      {/* Menu */}
      <div className={styles.menu} data-open={`${isOpen}`}>
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          Change Theme
        </button>
      </div>

      {/* contact me system tray */}
      <div className={styles.systemTray}>
        <a
          href="https://github.com/Jon-Bernal"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithubSquare className={styles.trayIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/jon-bernal/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <AiFillLinkedin className={styles.trayIcon} />
        </a>
      </div>
    </div>
  );
};

export default OsMenu;
