import { useEffect, useState } from "react";
import Info from "./component/Info";
import Records from "./component/Records"; 
import { fetchGalleryData } from "./hooks/utils/fetchGalleryData";

import Pagination from "./component/Pagination";


import "./App.css";
import usePagination from "./hooks/usePagination";

function App(){


const {info, records, activePage, setActivePage} = usePagination(fetchGalleryData)


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
    activePage={activePage}
    changeActivePage={setActivePage}
    />
    </div>
  )
}



export default App