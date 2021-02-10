import React, { useState, useEffect } from 'react';
import IngredientInput from './IngredientInput';
import PhotoInput from './PhotoInput';
import TextInput from './TextInput';
import SvgIcon from '../icons/SvgIcon';

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
        //select specific section for dev
        // setIndex(2);
    }, [sectionIndex, state]);

    const changeSection = (moveForward) => {
        if(sectionIndex >= section.length - 1 && moveForward){
            return setIndex(0);
        } else if(sectionIndex <= 0 && !moveForward){
            return setIndex(section.length - 1);
        } else {
            moveForward ? setIndex(prevState => prevState + 1) : setIndex(prevState => prevState - 1);
        }
    }

    const renderSection = (section) => {
        let inputs = [];
        // console.log(state.paragraphNumber);
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
            value={state[section]}
            />
            // ingredient input field function
            const createIngredientInput = (paragraphCount) => <IngredientInput
            key={`${section}_${key}`}
            onIngredientChange={onIngredientChange}
            addNewInput={addNewInput}
            ingredients={state.recipe.ingredients}
            value={state[section]}
            />
            // photo input field function
            const createPhotoInput = (photoCount) => <PhotoInput
            key={`${section}_${key}`}
            onPhotoInput={onPhotoInput}
            section={section}
            keyName={key}
            photo={state[section][key]}
            value={state[section]}
            currentImg={state.paragraphNumber[photoCount]}
            />
            
            if(key === "paragraphs" || key === "directions" || key === "tips" || key === "vegetable" || key === "dairy" || key === "meat" || key === "dry"){
                inputs.push(createTextInput(paraKey));
            } else if (key === "ingredients"){
                inputs.push(createIngredientInput(paraKey));
            } else if (key === "photo" || key === "photos" || key === "thumbnail"){
                inputs.push(createPhotoInput(paraKey));
            } else {
                inputs.push(createTextInput());
            }
        }
        
        return inputs;
    }
    
    return(
        <div className="form__section">
            <div className="form__control">
                <h1 className="form__control--button  form__control--back" style={{display: "inline-block"}} onClick={() => changeSection()}><SvgIcon icon={"#icon-arrow-left"} size={"1em"} fill={"white"} centered={true}/></h1>
                <h1 className="form__control--button form__control--forward" style={{display: "inline-block", marginLeft: "2rem"}} onClick={() => changeSection(true)}><SvgIcon icon={"#icon-arrow-right"} size={"1em"} fill={"white"} centered={true}/></h1>
            </div>
            {renderSection(section[sectionIndex])}
        </div>
    )
}

export default RenderForm