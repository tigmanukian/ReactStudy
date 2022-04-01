
import { Outlet } from "react-router-dom";
import Navigation from '../Navigation/Navigation';


function MainLayout() {
    return ( 
        <div>
            <Navigation />
            <div className="counter">
                <Outlet/>
            </div>
        </div>
     );
}

export default MainLayout;