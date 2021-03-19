import React, {useState} from 'react';
import SVGIcon from '../icons/SvgIcon';
import EditPassword from '../forms/EditPassword';

const EditInput  = (props) => {
    const [showInput, toggleShow] = useState(false);
    const renderInput = () => {
        return <div className="input__edit">
                    <input value={props.value} onChange={(e) => props.onChange(e, props.section)}></input>
                    <div className="icon__container--edit-btn" onClick={() => toggleShow(!showInput)}><SVGIcon icon="#icon-edit"/></div>
                </div>
    }
//   console.log(this.props.id);

    return (
        <React.Fragment>
            {props.children && !props.password ?
                showInput === false ?  
                    <div className="input__edit">
                        {props.children}
                        <div className="icon__container--edit icon__container--edit-full" onClick={() => toggleShow(!showInput)}>
                            <SVGIcon icon="#icon-edit"/>
                        </div>
                    </div> 
                    :
                    renderInput()
                :
                showInput === false ? 
                    <div className="input__edit">
                        {props.children}
                        <div className="icon__container--edit icon__container--edit-full" onClick={() => toggleShow(!showInput)}><SVGIcon icon="#icon-edit"/></div>
                    </div>
                    :   
                    <React.Fragment>
                        <EditPassword setPassword={props.setPassword} id={props.id}>
                        <div className="icon__container--edit icon__container--edit-btn" onClick={() => toggleShow(!showInput)}>
                            <SVGIcon icon="#icon-edit"/>
                        </div>
                        </EditPassword>
                    </React.Fragment>
             }
        </React.Fragment>
    );
}

export default EditInput;