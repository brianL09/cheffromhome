import React, {useState} from 'react';
import {connect} from 'react-redux';
import SVGIcon from '../icons/SvgIcon';
import * as actions from '../../actions';


const ForumResponse = ({response, id, user, editResponse}) => {
    const [editing, toggleEdit] = useState(false);
    const [inputValue, handleInput] = useState(response.response);
    const inputStyle = {
        fontFamily: "inherit",
        fontSize: "1.6rem",
        position: "absolute",
        verticalAlign: "top",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        background: "white",
        resize: "none",
    }
    const preWhite = {
        whiteSpace: "pre",
        fontSize: "1.8rem",
        overflow: "hidden",
        wordBreak: "break-all",
        background: "green",
        color: "transparent",
    }
    const label = {
        display: "inline-block",
        position: "relative",
        minWidth: "100%",
        maxWidth: "65rem",
        minHeight: "1.4em",
    }
    
    return(
        <div className="forum__response flex flex__wrap">
            {editing ? <div className="col-12" style={{position: "relative"}}>
                            <label style={label}>
                                <span style={preWhite}>{inputValue}</span>
                                <textarea style={inputStyle} resize="none" value={inputValue} onChange={(e) => handleInput(e.target.value)}></textarea>
                            </label>
                            {/* <textarea type="text" value={inputValue} onChange={(e) => handleInput(e.target.value)}/> */}
                            <div onClick={() => editResponse(id, response.id, inputValue)}>Update Post</div>
                        </div> :
                        <p className="col-12 forum__response--post">{response.response}</p>}
            <h3 className="">-{response.info.username}</h3>
            {user ?
                <React.Fragment>
                    {user._id === response.info.id ?
                    // if the user looking at the response is the same as the one who posted it allow them to edit and delete
                     <div className="flex forum__post--controls">
                         <p className="u-margin-right-medium" onClick={() => toggleEdit(!editing)}><SVGIcon icon="#icon-edit"/></p> 
                         <p>Delete</p>
                    </div> :
                     null }
                </React.Fragment> :
            null}
        </div>
    ) 
}

const mapStateToProps = state => {
    return {user: state.auth.user}
}

export default connect(mapStateToProps, actions)(ForumResponse);