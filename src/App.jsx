import { useContext } from "react";
import Microsoft from "./pages/Microsoft/Microsoft";
import Apple from "./pages/Apple/Apple";
import { OsThemeContext } from "./context/allcontexts";

import "./index.scss";

function App() {
  const { theme } = useContext(OsThemeContext);
  return (
    <>
      {theme === "ms" && <Microsoft />}
      {theme === "apple" && <Apple />}
      {theme === "linux" && <div>GNU / Linux</div>}
    </>
  );
}

export default App;
