import { useState, useEffect, useContext } from "react";

// ----------- New Icons ----------- //
import WindowsLogo from "../../../assets/svg/WindowsLogo";
import DropRightArrow from "../../../assets/svg/DropRightArrow";
import AppleLogo from "../../../assets/svg/AppleLogo";
import Tux from "../../../assets/svg/Tux";
import Person from "../../../assets/svg/Person";
import History from "../../../assets/svg/History";
import ChangeOsIcon from "../../../assets/svg/ChangeOsIcon";
import LayoutWithText from "../../../assets/svg/LayoutWithText";
import Githubicon from "../../../assets/svg/GithubIcon";
import Linkedinicon from "../../../assets/svg/LinkedInIcon";
import MsReload from "../../../assets/svg/MSReload";

// ----------- Data ----------- //
import { MsContext, OsThemeContext } from "../../../context/allcontexts";

// ----------- Styling ----------- //
import styles from "./OsMenu.module.scss";

const OsMenu = () => {
  const { msState, msDispatch } = useContext(MsContext);
  const { setTheme } = useContext(OsThemeContext);
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
      // onMouseLeave={() => msDispatch({ type: "set os menu", isOpen: false })}
    >
      {/* ---------- Start Menu Button ---------- */}
      <button
        className={`${styles.osMenuBtn}`}
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
          <span className={styles.osNameBold}>Windows</span>95
        </div>
        <div className={styles.appSectionList}>
          <div className={styles.subMenuTarget}>
            <button
              className={"msBtn"}
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
                  className={"msBtn"}
                  onClick={() =>
                    msDispatch({ type: "change open app", name: "About" })
                  }
                >
                  <Person className={styles.subMenuLogo} />
                  About Me
                </button>
                <button
                  className={"msBtn"}
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
              className={"msBtn"}
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
                <button
                  className={"msBtn"}
                  onClick={() => {
                    msDispatch({
                      type: "reset",
                    });
                    setTheme("apple");
                  }}
                >
                  <AppleLogo className={styles.subMenuLogo} />
                  Apple
                </button>
                <button
                  className={"msBtn"}
                  onClick={() => console.log("Linux theme coming soon!")}
                >
                  <Tux className={styles.subMenuLogo} />
                  {/* GNU/Linux */}
                  Coming Soon...
                </button>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              window.location.reload();
            }}
            className={"msBtn"}
          >
            <MsReload className={styles.appSectionListIcons} />
            Restart
          </button>
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
          <Githubicon className={styles.trayIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/jon-bernal/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.trayIcon}
        >
          <Linkedinicon className={styles.trayIcon} />
        </a>
        <p className={styles.clock}>{clock}</p>
      </div>
    </div>
  );
};

export default OsMenu;
