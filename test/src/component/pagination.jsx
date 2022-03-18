function Pagination({activPage}) {
    let pages = Array.from(Array(5).keys());
    return ( 
    <div>
        <button>prev</button> 
        {pages.map((item) =>
         <button 
         className={activPage === item + 1 ? 'activPage': ""} 
         key={item + 1}>{item + 1}</button>)}
        <button>next</button>
    </div> 
    );
}

export default Pagination;
