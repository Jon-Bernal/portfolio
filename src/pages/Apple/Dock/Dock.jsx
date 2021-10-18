import { useContext, useState } from "react";
import Bluefoldericon from "../../../assets/svg/BlueFolderIcon";
import AppleAboutMeIcon from "../../../assets/svg/AppleAboutMeIcon";
import { AppleContext } from "../../../context/allcontexts";

import styles from "./Dock.module.scss";

const Dock = () => {
  const { appleDispatch } = useContext(AppleContext);

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
              onMouseEnter={() => setHovered("portfolio")}
              onMouseLeave={() => setHovered("")}
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
