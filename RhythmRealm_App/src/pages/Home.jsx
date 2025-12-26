import SongCard from "../components/SongCard";
import { songs } from "../assets/mockSongs";

export default function Home() {
  const handlePlay = (song) => {
    console.log("Playing:", song.title);
    // later connect this to global player
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>Home</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {songs.map((song) => (
          <SongCard key={song.id} song={song} onPlay={handlePlay} />
        ))}
      </div>
    </div>
  );
}
