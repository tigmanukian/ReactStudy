import { Link, Outlet } from "react-router-dom";

import Icon from "../icons/Icon";
import { Button } from "@mui/material";

import "./layout.css";

function Layout() {
  return (
    <div>
      <div className="container">
        <nav className="nav1">
          <div>
            <Icon />
          </div>
          <div>
            <Button variant="outlined">
              <Link to="HomePage">Home</Link>
            </Button>
            {"   "}
            <Button variant="outlined">
              <Link to="LogIn">logIn</Link>
            </Button>
            {"   "}
            <Button variant="outlined">
              <Link to="LogOut">LogOut</Link>
            </Button>
          </div>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
