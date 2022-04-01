import { useParams } from "react-router-dom";

function Country() {

    const params = useParams()

    
    return ( 
        <div>
           <h1>item.ccn3 {params.code}</h1>
        </div>
     );
}

export default Country;