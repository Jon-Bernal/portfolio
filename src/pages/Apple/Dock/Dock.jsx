import { useContext, useState } from "react";
import Bluefoldericon from "../../../assets/svg/BlueFolderIcon";
import AppleAboutMeIcon from "../../../assets/svg/AppleAboutMeIcon";
import { AppleContext } from "../../../context/allcontexts";

import styles from "./Dock.module.scss";

const Dock = () => {
  const { appleState, appleDispatch } = useContext(AppleContext);

  const [hovered, setHovered] = useState("");

  return (
    <div className={styles.container}>
      <div id={styles.dock}>
        <ul>
          <li>
            <span>Portfolio</span>
            <button
              onClick={() => {
                appleDispatch({ type: "change open app", name: "portfolio" });
              }}
              data-active={`${appleState.openApp === "portfolio"}`}
            >
              <Bluefoldericon
                className={`${styles.dockItem} ${
                  hovered === "portfolio" ? styles.prev : ""
                }`}
              />
            </button>
          </li>
          <li>
            <span>About</span>
            <button
              onClick={() => {
                appleDispatch({ type: "change open app", name: "about" });
              }}
              onMouseEnter={() => setHovered("about")}
              onMouseLeave={() => setHovered("")}
              data-active={`${appleState.openApp === "about"}`}
            >
              <AppleAboutMeIcon className={styles.dockItem} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dock;
