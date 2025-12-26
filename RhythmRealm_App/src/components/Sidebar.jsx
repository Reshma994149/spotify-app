import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        padding: "20px",
        color: "white",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>VibeVerse</h2>

      <ul style={{ listStyle: "none", padding: 0, lineHeight: "35px" }}>

        {/* HOME */}
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "white" : "#00ffea", // active highlight + base color
              fontWeight: "bold",
              textDecoration: "none",
              transition: "0.3s",
            })}
            onMouseOver={(e) => (e.target.style.color = "white")} // hover
            onMouseOut={(e) =>
              (e.target.style.color =
                window.location.pathname === "/" ? "white" : "#00ffea")
            }
          >
            Home
          </NavLink>
        </li>

        {/* TRENDING */}
        <li>
          <NavLink
            to="/trending"
            style={({ isActive }) => ({
              color: isActive ? "white" : "#ff0080",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "0.3s",
            })}
            onMouseOver={(e) => (e.target.style.color = "white")}
            onMouseOut={(e) =>
              (e.target.style.color =
                window.location.pathname === "/trending" ? "white" : "#ff0080")
            }
          >
            Trending
          </NavLink>
        </li>

        {/* GENRES */}
        <li>
          <NavLink
            to="/genres"
            style={({ isActive }) => ({
              color: isActive ? "white" : "#ffd700",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "0.3s",
            })}
            onMouseOver={(e) => (e.target.style.color = "white")}
            onMouseOut={(e) =>
              (e.target.style.color =
                window.location.pathname === "/genres" ? "white" : "#ffd700")
            }
          >
            Genres
          </NavLink>
        </li>

        {/* FAVORITES */}
        <li>
          <NavLink
            to="/favorites"
            style={({ isActive }) => ({
              color: isActive ? "white" : "#7fff00",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "0.3s",
            })}
            onMouseOver={(e) => (e.target.style.color = "white")}
            onMouseOut={(e) =>
              (e.target.style.color =
                window.location.pathname === "/favorites" ? "white" : "#7fff00")
            }
          >
            Favorites
          </NavLink>
        </li>

      </ul>
    </div>
  );
}
