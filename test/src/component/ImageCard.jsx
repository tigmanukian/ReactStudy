function ImageCard({baseimageurl, copyright, date, technique, alttext }) {
    return(
         <div className="imageName">
            <img className="imgdiv" src={baseimageurl} alt={alttext}/>
            <span>{copyright}</span>
            <span>Technique: {technique}, Date: {date} </span>

        </div>
    );
};

export default ImageCard;