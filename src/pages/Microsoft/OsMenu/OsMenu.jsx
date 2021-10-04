import React, { useState, useEffect, useContext } from "react";

// ----------- Old Icons ----------- //
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";

// ----------- New Icons ----------- //
import WindowsLogo from "../../../assets/svg/WindowsLogo";
import DropRightArrow from "../../../assets/svg/DropRightArrow";
import Pear from "../../../assets/svg/Pear";
import Tux from "../../../assets/svg/Tux";
import Person from "../../../assets/svg/Person";
import History from "../../../assets/svg/History";
import ChangeOsIcon from "../../../assets/svg/ChangeOsIcon";
import LayoutWithText from "../../../assets/svg/LayoutWithText";

// ----------- Data ----------- //
import { MsContext } from "../../../context/allcontexts";

// ----------- Styling ----------- //
import styles from "./OsMenu.module.scss";

const OsMenu = () => {
  const { msState, msDispatch } = useContext(MsContext);
  const { showOsMenu } = msState;
  const [clock, setClock] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setTimeout(() => {
      setClock(new Date().toLocaleTimeString());
    }, 1000);
  }, [clock]);

  return (
    <div
      className={styles.container}
      onMouseLeave={() => msDispatch({ type: "set os menu", isOpen: false })}
    >
      {/* ---------- Start Menu Button ---------- */}
      <button
        className={styles.osMenuBtn}
        onClick={() =>
          msDispatch({
            type: "set os menu",
            isOpen: msState.showOsMenu === true ? false : true,
          })
        }
      >
        <WindowsLogo className={styles.osLogo} /> Start
      </button>

      {/* ---------- Start Menu ---------- */}
      <div className={styles.menu} data-open={`${showOsMenu}`}>
        <div className={styles.osNameLabel}>
          <span className={styles.osNameBold}>Casement</span>95
        </div>
        <div className={styles.appSectionList}>
          <div className={styles.subMenuTarget}>
            <button
              onClick={() =>
                msDispatch({
                  type: "open os submenu",
                  subMenu: msState.osSubMenu === "apps" ? "" : "apps",
                })
              }
              onMouseEnter={() =>
                msDispatch({
                  type: "open os submenu",
                  subMenu: msState.osSubMenu === "apps" ? "" : "apps",
                })
              }
            >
              {/* <FcOpenedFolder className={styles.appSectionListIcons} /> */}
              <LayoutWithText className={styles.appSectionListIcons} />
              Programs
              <DropRightArrow className={styles.arrow} />
            </button>
            {msState.osSubMenu === "apps" && (
              <div className={styles.subMenu}>
                <button
                  onClick={() =>
                    msDispatch({ type: "change open app", name: "About" })
                  }
                >
                  <Person className={styles.subMenuLogo} />
                  About Me
                </button>
                <button
                  onClick={() =>
                    msDispatch({ type: "change open app", name: "Portfolio" })
                  }
                >
                  <History className={styles.subMenuLogo} />
                  Portfolio
                </button>
              </div>
            )}
          </div>
          <div className={styles.subMenuTarget}>
            <button
              onMouseEnter={() =>
                msDispatch({
                  type: "open os submenu",
                  subMenu: msState.osSubMenu === "theme" ? "" : "theme",
                })
              }
              onClick={() =>
                msDispatch({
                  type: "open os submenu",
                  subMenu: msState.osSubMenu === "theme" ? "" : "theme",
                })
              }
            >
              <ChangeOsIcon className={styles.appSectionListIcons} /> Change
              Theme
              <DropRightArrow className={styles.arrow} />
            </button>

            {msState.osSubMenu === "theme" && (
              <div className={styles.subMenu}>
                <button onClick={() => console.log("show apple theme")}>
                  <Pear className={styles.subMenuLogo} />
                  Pear
                </button>
                <button onClick={() => console.log("show linux theme")}>
                  <Tux className={styles.subMenuLogo} />
                  GNU/Linux
                </button>
              </div>
            )}
          </div>
          {/* <button onClick={() => setTheme(theme === "ms" ? "osx" : "ms")}>
          Change Theme
        </button> */}
        </div>
      </div>

      {/* ---------- contact me system tray ---------- */}
      <div className={styles.systemTray}>
        <a
          href="https://github.com/Jon-Bernal"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.trayIcon}
        >
          <IoLogoGithub className={styles.trayIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/jon-bernal/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.trayIcon}
        >
          <IoLogoLinkedin className={styles.trayIcon} />
        </a>
        <p className={styles.clock}>{clock}</p>
      </div>
    </div>
  );
};

export default OsMenu;
