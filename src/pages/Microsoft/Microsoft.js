import { useState } from "react";
import { Portfolio } from "./Portfolio/Portfolio";
import { Contact } from "./Contact";
import OsMenu from "./OsMenu/OsMenu";
import { About } from "./About/About";
import { useOsThemeContext } from "../../context/allcontexts/osContext";

// import { FaRegTrashAlt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiHistoryFill } from "react-icons/ri";
// import { RiHistoryFill, RiMailSendLine } from "react-icons/ri";

import "../../scss/windowsStyles.scss";
import styles from "./Microsoft.module.scss";

const Microsoft = () => {
  const { theme, setTheme } = useOsThemeContext();

  const [openApp, setOpenApp] = useState("");
  return (
    <>
      {/* ================== crt screen section ================== */}
      <div className={`App ${styles.container}`} data-theme={theme}>
        <div className={styles.screen}>
          {/* ================== Green Input Overlay ================== */}
          <OsMenu theme={theme} setTheme={setTheme} />

          {/* ================== Green Input Overlay ================== */}

          <div className={styles.overlay}>Input-1</div>

          {/* ================== Icons section ================== */}

          <div className={styles.iconGroup}>
            <button
              onClick={() => setOpenApp("About")}
              className={`${styles.iconBtn}`}
            >
              <IoPersonCircleOutline className={`${styles.icon}`} />
              About Me
            </button>
            <button
              onClick={() => setOpenApp("Portfolio")}
              className={styles.iconBtn}
            >
              <RiHistoryFill className={styles.icon} />
              Portfolio
            </button>
            {/* <button
              onClick={() => setOpenApp("contact")}
              className={`${styles.iconBtn}`}
            >
              <RiMailSendLine className={styles.icon} />
              Contact Me
            </button>
            <button className={`${styles.iconBtn}`}>
              <FaRegTrashAlt className={styles.icon} />
              Trash
            </button> */}
          </div>

          {/* ================== App section ================== */}
          {!!openApp && (
            <div className={`window ${styles.appWindow}`}>
              {/* <div className={styles.appHeader}> */}
              <div className={`title-bar`}>
                <div className={`title-bar-text`}>{openApp}</div>
                <div className={`title-bar-controls`}>
                  <button
                    // className={styles.closeBtn}
                    aria-label="Close"
                    onClick={() => setOpenApp("")}
                  />
                </div>
              </div>
              <div className={styles.appContent}>
                {openApp === "About" && <About />}
                {openApp === "Portfolio" && <Portfolio />}
                {openApp === "Contact" && <Contact />}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Microsoft;
