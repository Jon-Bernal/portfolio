import { useContext, useEffect } from "react";

import { Portfolio } from "../Microsoft/Portfolio/Portfolio";
import MenuBar from "./MenuBar/MenuBar";
import { About } from "../Microsoft/About/About";

import otherStyles from "../../scss/removeWindowsStyles.scss";
import styles from "./Apple.module.scss";

// function removeCssFile(name) {
//   document.querySelector('style,link')
// }

const Apple = () => {
  // useEffect(() => {
  //   removeCssFile("windowsStyles.scss");
  // }, []);
  return (
    <div className={`${styles.removeWindowsStylesBase} ${styles.container}`}>
      {/* Menu Bar */}
      <MenuBar />
      <div className={styles.desktop}>
        {/* Desktop */}
        <div>
          {/* <Portfolio /> */}
          {/* <About /> */}
        </div>
        {/* Dock */}
        <div className={styles.dock}></div>
      </div>
    </div>
  );
};

export default Apple;
