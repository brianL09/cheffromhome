import React from 'react';


// import submitForm from '../apis/createLessonAPI';
// import getRecipe from '../apis/getLessonAPI';
import IngredientInput from './forms/IngredientInput';
import PhotoInput from './forms/PhotoInput';

import TextInput from './forms/TextInput';

// import PhotoBar from './PhotoBar';

class CreateLesson extends React.Component{
constructor(props){
    super(props);
    
    this.state={
        paragraphNumber: {
            abt_paragraphs: 1,
            rcp_directions: 1,
            rcp_tips: 1,
            shp_meat: 1,
            shp_vegetable: 1,
            shp_dairy: 1,
            shp_dry: 1,
            beginner: 1,
        },
        basicInfo:{
            title: null,
            cookTime: "",
            thumbnail: "",
            photo: "",
        },
        about:{
            title: "",
            difficulty: 0,
            photo: "",
            paragraphs:[],
        },
        recipe:{
            directions: [],
            yield: 0,
            tips: [],
            ingredients: [
                {
                    ingName: "",
                    quantity: 0,
                    unit: "",
                    type: "",
                }
            ]
        },
        shopping:{
            meat: [],
            vegetable: [],
            dairy: [],
            dry: []
        },      
        beginner:{
            paragraphs:[],
            photos: []
        },
        photo:{
            photos: [],
            comments: [{}]
        }
    }
}

onTextChange = (e, index,section, key, isIteratable) => {
    //updates current input state section object/key
    e.preventDefault();
    if(isIteratable){
        // Multiple Input cases
        let input = [...this.state[section][key]];
        let updatedValue = input[index];
    
        updatedValue = e.target.value;
        input[index] = updatedValue;
    
        this.setState({
            [section]: {
                ...this.state[section], 
                [key]: input
            }
        });
     } else {
        this.setState({
            [section]:{
                ...this.state[section],
                [key]: e.target.value
            }

        })
    }


}

addNewInput = (section) => {
    let number = this.state.paragraphNumber[section];
    
    if(section === "rcp_ingredients"){
        // add new instance of ingredient obj to state when adding to
        let ingObj = {
            ingName: "",
            quantity: 0,
            unit: "",
            type: ""
        }
        
        this.setState({
            recipe: {
                ...this.state.recipe,
                ingredients: [...this.state.recipe.ingredients, ingObj]
            }
        })
    } else {
        // increase selection paragraph number without removing other obj key value pairs
        this.setState(prevState => {
            return{
                paragraphNumber:{
                    ...prevState.paragraphNumber,
                    [section]: number += 1
                }
            }
        });
    }
}

onIngredientChange = (e, field, index) => {
    let input = this.state.recipe.ingredients[index];
    input[field] = e.target.value;
    this.setState({
        ingredients:{
            ...this.state.recipe,
            ingredients: input
        }
    });        
}

onPhotoInput = (file, section, key) => {
    var reader = new FileReader();

    const readSuccess = (e) => {
        //convert array buffer into base64 String to be used in displaying uploaded image
        let base64String = btoa(String.fromCharCode(...new Uint8Array(e.target.result)));
        if(key === "photos"){
            this.setState({
                [section]:{
                    [key]: [...this.state[section][key], base64String]
                }
            });
        } else { 
            console.log('else');
            this.setState({
                [section]: {
                    ...this.state[section],
                    [key]: base64String
                }
            });
        }
    };

    reader.onload = readSuccess;
    //get ArrayBuffer from file
    reader.readAsArrayBuffer(file); 
}

renderForm = (section) => {
    let inputs = [];

    for(let key in this.state[section]){
        
        let createTextElement = (paragraphCount) => <TextInput
        section={section}
        key={`${section}${key}`}
        keyName={key}
        isIteratable={paragraphCount}
        onTextChange={this.onTextChange}
        addNewInput={this.addNewInput}
        paragraphCount={this.state.paragraphNumber[paragraphCount]}  
        />;


        switch(key){
            case "paragraphs":      inputs.push(createTextElement(`abt_paragraphs`));                             
                                    break;
            case "directions":      inputs.push(createTextElement("rcp_directions"));
                                    break;
            case "tips":            inputs.push(createTextElement("rcp_tips"));
                                    break;                             
            case "vegetable":       inputs.push(createTextElement("shp_vegetable")); 
                                    break;                             
            case "dairy":           inputs.push(createTextElement("shp_dairy")); 
                                    break;
            case "dry":             inputs.push(createTextElement("shp_dry")); 
                                    break;
            case "meat":            inputs.push(createTextElement("shp_meat"));
                                    break;
            case "begParagraphs":   inputs.push(createTextElement("beg_paragraphs")); 
                                    break;
            case "ingredients":     inputs.push(<IngredientInput 
                                                    key={`${section}-${key}`} 
                                                    onIngredientChange={this.onIngredientChange} 
                                                    addNewInput={this.addNewInput}
                                                    ingredients={this.state.recipe.ingredients}/>); 
                                    break;
            case "photo":           inputs.push(<PhotoInput 
                                                    key={`${section}-${key}`} 
                                                    onPhotoInput={this.onPhotoInput}
                                                    addNewInput={this.addNewInput}
                                                    section={section} 
                                                    keyName={key}/>
                                                    );
                                    break;                                           
            case "photos":          inputs.push(<PhotoInput
                                                    key={`${section}-${key}`}
                                                    onPhotoInput={this.onPhotoInput} 
                                                    section={section} 
                                                    keyName={key}/>);
                                    break;
            case "thumbnail":       inputs.push(<PhotoInput 
                                                    key={`${section}-${key}`} 
                                                    onPhotoInput={this.onPhotoInput} 
                                                    section={section} 
                                                    keyName={key}/>);
                                    break;                                                             
            default:                inputs.push(createTextElement());
                                    break;
        }  
    }

    return inputs;
}


    render(){
        return(
            <div className="createLesson">
                <div style={{fontSize: "3rem", border: ".1rem solid black", display: "inline-block"}} onClick={this.onTest}>POST</div>
                <div style={{fontSize: "3rem", border: ".1rem solid black", display: "inline-block"}} onClick={this.onTestGet}>GET</div>
                <div style={{fontSize: "3rem", border: ".1rem solid black", display: "inline-block"}} onClick={() => console.log(this.state)}>Show State</div>
                <form className="lesson__form">
                    <section>
                        <h1>Basic Info</h1>
                        {this.renderForm('basicInfo')}
                    </section>
                    <section>
                        <h1>About</h1>
                        {this.renderForm('about')}
                        <img style={{width: "10rem", height: "10rem"}} src={`data:image/png;base64, ${this.state.photoTest}`} alt="not loaded"/>
                    </section>
                    <section>
                        <h1>Recipe</h1>
                        {this.renderForm('recipe')}
                    </section>
                    <section>
                        <h1>Beginner</h1>
                        {this.renderForm('beginner')}
                    </section>
                    <section>
                        <h1>Shopping List</h1>
                        {this.renderForm('shopping')}
                    </section>
                </form>
            </div>
        )
    }
}

export default CreateLesson;