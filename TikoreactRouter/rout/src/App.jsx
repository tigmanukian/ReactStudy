// import HomePage from "./components/homePage/HomePage";
// import Game from "./components/game/Game";
import { Route, Routes, Link } from "react-router-dom";

function App() {

  function HomePage() {
    return (
      <div>

        <h1>I am Home Page</h1>
      </div>
    );
  }

  function Game() {
    return (
      <div>
       <h1> barev</h1>
      </div>
    );
  }
  return (
    <div className="App">
      <nav>
        <Link to="/">homePage</Link>  
        <br />
        <br />
        <Link to="Game">Game</Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="Game" element={<Game />} />
      </Routes>
    </div>
  )
}

export default App
