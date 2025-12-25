import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Trending from "./pages/Trending";
import Genres from "./pages/Genres";
import Favorites from "./pages/Favorites";

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-green-500 to-black text-white">

        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/genres" element={<Genres />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
