import React from 'react';
import _ from 'lodash';

import RenderForm from './forms/RenderForm';
import { connect } from 'react-redux';
import * as actions from '../actions';

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
            beginner_photos: 0,
            photo_photos: 0,
        },
        basicInfo:{
            title: "",
            cookTime: "",
            thumbnail: {
                src: "",
                alt: "",
            },
            photo: {
                src: "",
                alt: "",
            },
        },
        about:{
            title: "",
            difficulty: 0,
            paragraphs:[],
            photo: {src: "", alt: ""},
        },
        recipe:{
            yield: 0,
            ingredients: [
                {
                    name: "",
                    quantity: "",
                    unit: "",
                    type: "",
                }
            ],
            directions: [],
            tips: []
        },
        shopping:{
            meat: [""],
            vegetable: [""],
            dairy: [""],
            dry: [""]
        },      
        beginner:{
            paragraphs:[],
            photos: [
                {src: "", alt: ""}
            ],
        },
        photo:{
            comments: [],
            photos: [
                {src: "", alt: ""}
            ],
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
            name: "",
            quantity: "",
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

onPhotoInput = (e, section, key, index, attrb) => {
    var reader = new FileReader();
    let copyState = _.cloneDeep(this.state[section]);
    let photoObj = {src: "", alt: ""};
    
    if(attrb === "alt"){
        if(key === "photos"){
            copyState[key][index][attrb] = e.target.value;
        } else {
            copyState[key][attrb] = e.target.value;
        }
        this.setState({
            [section]: copyState
        });
    } else {
        const readSuccess = (e) => {
            //convert array buffer into base64 String to be used in displaying uploaded image
            let base64String = btoa(String.fromCharCode(...new Uint8Array(e.target.result)));

            if(key === "photos"){
                // dynamically create photonumber keyname 
                let photoNum = `${section}_${key}`;
                copyState[key][index][attrb] = base64String;
                copyState[key] = [...copyState[key], photoObj];

                // set img src, and increment index states
                this.setState({
                    // ...this.state[section],
                    paragraphNumber:{
                        ...this.state.paragraphNumber,
                        [photoNum]: this.state.paragraphNumber[photoNum] + 1
                    },
                    [section]: copyState
                });
            } else { 
                copyState[key][attrb] = base64String;
                this.setState({
                    [section]: copyState
                });
            }
        };
    
        reader.onload = readSuccess;
        //get ArrayBuffer from file
        reader.readAsArrayBuffer(e.target.files[0]); 
    }

}

    render(){
        return(
            <div className="createLesson">
                <form className="form">
                    <div className="button__submit" onClick={() => this.props.submitRecipe(this.state, this.props.user)}>
                        Review and Submit
                    </div>
                    <RenderForm state={this.state} onTextChange={this.onTextChange} onIngredientChange={this.onIngredientChange} onPhotoInput={this.onPhotoInput} addNewInput={this.addNewInput}/>
                </form>
            </div>
        )
    }
}
function mapStateToProps(state){
    // console.log(state);
    return {user: state.auth.user};
}
export default connect(mapStateToProps, actions)(CreateLesson);