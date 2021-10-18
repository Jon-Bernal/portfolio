import { useContext } from "react";
import styles from "./AppWindow.module.scss";
import About from "../About/About";
import { AppleContext } from "../../../context/allcontexts";

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
            appleDispatch({ type: "change open app", app: "" });
          }}
        >
          X
        </button>

        {/* <div className={styles.appText}>{appleState?.openApp}</div> */}
      </div>
      <div
        className={styles.appContent}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {appleState.openApp === "about" && <About />}
        {/* {msState.openApp === "Portfolio" && <Portfolio />} */}
        {/* {msState.openApp === "Contact" && <Contact />} */}
        {/* END Old Stuff Here */}
      </div>
    </div>
  );
};

export default AboutWindow;
