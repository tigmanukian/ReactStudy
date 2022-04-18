import { Routes, Route } from "react-router-dom";


import HomePage from "./components/HomePage";
import Layout from "./components/layouts/Layout";
import LogIn from "./components/LogIn";
import LogOut from "./components/LogOut";
import theme from "./Theme/theme";

import { ThemeProvider } from '@mui/material/styles';

import "./App.css";

function App() {



  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="HomePage" element={<HomePage />} />
            <Route path="logIn" element={<LogIn />} />
            <Route path="logOut" element={<LogOut />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
