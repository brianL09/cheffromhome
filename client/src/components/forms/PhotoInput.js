import SvgIcon from '../icons/SvgIcon';
import ImageBox from './ImageBox';

const PhotoInput = ({onPhotoInput, section, keyName, photo, value, currentImg}) => {

    return (
        <div className="input__photo form__section--photo" key={`${section}-${keyName}`}>
            {/* <input type="text" value={value[keyName].alt} onChange={(e) => onPhotoInput(e, section, keyName, 0, "alt")}/> */}
            {/* ADD NEW PHOTO */}
            <label className="icon__container--photo" htmlFor={`${section}${keyName}`}><SvgIcon icon="#icon-photo-add" size="2em" fill={"white"} /></label>
            {keyName === "photos" ? <input className="form__input" id={`${section}${keyName}`} key={Math.random() * 3000} type="file" onChange={e => onPhotoInput(e, section, keyName, currentImg, "src")}/> :
                                    <input className="form__input" id={`${section}${keyName}`} key={Math.random() * 3000} type="file" onChange={e => onPhotoInput(e, section, keyName, 0, "src")}/>}
            <ImageBox photo={photo} onPhotoInput={onPhotoInput} section={section} keyName={keyName}/>
        </div>
    )
}

export default PhotoInput;