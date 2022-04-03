
import { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';

export default function Navigation() {
    const [code, setcode] = useState('');
    const [isFormVisible, setisFormVisible] = useState(false);
    const navigate = useNavigate();

    const handleFavoriteClick = () => {
        setisFormVisible(true);
    }
    const formSubmit = (e) => {
        e.preventDefault();
        navigate("/favorites", { state: { code: "1234" } })
    };

    return (
        <div>
            <nav>
                <Link to="/">HomePage</Link>
                <br />
                <br />
                <Link to="countries">Countres</Link>
                <br />
                <div onClick={handleFavoriteClick}>favorites</div>
               
                {isFormVisible ? (
                    <form onSubmit={formSubmit}>
                        <input 
                        type="text"
                        value={code}
                        onChange={(e) => {
                            setcode(e.target.value)
                        }} />
                    </form>
                ): null}

            </nav>
        </div>
    )
} 