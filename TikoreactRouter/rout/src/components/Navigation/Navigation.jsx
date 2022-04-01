
import { Link } from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <nav>
                <Link to="/">HomePage</Link>
                <br />
                <br />                
                <Link to="countries">Countres</Link>
            </nav>
        </div>
    )
} 