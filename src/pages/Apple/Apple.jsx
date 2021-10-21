import { useState, useContext } from "react";

import MenuBar from "./MenuBar/MenuBar";
import Dock from "./Dock/Dock";
import AppWindow from "./AppWindow/AppWindow";
import { AppleContext } from "../../context/allcontexts";

import styles from "./Apple.module.scss";

const Apple = () => {
  const { appleState } = useContext(AppleContext);

  const [difference, setDifference] = useState({ x: 0, y: 0 });
  const [canDrag, setCanDrag] = useState(false);

  return (
    <div
      className={`${styles.removeWindowsStylesBase} ${styles.container}`}
      onMouseMove={(e) => {
        if (canDrag) {
          const appWindow = document.querySelector("#appleDraggable");
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
      {/* Menu Bar */}
      <MenuBar />
      <div className={styles.desktop}>
        {/* Desktop */}
        <div className={styles.AppWindowContainer}>
          {appleState.openApp && (
            <AppWindow
              difference={difference}
              setDifference={setDifference}
              canDrag={canDrag}
              setCanDrag={setCanDrag}
            />
          )}
        </div>
        {/* Dock */}
        <Dock />
      </div>
    </div>
  );
};

export default Apple;
