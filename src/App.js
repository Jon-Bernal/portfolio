import { useState } from "react";
import { About } from "./pages/About";

import styles from "./App.module.css";
import { Work } from "./pages/Work";
import { Skills } from "./pages/Skills";
import { Contact } from "./pages/Contact";

function App() {
  const [openApp, setOpenApp] = useState("");

  return (
    <div className="App">
      <div className={styles.iconGroup}>
        <button onClick={() => setOpenApp("about")} className={styles.icon}>
          About Logo
        </button>
        <button onClick={() => setOpenApp("work")} className={styles.icon}>
          Work History Logo
        </button>
        <button onClick={() => setOpenApp("skills")} className={styles.icon}>
          Skills Logo
        </button>
        <button onClick={() => setOpenApp("contact")} className={styles.icon}>
          contact Logo
        </button>
      </div>

      {!!openApp && (
        <div className={styles.appWindow}>
          <button className={styles.closeBtn} onClick={() => setOpenApp("")}>
            X
          </button>
          {openApp === "about" && <About />}
          {openApp === "work" && <Work />}
          {openApp === "skills" && <Skills />}
          {openApp === "contact" && <Contact />}
        </div>
      )}
    </div>
  );
}

export default App;
