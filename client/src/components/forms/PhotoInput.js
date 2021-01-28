import SvgIcon from '../icons/SvgIcon';

const PhotoInput = ({onPhotoInput, section, keyName}) => {
    return (
        <div className="input__photo" key={Math.random() * 3000}>
            <h3 className="form__heading--secondary">Add {keyName}</h3>
            {/* ADD NEW PHOTO */}
            <label htmlFor={`${section}${keyName}`}><SvgIcon icon="#icon-photo-add" size="2em"/></label>
            <input className="form__input" id={`${section}${keyName}`} key={Math.random() * 3000} type="file" onChange={e => onPhotoInput(e.target.files[0], section, keyName)}/>
        </div>
    )
}

export default PhotoInput;