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

// const initState = {
//   theme: "ms",
//   openApp: "",
//   // app drag section
//   position: { x: "", y: "" },
// };

const Microsoft = () => {
  const { theme, setTheme } = useOsThemeContext();
  const [difference, setDifference] = useState({ x: 0, y: 0 });
  const [canDrag, setCanDrag] = useState(false);
  const [openApp, setOpenApp] = useState("");

  // ---------- end window drag section ---------- //

  return (
    <>
      {/* ================== crt screen section ================== */}
      <div
        className={`App ${styles.container}`}
        data-theme={theme}
        onMouseMove={(e) => {
          if (canDrag) {
            const appWindow = document.querySelector("#draggable");
            const left = e.clientX - difference.x;
            const top = e.clientY - difference.y;
            appWindow.style.left = left + "px";
            appWindow.style.top = top > 0 ? top + "px" : "0px";
          }
        }}
        onMouseUp={(e) => {
          setCanDrag(false);
        }}
      >
        <div className={styles.screen}>
          <div className={styles.desktop}>
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
            </div>

            {/* ================== App section ================== */}
            {!!openApp && (
              <div className={`window ${styles.appWindow}`} id="draggable">
                {/* <div className={styles.appHeader}> */}
                <div
                  className={`title-bar box`}
                  onMouseDown={(e) => {
                    e = e || window.event;
                    setCanDrag(true);
                    const appWindow = document.querySelector("#draggable");
                    const app = {
                      left: appWindow.getBoundingClientRect().left,
                      top: appWindow.getBoundingClientRect().top,
                    };
                    setDifference({
                      x: e.clientX - app.left,
                      y: e.clientY - app.top,
                    });

                    appWindow.style.left = app.left + "px";
                    appWindow.style.top = app.top + "px";
                    appWindow.style.transform = "none";
                  }}
                  id="draghandle"
                >
                  <div className={`title-bar-text`}>{openApp}</div>
                  <div className={`title-bar-controls`}>
                    <button aria-label="Close" onClick={() => setOpenApp("")} />
                  </div>
                </div>
                <div
                  className={styles.appContent}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  {openApp === "About" && <About />}
                  {openApp === "Portfolio" && <Portfolio />}
                  {openApp === "Contact" && <Contact />}
                </div>
              </div>
            )}
          </div>

          {/* ================== Bottom start menu bar ================== */}
          <OsMenu theme={theme} setTheme={setTheme} />
        </div>
      </div>
    </>
  );
};

export default Microsoft;
