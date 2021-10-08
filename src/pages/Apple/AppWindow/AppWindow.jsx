import { useContext } from "react";
import styles from "./AppWindow.module.scss";

import { AppleContext } from "../../../context/allcontexts";

const Appwindow = ({ difference, setDifference, canDrag, setCanDrag }) => {
  const { appleState, appleDispatch } = useContext(AppleContext);

  return (
    <div className={`window ${styles.appWindow}`} id="draggable">
      <div
        className={styles.appTitleBox}
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
        <div className={styles.appText}>{appleState?.openApp}</div>
        <div className={styles.appControls}>
          <button
            className={styles.appControlBtn}
            aria-label="Close"
            onClick={() => appleDispatch({ type: "change open app", app: "" })}
          >
            x
          </button>
        </div>
      </div>
      <div
        className={styles.appContent}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        content
        {/* {msState.openApp === "About" && <About />}
        {msState.openApp === "Portfolio" && <Portfolio />}
        {msState.openApp === "Contact" && <Contact />} */}
      </div>
    </div>
  );
};

export default Appwindow;
