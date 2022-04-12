import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import './App.css';
import SingleProduct from './pages/SingleProduct';

function App() {
  return (
      <BrowserRouter>
         <Routes>
           <Route path="/"  element={<Home />}/>
           <Route path="/products"  element={<Products />}/>
           <Route path="/products/:productId"  element={<SingleProduct />}/>
         </Routes>
      </BrowserRouter>
  );
}

export default App;
