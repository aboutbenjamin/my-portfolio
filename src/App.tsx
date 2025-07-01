import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/home/HomeScreen";
import CaseScreen from "./screens/case/CaseScreen";
import { TransitionProvider } from "./hooks/use-transition";

function App() {
  return (
    <TransitionProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/case/:id" element={<CaseScreen />} />
        </Routes>
      </HashRouter>
    </TransitionProvider>
  );
}

export default App;
