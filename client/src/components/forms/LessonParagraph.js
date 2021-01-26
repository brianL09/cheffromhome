import React from 'react';
const LessonParagraphInput = ({onTextChange, index,section,keyName, isIteratable}) => {
    const renderInput = (keyName) => {
        // console.log(keyName);
        if(keyName === 'paragraphs' || keyName === "directions" || keyName === "tips"){
            return (
            <React.Fragment>
                <p>{keyName}</p>
                <textarea className="test__text-area" type="text" onChange={(e) => onTextChange(e, index, section, keyName, isIteratable)}/>
            </React.Fragment>
            );
        } else {
            return (
                <React.Fragment>
                    <p>{keyName}</p>
                    <input type="text" onChange={(e) => onTextChange(e, index, section, keyName, isIteratable)}/>
                </React.Fragment>
            )
        }
    }
    return (
        <div>
            {renderInput(keyName)}
        </div>
    )
}
export default LessonParagraphInput;