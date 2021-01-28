import React from 'react';
import LessonParagraph from './LessonParagraph';

const TextInput = ({section, keyName, isIteratable, onTextChange, paragraphCount, addNewInput}) => {
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
                />);
            }
            inputs.push(<h1
                         key={`${section}-${keyName}`}
                         onClick={() => addNewInput(isIteratable)}
                         >
                            Add New {section} {keyName}
                        </h1>);
        } else {
            inputs.push(
                <LessonParagraph
                    key={`${section}-${keyName}`}
                    section={section}
                    keyName={keyName}
                    onTextChange={onTextChange}
                    isIteratable={false}
                />
            )
        }

        return inputs;
    }

    return(
        <React.Fragment>
            {renderTextInput()}
        </React.Fragment>
    )
}
export default TextInput;