import { useContext } from "react";
import styles from "./AppWindow.module.scss";
import About from "./About/About";
import { AppleContext } from "../../../context/allcontexts";
import Portfolio from "./Portfolio/Portfolio";
import Backbutton from "../../../assets/svg/BackButton";
import { portfolioData } from "../../../data/portfolioData";

const AboutWindow = ({ difference, setDifference, canDrag, setCanDrag }) => {
  const { appleState, appleDispatch } = useContext(AppleContext);

  return (
    <div className={`${styles.appWindow}`} id="appleDraggable">
      <div
        className={styles.header}
        onMouseDown={(e) => {
          e = e || window.event;
          setCanDrag(true);
          const appWindow = document.querySelector("#appleDraggable");
          if (appWindow) {
            const app = {
              left: appWindow.getBoundingClientRect().left,
              top:
                appWindow.getBoundingClientRect().top -
                document.querySelector("#appleOsTopMenu").offsetHeight, // - is for the height of the upper menu
            };
            setDifference({
              x: e.clientX - app.left,
              y: e.clientY - app.top,
            });

            appWindow.style.left = app.left + "px";
            appWindow.style.top = app.top + "px";
            appWindow.style.transform = "none";
          }
        }}
        id="draghandle"
      >
        <button
          className={styles.closeBtn}
          aria-label="Close"
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            appleDispatch({ type: "change open app", app: "" });
          }}
          onMouseDown={(e) => {
            // stop window jump from drag feature bubble up
            e.stopPropagation();
          }}
        >
          X
        </button>

        <button
          className={styles.backButton}
          aria-label="Back"
          onClick={(e) => {
            e.stopPropagation();
            appleDispatch({ type: "back button" });
          }}
          onMouseDown={(e) => {
            // stop window jump from drag feature bubble up
            e.stopPropagation();
          }}
          disabled={appleState.backStateStack.length > 0 ? false : true}
        >
          <Backbutton />
        </button>
        <button
          className={styles.forwardButton}
          aria-label="Back"
          onClick={(e) => {
            e.stopPropagation();
            appleDispatch({ type: "forward button" });
          }}
          onMouseDown={(e) => {
            // stop window jump from drag feature bubble up
            e.stopPropagation();
          }}
          disabled={appleState.forwardStateStack.length > 0 ? false : true}
        >
          <Backbutton />
        </button>

        {appleState?.openApp === "portfolio" && (
          <div
            className={styles.appHeaderText}
            onClick={(e) => e.stopPropagation()}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <span>https://</span>
            {appleState?.openApp}
            <span>
              .com
              {appleState?.portfolioItem || appleState?.portfolioItem === 0
                ? `/${portfolioData[appleState?.portfolioItem].name}`
                : ""}
            </span>
          </div>
        )}
      </div>
      <div
        className={styles.appContent}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {appleState.openApp === "about" && <About />}
        {appleState.openApp === "portfolio" && <Portfolio />}
      </div>
    </div>
  );
};

export default AboutWindow;
