import IngredientInput from './IngredientInput';
import PhotoInput from './PhotoInput';
import TextInput from './TextInput';
import React, { useState, useEffect } from 'react';

const RenderForm = ({state, onTextChange, onIngredientChange, onPhotoInput, addNewInput}) => {
    const [section, setSection] = useState([""]);
    const [sectionIndex, setIndex] = useState(0);

    useEffect(() => {
        let sections = [];
        for(let section in state){
            if(section !== "paragraphNumber"){
                sections = [...sections, section];
            }
        }
        setSection(sections);
    }, [sectionIndex]);

    const changeSection = (moveForward) => {
        if(sectionIndex >= section.length - 1 && moveForward){
            return setIndex(0);
        } else if(sectionIndex <= 0 && !moveForward){
            return setIndex(5);
        } else {
            moveForward ? setIndex(prevState => prevState + 1) : setIndex(prevState => prevState - 1);
        }
    }

    const renderSections = (section) => {
        let inputs = [];

        inputs.push(<div key={section} className="form__header u-margin-bottom-medium"><h1 className="form__header--primary">{section === "basicInfo" ? "BASIC INFO" : section.toUpperCase()}</h1></div>);
        for(let key in state[section]){
            var paraKey = `${section}_${key}`;
            // text input field function
            let createTextInput = (paragraphCount) => <TextInput
                                                        section={section}
                                                        key={`${section}_${key}`}
                                                        keyName={key}
                                                        isIteratable={paragraphCount}
                                                        onTextChange={onTextChange}
                                                        addNewInput={addNewInput}
                                                        paragraphCount={state.paragraphNumber[paragraphCount]}
            />
            // ingredient input field function
            const createIngredientInput = (paragraphCount) => <IngredientInput
                                                                key={`${section}_${key}`}
                                                                onIngredientChange={onIngredientChange}
                                                                addNewInput={addNewInput}
                                                                ingredients={state.recipe.ingredients}
                                                              />
            // photo input field function
            const createPhotoInput = () => <PhotoInput
                                                key={`${section}_${key}`}
                                                onPhotoInput={onPhotoInput}
                                                section={section}
                                                keyName={key}
                                            />

            if(key === "paragraphs" || key === "directions" || key === "tips" || key === "vegetable" || key === "dairy" || key === "meat" || key === "dry"){
                inputs.push(createTextInput(paraKey));
            } else if (key === "ingredients"){
                inputs.push(createIngredientInput(paraKey));
            } else if (key === "photo" || key === "photos" || key === "thumbnail"){
                inputs.push(createPhotoInput());
            } else {
                inputs.push(createTextInput());
            }
        }
        return inputs;
    }
    
    return(
        <div className="form__section">
            {renderSections(section[sectionIndex])}
            <div className="form__control">
                <h1 className="form__control--button form__control--back" style={{display: "inline-block"}} onClick={() => changeSection()}>Back</h1>
                <h1 className="form__control--button form__control--forward" style={{display: "inline-block", marginLeft: "2rem"}} onClick={() => changeSection(true)}>Forward</h1>
            </div>
        </div>
    )
}

export default RenderForm