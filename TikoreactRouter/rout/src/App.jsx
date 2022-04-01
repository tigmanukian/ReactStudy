import HomePage from "./pages/homePage/HomePage";
import Countries from "./pages/game/Countries";
import { Route, Routes} from "react-router-dom";
import {MainLayout} from './components';
import Country from './pages/Country';


function App() {



  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:code" element={<Country />} />
        </Route>
      </Routes>
    </div>
  )  
}

export default App
