import HomePage from "./pages/HomePage";
import Countries from "./pages/Countries";
import { Route, Routes} from "react-router-dom";
import {MainLayout} from './components';
import Country from './pages/Country';
import NotFound from "./pages/NotFound";
import Favorites from "./pages/Favorites";


function App() {



  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="countries" element={<Countries />} />
          <Route path="countries/:code" element={<Country />} />
        </Route>
        <Route  path="favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />}/>
      </Routes>
    </div>
  )  
}

export default App
