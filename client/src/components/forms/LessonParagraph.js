import React from 'react';
const LessonParagraphInput = ({onTextChange, index,section,keyName, isIteratable}) => {
    const renderInput = (keyName) => {
        // console.log(keyName);
        if(keyName === 'paragraphs' || keyName === "directions" || keyName === "tips"){
            return (
            <React.Fragment>
                <h2 className="form__heading--secondary u-margin-bottom-small">{keyName}</h2>
                <textarea className="input__text" type="text" onChange={(e) => onTextChange(e, index, section, keyName, isIteratable)}/>
            </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <h2 className="form__heading--secondary u-margin-bottom-small">{keyName === "cookTime" ? "Cook Time" : keyName.charAt(0).toUpperCase() + keyName.slice(1)}</h2>
                    <input className="input__text" type="text" onChange={(e) => onTextChange(e, index, section, keyName, isIteratable)}/>
                </React.Fragment>
            )
        }
    }
    return (
        <div className="input__container--text">
            {renderInput(keyName)}
        </div>
    )
}
export default LessonParagraphInput;