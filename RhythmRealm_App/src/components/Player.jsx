import { useSelector } from "react-redux";

export default function Player() {
  const { currentSong, isPlaying } = useSelector((state) => state.player);

  return (
    <div className="fixed bottom-0 w-full bg-black text-white p-4">
      {currentSong ? (
        <>
          <h2>{currentSong.title} - {currentSong.artist}</h2>
          <audio src={currentSong.url} autoPlay={isPlaying} controls />
        </>
      ) : (
        "Select a song to play"
      )}
    </div>
  );
}
