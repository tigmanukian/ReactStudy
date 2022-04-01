
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Layout() {
    return (
      <div>
        <h1>Welcome to the app!</h1>
        <nav>
          <Link to="/">homePage</Link>
          <br />
          <br />
          <Link to="Countres">Countres</Link>
        </nav>
        <div className="content">
          <Outlet />
        </div>
      </div>
    )

    }