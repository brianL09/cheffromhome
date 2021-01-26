import sprite from '../../SVG/sprite.svg';
import SvgIcon from '../icons/SvgIcon';

const PhotoInput = ({onPhotoInput, section, keyName}) => {
    return (
        <div className="input__photo" key={Math.random() * 3000}>
            {keyName}
            <label htmlFor={`${section}${keyName}`}><SvgIcon icon="#icon-photo-add" size="2em"/></label>
            <input id={`${section}${keyName}`} key={Math.random() * 3000} type="file" onChange={e => onPhotoInput(e.target.files[0], section, keyName)}/>
        </div>
    )
}

export default PhotoInput;