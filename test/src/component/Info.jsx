

function Info({next, page, pages, totalrecords}) {
    return(
        <div>
            <h2>Current Page: {page} </h2>
            <h2>Total Pages: {pages} </h2>
            <h2>Total Records: {totalrecords} </h2>
            <a href={next}>Get next page data</a>
        </div>
    )
}


export default Info;