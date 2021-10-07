import React, { useContext, useState, useEffect } from "react";
import AppleLogo from "../../../assets/svg/AppleLogo";

import { OsThemeContext } from "../../../context/allcontexts";

import styles from "./MenuBar.module.scss";

const Menubar = () => {
  // ---------- Context Data ---------- //
  const { setTheme } = useContext(OsThemeContext);

  // ---------- Clock ---------- //
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTimeout(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
  }, [clock]);

  return (
    <div className={styles.container}>
      <button className={styles.logoBtn}>
        <AppleLogo classname={styles.logo} />
      </button>
      {/* <button onClick={() => setTheme("ms")}>Microsoft</button> */}
      <div className={styles.clock}>{clock}</div>
    </div>
  );
};

export default Menubar;
