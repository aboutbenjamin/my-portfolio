import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/home/HomeScreen";
import CaseScreen from "./screens/case/CaseScreen";
import { TransitionProvider } from "./hooks/use-transition";
import { useTheme } from "./theme/use-theme";

function App() {
  const { mode, toggleMode } = useTheme();
  return (
    <TransitionProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/case/:id" element={<CaseScreen />} />
        </Routes>
        <button onClick={toggleMode}>
          Switch to {mode === "dark" ? "light" : "dark"} mode
        </button>
      </HashRouter>
    </TransitionProvider>
  );
}

export default App;
