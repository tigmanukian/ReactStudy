import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Countres() {


     const [getcountres, setgetcountres] = useState([]);
     const navigate  = useNavigate();

     useEffect(() => {

          fetch('https://restcountries.com/v3.1/all')
               .then(res => res.json())
               .then(res => setgetcountres(res))
     }, []);

     const handleListItemClick = (code) => () => {
          navigate(code.toLowerCase())
          
     }

     return (
          <div>
               <ul>
                    {getcountres.map(item => (
                     <li onClick={handleListItemClick(item.cca2)} key={item.ccn3}>{item.name.common}</li>
                    )
                    )}
               </ul>
          </div> 
     );
}

export default Countres;