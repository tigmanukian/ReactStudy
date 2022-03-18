import {useState, useEffect} from 'react';


function usePagination(fetchCallback , defaultActivePage = 1) {
    const [records, setRecords] = useState([]);
    const [activePage, setActivePage] = useState(defaultActivePage);
    const [info, setInfo] = useState({});



    useEffect(() => {
        fetchCallback(activePage).then(res =>{
            setRecords(prev => [...prev, ...res.records]);
            setInfo(res.info);
        }) 
    }, [activePage]);
    return {info, records, activePage, setActivePage};  
}

export default usePagination;