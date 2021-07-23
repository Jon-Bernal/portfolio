import { useState } from "react";
import { About } from "./pages/About/About";

import "./index.css";
import styles from "./App.module.css";
import { Work } from "./pages/Work";
import { Contact } from "./pages/Contact";
import OsMenu from "./OsMenu/OsMenu";

import { FaRegTrashAlt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiHistoryFill, RiMailSendLine } from "react-icons/ri";

function App() {
  const [openApp, setOpenApp] = useState("");
  const [theme, setTheme] = useState("dark");

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
              onClick={() => setOpenApp("about")}
              className={`${styles.iconBtn}`}
            >
              <IoPersonCircleOutline className={`${styles.icon}`} />
              About Me
            </button>
            <button
              onClick={() => setOpenApp("work")}
              className={styles.iconBtn}
            >
              <RiHistoryFill className={styles.icon} />
              Work History
            </button>
            <button
              onClick={() => setOpenApp("contact")}
              className={`${styles.iconBtn}`}
            >
              <RiMailSendLine className={styles.icon} />
              Contact Me
            </button>
            {/* <button className={`${styles.iconBtn}`}>
            <FaRegTrashAlt className={styles.icon} />
            Trash
          </button> */}
          </div>

          {/* ================== App section ================== */}
          {!!openApp && (
            <div className={styles.appWindow}>
              <div className={styles.appHeader}>
                <h2>{openApp}</h2>
                <button
                  className={styles.closeBtn}
                  onClick={() => setOpenApp("")}
                >
                  X
                </button>
              </div>
              <div className={styles.appContent}>
                {openApp === "about" && <About />}
                {openApp === "work" && <Work />}
                {openApp === "contact" && <Contact />}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;
