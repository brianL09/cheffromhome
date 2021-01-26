import IngredientInput from './IngredientInput';
import PhotoInput from './PhotoInput';
import TextInput from './TextInput';

const RenderForm = ({state, onTextChange, onIngredientChange, onPhotoInput, addNewInput}) => {
    const renderFields = () => {
        let sections = [];

        for(let section in state){
            if(section !== "paragraphNumber"){
                sections = [...sections, section];
            }
        }
        return sections.map(section => 
            <section key={section}>
                {renderSections(section)}
            </section>
        );
    }

    const renderSections = (section) => {
        let inputs = [];
        inputs.push(<div key={section} className="form__header"><h1 className="form__header--primary">{section.toUpperCase()}</h1></div>);
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
        <div>
            {renderFields(state)}
        </div>
    )
}

export default RenderForm