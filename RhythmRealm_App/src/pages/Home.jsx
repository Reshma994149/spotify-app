import React from "react";
import SongCard from "../components/SongCard";

const songs = [
  {
    title: "I Love My Kitty Cat",
    artist: "Unknown",
    img: "/images/kitty.jpg",
    src: "/audio/kitty.mp3",
  },
  {
    title: "Tech House Vibes",
    artist: "Mixkit",
    img: "/images/song2.jpg",
    src: "/songs/song2.mp3",
  },
  {
    title: "Beautiful Dream",
    artist: "Mixkit",
    img: "/images/song3.jpg",
    src: "/songs/song3.mp3",
  },
  {
    title: "Valley Sunset",
    artist: "Mixkit",
    img: "/images/song4.jpg",
    src: "/songs/song4.mp3",
  },
];

const Home = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Home</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {songs.map((song, index) => (
          <SongCard key={index} song={song} />
        ))}
      </div>
    </div>
  );
};

export default Home;
