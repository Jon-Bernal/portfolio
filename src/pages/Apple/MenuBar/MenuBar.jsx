import React, { useContext, useState, useEffect } from "react";
import AppleLogo from "../../../assets/svg/AppleLogo";
import Githubicon from "../../../assets/svg/GithubIcon";
import LinkedinIcon from "../../../assets/svg/LinkedInIcon";

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
    <div className={styles.container} id="appleOsTopMenu">
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
          <div className={styles.dropdownMenu}>
            <button
              onClick={() => {
                setTheme("ms");
              }}
            >
              Microsoft
            </button>
            <button
              onClick={() => {
                window.location.reload();
              }}
            >
              Restart
            </button>
            <button
              onClick={() => {
                window.close();
              }}
            >
              Shut Down
            </button>
          </div>
        )}
      </div>
      {appleState.openApp && (
        <button
          className={styles.menuText}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log("clicked dropdown");
          }}
        >
          {appleState.openApp}
        </button>
      )}
      {/* Clock */}
      <div className={styles.right}>
        <a
          href="https://github.com/Jon-Bernal"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.github}
        >
          <Githubicon className={styles.githubIcon} />
        </a>
        <a
          href="https://www.linkedin.com/in/jon-bernal/"
          target="_blank"
          rel="noreferrer noopener"
          className={styles.linkedin}
        >
          <LinkedinIcon className={styles.linkedinIcon} />
        </a>
        <div className={styles.clock}>{clock}</div>
      </div>
    </div>
  );
};

export default Menubar;
