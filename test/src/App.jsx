import { useEffect, useState } from "react";
import Info from "./component/Info";
import Records from "./component/Records"; 

import "./App.css";
import pagination from "./component/pagination";
import Pagination from "./component/pagination";

function App(){

    const [records,setRecords] = useState([]);
    const [activPage, setactivPage] = useState(1);
    const [info, setInfo] = useState({});

  const API_KEY = "67d9edc0-e6a3-11e3-9798-57275476509a";
  const  API_URL =  `https://api.harvardartmuseums.org/object?apikey=${API_KEY}&sort=rank&sortorder=asc&from=12&size=30}`;

  const array = Array.from(Array(10).keys() );
  
  useEffect(()=>{
    fetch( `${API_URL}&pange=${activPage} `).then(res => res.json()).then(data => {
      setInfo(data.info);
      setRecords(data.records);
      setactivPage(data.info.page);
    })
  },[]);


console.log({info}, {records})
  return(
    <div>
     <Info {...info} />
     {records.map(({id, dated, title, images,century }) => 
      <Records  
      key={id}
      title={title}
      dated={dated}
      images={images}
      century={century}
      />
     )}
    <Pagination
    activPage= {activPage}
    />
    </div>
  )
}



export default App