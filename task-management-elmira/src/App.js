import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import Login from './pages/Login';
import Boards from './pages/Boards';
import Board from './pages/Board';
import { ContextProvider, defaultState, reducer } from './Contex';
import { useReducer } from 'react';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(reducer, defaultState);
  console.log('Log ::: state ::: ', state);
  return (
      <ContextProvider value={{ state, dispatch }}>
          <BrowserRouter>
                <Routes>
                    <Route path="login" element={<Login />} />
                    <Route path="/" element={<Boards />} />
                    <Route path="boards" element={<Boards />} />
                    <Route path="boards/:boardId" element={<Board />} />
                </Routes>
          </BrowserRouter>
      </ContextProvider>
  );
}

export default App;
