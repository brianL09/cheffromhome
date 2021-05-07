import {useState, Component} from 'react';
import {connect} from 'react-redux';

import SvgIcon from '../icons/SvgIcon';
import ForumResponse from './ForumResponse';

const ForumPost = ({submitResponse, comment, index, user, recipe, error, key}) => {
    const [show, toggleShow] = useState(null);
    const [showForm, toggleForm] = useState(false);
    const [inputValue, handleInput] = useState("");

    const displayResponses = () => {
        if(show === null) return "forum__question--initialLoad";
        if(show === false) return "forum__response--hide";
        return "forum__response--show";
    }

    const toggleResponses = () => {
        if(show === null) return toggleShow(true);
        return toggleShow(!show);
    }

    return (
        <div className="flex flex__wrap forum__post">
                <h1 className="col-12 forum__post--title" onClick={() => console.log(recipe.comments[index].post.responses.length)}>
                    {recipe.comments[index].post.question}
                </h1>
                <div className="forum__post--info flex col-12">
                    <div className="flex flex__column">
                        <p className="forum__post--author">Posted by: {comment.post.author}</p>
                        <p className="forum__post--posted">{comment.post.posted}</p>
                    </div>
                    <div className="forum__post--actions flex flex__justify--end">
                        <div className="flex__inline" onClick={toggleResponses}>
                            <div className="forum__icon"><SvgIcon icon="#icon-respond"/></div>
                            <p>&nbsp;  {recipe.comments[index].post.responses.length} answers</p>
                        </div>
                    </div>                    
                </div>
                <div className={`col-12 ${displayResponses()}`}>
                    {recipe.comments[index].post.responses.map((response, index) => {
                        return <ForumResponse id={comment._id} response={response} key={index}/>
                    })}
                    <div className="col-12 flex flex__justify--center flex__wrap u-margin-top-small u-padding-small">
                        {/* <h2 className="col-12 u-center-text u-padding-bottom-small">Don't see your answer ?</h2> */}
                        <div className="btn__discussion btn__discussion--green" onClick={() => toggleForm(!showForm)}>Add your Answer</div>
                    </div>
                    <div className={`forum__response--form flex flex__wrap flex__justify--center ${showForm ? "show" : "hide"}`}>
                        <form className="col-9">
                            <p></p>
                            <textarea rows="8" className="col-12" type="text" value={inputValue} onChange={(e) => { handleInput(e.target.value)}}/>
                            <div className="col-12 flex flex__wrap u-padding-top-small u-padding-bottom-small flex__justify--center">
                                {error ? <h2 className="col-12 u-center-text u-margin-bottom-medium">{error}</h2> : null}
                                <div className="col-4 btn__discussion btn__discussion--green u-center-text" onClick={() => {submitResponse(inputValue, comment._id, user)}}>Submit</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return { user: state.auth.user, recipe: state.recipes.recipe, error: state.auth.message}
}
export default connect(mapStateToProps)(ForumPost);