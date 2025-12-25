import { useDispatch } from "react-redux";
import { setSong, playPause } from "../redux/slices/playerSlice";

export default function SongCard({ song }) {
  const dispatch = useDispatch();

  const playSong = () => {
    dispatch(setSong(song));
    dispatch(playPause(true));
  };

  return (
    <div className="bg-gray-800 text-white p-4 rounded-lg">
      <img src={song.img} className="rounded mb-2"/>
      <h3 className="font-bold">{song.title}</h3>
      <p>{song.artist}</p>
      <button onClick={playSong} className="mt-2 bg-green-500 px-3 py-1 rounded">
        Play
      </button>
    </div>
  );
}
