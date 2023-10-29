import "./HomePage.css";

export default function HomePage() {
  function rotaLogin() {
    window.location.href = "/login";
  }
  return (
    <div className="containerHome">
    <button className="buttonRotaLogin" onClick={rotaLogin}>
      Login
    </button>
    </div>
  );
}
