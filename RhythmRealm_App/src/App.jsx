import "./App.css";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Genres from "./pages/Genres";
import Favorites from "./pages/Favorites";
import Player from "./components/Player";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        color: "white",
      }}
    >
      <Sidebar />

      <div style={{ flex: 1, padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>

      <Player />
    </div>
  );
}

export default App;
