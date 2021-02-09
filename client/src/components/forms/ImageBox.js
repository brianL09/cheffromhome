const ImageBox = ({photo, onPhotoInput, section, keyName}) => {
    const renderPhoto = (image) => {
        let result = [];
        
        if(!Array.isArray(image)){
            result.push(<div className="images-form__image-box" key={photo.src.slice(0, 9)}>
                            <div className="images-form__container--input" >
                                {photo.alt.length > 0 ? <h2>{photo.alt.length}</h2> : <h2 className="form__header--secondary">Briefly describe the image</h2>} 
                                <input className="images-form__input" type="text" onChange={(e) => onPhotoInput(e, section, keyName, 0, "alt")}/>
                            </div>
                            <div className="images-form__container--image">
                                <img className="images-form__image" alt="wowie" src={`data:image/png;base64, ${photo.src}`}/>
                            </div>
                        </div>);
        } else {
            photo.map((img, index)=> {
                return result.push(
                    <div className="images-form__image-box" key={img.src.slice(0,9), index}>
                        <div className="images-form__container--input">
                            {img.alt.length > 0 ? <h2 className="form__header--secondary"></h2> : <h2 className="form__header--secondary">Briefly describe the image</h2>} 
                            <input type="text" className="images-form__input" onChange={(e) => onPhotoInput(e,section,keyName, index, "alt")}/>
                        </div>
                        <div className="images-form__container--image">
                            <img className="images-form__image" src={`data:image/png;base64, ${img.src}`} alt={img.src || ''}/>
                        </div>
                    </div>
                )
            })

            //prevent empty img object from rendering (from passed down state)
            result.splice(-1);
        }
        
        return result
        
    }
    return (
        <div className="images-form">
            {photo.src ||(photo[0] !== undefined && photo[0].src.length !== 0) ? renderPhoto(photo) : <h2>Please Select an Image</h2>}
        </div>
    )
}

export default ImageBox;