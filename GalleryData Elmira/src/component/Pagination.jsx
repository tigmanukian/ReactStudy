function Pagination({activePage, changeActivePage}) {
    let pages = Array.from(Array(5).keys());
    return ( 
    <div>
        <button>prev</button> 
        {pages.map((item) => <button 
         className={activePage === item + 1 ? 'activePage': " "} 
         onClick={() => changeActivePage(item + 1)}
         key={item + 1}>{item + 1}
         </button>)}
        <button className="next">next</button>
    </div> 
    );
}

export default Pagination;
