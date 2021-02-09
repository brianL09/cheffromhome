import React from 'react';
import LessonParagraph from './LessonParagraph';
import SvgIcon from '../icons/SvgIcon';

const TextInput = ({section, keyName, isIteratable, onTextChange, paragraphCount, addNewInput, value}) => {
    const renderTextInput = () => {
        let inputs = [];
        if(isIteratable){
            for(let i = 0; i < paragraphCount; i++){
                inputs.push(<LessonParagraph
                                key={`${section}-${i}`}
                                section={section}
                                index={i}
                                keyName={keyName}
                                onTextChange={onTextChange}
                                isIteratable={true}
                                value={value[keyName][i] || ''}
                />);
            }
            inputs.push(<div
                         key={`${section}-${keyName}`}
                         onClick={() => addNewInput(isIteratable)}
                         className={section === "shopping" ? "icon__new icon__new--shopping" : "icon__new icon__new--paragraph" }
                         >
                            <SvgIcon icon={"#icon-add"} fill={"white"} stroke={"silver"} size={"1.5em"} centered={true}/>
                        </div>);
        } else {
            inputs.push(
                <LessonParagraph
                    key={`${section}-${keyName}`}
                    section={section}
                    keyName={keyName}
                    onTextChange={onTextChange}
                    isIteratable={false}
                    value={value[keyName]}
                />
            )
        }
        return (<div>{inputs}</div>);
    }

    return(
        <div className="input__container--text form__section--text">
            <h2 className="input__container--header">{keyName.charAt(0).toUpperCase() + keyName.slice(1)}</h2>
            {renderTextInput()}
        </div>
    )
}
export default TextInput;