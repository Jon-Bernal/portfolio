import React, { useContext, useState, useEffect } from "react";
import AppleLogo from "../../../assets/svg/AppleLogo";

import { OsThemeContext, AppleContext } from "../../../context/allcontexts";

import styles from "./MenuBar.module.scss";

const Menubar = () => {
  // ---------- Context Data ---------- //
  const { setTheme } = useContext(OsThemeContext);
  // const { appleState, appleDispatch } = useContext(AppleContext);
  const { appleState, appleDispatch } = useContext(AppleContext);

  // ---------- Clock ---------- //
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTimeout(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
  }, [clock]);

  return (
    <div className={styles.container}>
      <div
        className={styles.appleMenuContainer}
        onMouseLeave={() =>
          appleDispatch({ type: "set os menu", isOpen: false })
        }
      >
        {/* Apple Button */}
        <button
          className={styles.logoBtn}
          onClick={() =>
            appleDispatch({
              type: "set os menu",
              isOpen: !appleState.showOsMenu,
            })
          }
        >
          <AppleLogo className={styles.logo} />
        </button>

        {/* OS Menu */}
        {appleState?.showOsMenu && (
          <div className={styles.appleMenu}>
            <button onClick={() => setTheme("ms")}>Microsoft</button>
          </div>
        )}
      </div>
      {/* Clock */}
      <div className={styles.clock}>{clock}</div>
    </div>
  );
};

export default Menubar;
