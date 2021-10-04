import { useContext } from "react";
import Microsoft from "./pages/Microsoft/Microsoft";
import { OsThemeContext } from "./context/allcontexts";

import "./index.scss";

function App() {
  const { theme } = useContext(OsThemeContext);
  return (
    <>
      {theme === "ms" && <Microsoft />}
      {theme === "apple" && <div>APPLE</div>}
      {theme === "Linux" && <div>GNU / Linux</div>}
    </>
  );
}

export default App;
