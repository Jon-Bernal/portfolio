import { useState, useEffect } from "react";
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
import Draggable from "react-draggable";

const initState = {
  theme: "ms",
  openApp: "",
  // app drag section
  position: { x: "", y: "" },
};

const Microsoft = () => {
  const { theme, setTheme } = useOsThemeContext();

  const [openApp, setOpenApp] = useState("");

  // ---------- window drag section ---------- //
  // when app window first appears (i.e. open App happens), the position needs to be set based off it's initial x and y by pixel, not by percent (what's in the scss to center it). After that, it is hopefully a simple, when mouse moves change the translateX and translateY to match the movement.  Might not be that easy, but that's first simple guess at this.

  useEffect(() => {
    const header = document.querySelector("#draghandle");
    const appWindow = document.querySelector("#draggable");

    if (header && appWindow) {
      console.log("header && appWindow true");
      dragElement(appWindow, header);
      function dragElement(ele, ele2) {
        var pos1 = 0,
          pos2 = 0,
          pos3 = 0,
          pos4 = 0;
        ele2.onmousedown = dragMouseDown;
        function dragMouseDown(e) {
          e = e || window.event;
          pos3 = e.clientX;
          pos4 = e.clientY;
          document.onmouseup = closeDragElement;
          document.onmousemove = elementDrag;
        }
        function elementDrag(e) {
          e = e || window.event;
          pos1 = pos3 - e.clientX;
          pos2 = pos4 - e.clientY;
          pos3 = e.clientX;
          pos4 = e.clientY;
          ele.style.top = ele.offsetTop - pos2 + "px";
          ele.style.left = ele.offsetLeft - pos1 + "px";
        }
        function closeDragElement() {
          document.onmouseup = null;
          document.onmousemove = null;
        }
      }
    }

    return () => {};
  }, [openApp]);

  // ---------- end window drag section ---------- //

  return (
    <>
      {/* ================== crt screen section ================== */}
      <div className={`App ${styles.container}`} data-theme={theme}>
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
              <div className={`window ${styles.appWindow}`} id="draggable">
                {/* <div className={styles.appHeader}> */}
                <div className={`title-bar box`} id="draghandle">
                  <div className={`title-bar-text`}>{openApp}</div>
                  <div className={`title-bar-controls`}>
                    <button
                      // className={styles.closeBtn}
                      aria-label="Close"
                      onClick={() => setOpenApp("")}
                    />
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
