const PhotoInput = ({onPhotoInput, section, keyName}) => {
    // console.log('photoinput: ', section, keyName);
    return (
        <div key={Math.random() * 3000}>
            {keyName}
            <input key={Math.random() * 3000} type="file" onChange={e => onPhotoInput(e.target.files[0], section, keyName)}/>
        </div>
    )
}

export default PhotoInput;