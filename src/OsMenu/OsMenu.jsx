import React, { useState, useEffect } from "react";

import styles from "./OsMenu.module.css";

import { AiOutlineWindows } from "react-icons/ai";

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
    </div>
  );
};

export default OsMenu;
