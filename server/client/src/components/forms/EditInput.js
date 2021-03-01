import React, {useState} from 'react';
import SVGIcon from '../icons/SvgIcon';

const EditInput  = (props) => {
    const [showInput, toggleShow] = useState(false);
    const input = () => {
        return <React.Fragment><input value={props.value} onChange={(e) => props.onChange(e, props.section)}></input><div className="icon__container--edit" onClick={() => toggleShow(!showInput)}><SVGIcon icon="#icon-edit"/></div></React.Fragment>
    }
    return (
        <div className="input__edit">
            {props.children ?
                showInput === false ?  <React.Fragment>{props.children}<div className="icon__container--edit" onClick={() => toggleShow(!showInput)}><SVGIcon icon="#icon-edit"/></div></React.Fragment> : input():   
            <h1>Hello</h1>
                
             }
        </div>
    );
}

export default EditInput;