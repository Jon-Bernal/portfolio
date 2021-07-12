import { useState } from "react";
import { About } from "./pages/About";

import styles from "./App.module.css";
import { Work } from "./pages/Work";
// import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";

import { FaRegTrashAlt } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { RiHistoryFill, RiMailSendLine } from "react-icons/ri";

function App() {
  const [openApp, setOpenApp] = useState("");

  return (
    <div className={`App ${styles.App}`}>
      <div className={styles.iconGroup}>
        <button
          onClick={() => setOpenApp("about")}
          className={`${styles.icon} ${styles.trashIconBtn}`}
        >
          <IoPersonCircleOutline className={`${styles.trashIcon}`} />
          About Me
        </button>
        <button
          onClick={() => setOpenApp("work")}
          className={`${styles.icon} ${styles.trashIconBtn}`}
        >
          <RiHistoryFill className={styles.trashIcon} />
          Work History Icon
        </button>
        {/* <button
          onClick={() => setOpenApp("skills")}
          className={`${styles.icon} ${styles.trashIconBtn}`}
        >
          <IoPersonCircleOutline className={styles.trashIcon} />
          Skills Icon
        </button> */}
        <button
          onClick={() => setOpenApp("contact")}
          className={`${styles.icon} ${styles.trashIconBtn}`}
        >
          <RiMailSendLine className={styles.trashIcon} />
          contact Icon
        </button>
      </div>
      <button className={styles.trashIconBtn}>
        <FaRegTrashAlt className={styles.trashIcon} />
        Trash
      </button>

      {!!openApp && (
        <div className={styles.appWindow}>
          <button className={styles.closeBtn} onClick={() => setOpenApp("")}>
            X
          </button>
          {openApp === "about" && <About />}
          {openApp === "work" && <Work />}
          {/* {openApp === "skills" && <Skills />} */}
          {openApp === "contact" && <Contact />}
        </div>
      )}
    </div>
  );
}

export default App;
