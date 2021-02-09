import React from 'react';
const LessonParagraphInput = ({onTextChange, index,section,keyName, isIteratable, value}) => {
    const renderInput = (keyName) => {
        // console.log(value);
        if(keyName === 'paragraphs' || keyName === "directions" || keyName === "tips"){
            return (
            <React.Fragment>
                <textarea className="input__text" type="text" value={value} onChange={(e) => onTextChange(e, index, section, keyName, isIteratable)}/>
            </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <input className="input__text" type="text" value={value} onChange={(e) => onTextChange(e, index, section, keyName, isIteratable)}/>
                </React.Fragment>
            )
        }
    }
    return (
        <React.Fragment>
            {renderInput(keyName)}
        </React.Fragment>
    )
}
export default LessonParagraphInput;