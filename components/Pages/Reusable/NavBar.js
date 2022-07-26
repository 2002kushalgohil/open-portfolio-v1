export default function NavBar({ mode, setMode }) {
  return (
    <nav>
      <a href="#home" className="navHeading">
        <h2>Kushal</h2>
      </a>

      <img
        onClick={() => {
          const data = mode == "" ? "darkMode" : "";
          setMode(data);
        }}
        src={`icons/${mode == "" ? "Moon.svg" : "Sun.svg"}`}
        className="navBarModeImg"
        alt="Mode"
      />
    </nav>
  );
}
