import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeScreen from "./screens/home/HomeScreen";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
