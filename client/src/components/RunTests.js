import React from 'react';
import {onPhotoInput as getBase64} from './getBase64PhotoString.js';

class RunTests extends React.Component{
    state={
        photo: [
            {
                src: "ffff",
                alt: "",
            },
            {
                src: "eeeee",
                alt: "",
            }
        ]

        
    }

    onInput = (e, section, key, index) => {
        if(key === "alt"){
            let copyState = this.state[section].slice(0);
            let updatedValue = {...copyState[index]};
            updatedValue[key] = e.target.value;
            copyState[index] = updatedValue;
            this.setState({
                [section]: copyState
            });
        } else {
            const binaryImg = getBase64(e.target.files[0]);
            console.log(binaryImg);
        }
        
    }

    render(){
        return(
            <div style={{backgroundColor: "dodgerblue", width: "100vw", height: "100vh"}}>
                {/* <h3 onClick={() => {console.log(this.state.photo); console.log(this.state)}}>STATE</h3> */}
                
                <input type="file" style={{display: "block", width: "20rem", height: "20rem"}} onChange={(e) => this.onInput(e )}/> 
                <input type="text" onChange={(e) => this.onInput(e, "photo", "alt", 0 )}/>           
            </div>
        )
    }
}

export default RunTests;