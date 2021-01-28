import React from 'react';
import RenderForm from './forms/RenderForm';

class CreateLesson extends React.Component{
constructor(props){
    super(props);
    
    this.state={
        paragraphNumber: {
            about_paragraphs: 1,
            recipe_directions: 1,
            recipe_tips: 1,
            shopping_meat: 1,
            shopping_vegetable: 1,
            shopping_dairy: 1,
            shopping_dry: 1,
            beginner_paragraphs: 1,
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
            console.log('if');
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

    render(){
        return(
            <div className="createLesson">
                <div style={{fontSize: "3rem", border: ".1rem solid black", display: "inline-block"}} onClick={() => RenderForm(this.state)}>POST</div>
                <div style={{fontSize: "3rem", border: ".1rem solid black", display: "inline-block"}} onClick={this.onTestGet}>GET</div>
                <div style={{fontSize: "3rem", border: ".1rem solid black", display: "inline-block"}} onClick={() => console.log(this.state)}>Show State</div>
                <form className="form">
                    <RenderForm state={this.state} onTextChange={this.onTextChange} onIngredientChange={this.onIngredientChange} onPhotoInput={this.onPhotoInput} addNewInput={this.addNewInput}/>
                </form>
            </div>
        )
    }
}

export default CreateLesson;