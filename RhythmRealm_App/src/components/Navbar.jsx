import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full bg-green-600 p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Spotify Clone</h1>

      <div className="space-x-6 text-lg">
        <Link to="/" className="hover:text-black">Home</Link><br></br>
        <Link to="/trending" className="hover:text-black">Trending</Link><br></br>
        <Link to="/genres" className="hover:text-black">Genres</Link><br></br>
        <Link to="/favorites" className="hover:text-black">Favorites</Link><br></br>
      </div>
    </div>
  );
};

export default Navbar;
