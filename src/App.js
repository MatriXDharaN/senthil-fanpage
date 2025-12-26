import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Achievements from "./pages/achievement/Achievements";
import GalleryPage from "./pages/Gallery-page/GalleryPage";
import Recentpostpage from "./pages/Recentpostpage/Recentpostpage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/gallerypage" element={<GalleryPage />} />
        <Route path="/recentposts" element={<Recentpostpage />} />
      </Routes>
    </div>
  );
}

export default App;