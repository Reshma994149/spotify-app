/* eslint-disable react/prop-types */

const SongCard = ({ song, onPlay }) => {
  return (
    <div
      style={{
        background: "rgba(0,0,0,0.3)",
        padding: "15px",
        borderRadius: "12px",
        width: "200px",
        textAlign: "center",
        color: "white",
        backdropFilter: "blur(5px)",
      }}
    >
      <img
        src={song.image}
        alt={song.title}
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "10px",
          objectFit: "cover",
        }}
      />

      <h3>{song.title}</h3>
      <p style={{ color: "lightgray" }}>{song.artist}</p>

      <button
        onClick={() => onPlay(song)}
        style={{
          padding: "6px 15px",
          borderRadius: "8px",
          border: "none",
          cursor: "pointer",
        }}
      >
        Play
      </button>
    </div>
  );
};

export default SongCard;
