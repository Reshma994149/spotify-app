import { songs } from "../assets/mockSongs";

export default function Genres() {
  return (
    <div className="p-6 text-white w-full">
      <h2 className="text-2xl font-bold mb-4">Genres</h2>

      {songs.map(song => (
        <p key={song.id} className="text-lg">
          {song.title} — {song.genre}
        </p>
      ))}
    </div>
  );
}
