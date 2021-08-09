import Microsoft from "./pages/Microsoft/Microsoft";
import { useOsThemeContext } from "./context/allcontexts";

import "./index.scss";

function App() {
  const { theme } = useOsThemeContext();
  return <>{theme === "ms" && <Microsoft />}</>;
}

export default App;
