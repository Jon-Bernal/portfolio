import React, { useState, useEffect } from "react";

import styles from "./OsMenu.module.css";

import { AiOutlineWindows, AiFillLinkedin } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const OsMenu = ({ theme, setTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [theme]);

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
        <FaGithubSquare className={styles.trayIcon} />
        <AiFillLinkedin className={styles.trayIcon} />
        time
      </div>
    </div>
  );
};

export default OsMenu;
