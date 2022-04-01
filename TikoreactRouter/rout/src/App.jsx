import HomePage from "./pages/homePage/HomePage";
import Countres from "./pages/game/Countres";
import { Route, Routes, Link, Outlet } from "react-router-dom";
import Layout from './Layout/Layout';
import Country from './pages/Country';

function App() {



  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="Countres/" element={<Countres />} />
          <Route path="Countres:id/" element={<Country />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
