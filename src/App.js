import "./App.css";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import GalleryPage from "./pages/Gallery-page/GalleryPage";
import RecentPostPage from "./pages/recentpage/RecentPostPage";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallerypage" element={<GalleryPage />} />
        <Route path="/recentposts" element={<RecentPostPage />} />
      </Routes>
    </div>
  );
}

export default App;