import { useSelector, useDispatch } from "react-redux";
import { togglePlay } from "../redux/playerSlice";
import { useEffect, useRef } from "react";

export default function GlobalPlayer() {
  const { currentSong, isPlaying } = useSelector((state) => state.player);
  const audioRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) audioRef.current.play();
    else audioRef.current.pause();
  }, [isPlaying, currentSong]);

  if (!currentSong) return null;

  return (
    <div className="playerBar">
      <audio ref={audioRef} src={currentSong.url}></audio>

      <p>{currentSong.title}</p>

      <button onClick={() => dispatch(togglePlay())}>
        {isPlaying ? "Pause" : "Play"}
      </button>
    </div>
  );
}
