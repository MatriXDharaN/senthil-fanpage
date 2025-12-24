import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Achievements from "./pages/achievement/Achievements";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
      </Routes>
    </div>
  );
}

export default App;
