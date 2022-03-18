import ImageCard from "./ImageCard";

function Records ({ id, dated, title, images,century  }) {
    return(
        <div id={id} className="records">
            <h3>Date: {dated}</h3>
            <h3>title: {title}</h3>
            <h3>century: {century}</h3>
            <div className="imageContainer">
                 {images.map(({baseimageurl, copyright, date, technique, alttext, idsid}) =>
                 
                      <ImageCard 
                      key={idsid}
                      copyright={copyright}
                      date={date}
                      technique={technique}
                      alttext={alttext}
                      baseimageurl={baseimageurl}
                      />
                 
                 )}
            </div>
        </div>
    )
}

export default Records;