import { useContext } from "react";
import History from "../../../assets/svg/History";
import Person from "../../../assets/svg/Person";
import { AppleContext } from "../../../context/allcontexts";

import styles from "./Dock.module.scss";

const Dock = () => {
  const { appleDispatch } = useContext(AppleContext);
  return (
    <div className={styles.container}>
      <div id={styles.dock}>
        <ul>
          <li>
            <span>About</span>
            <button
              onClick={() => {
                appleDispatch({ type: "change open app", name: "about" });
              }}
            >
              <History className={styles.dockItem} />
            </button>
          </li>
          <li>
            <span>Portfolio</span>
            <button
              onClick={() => {
                appleDispatch({ type: "change open app", name: "portfolio" });
              }}
            >
              <Person className={styles.dockItem} />
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dock;
