import {useState} from 'react';
import {connect} from 'react-redux';

import SvgIcon from '../icons/SvgIcon';
import ForumResponse from './ForumResponse';

const ForumPost = ({submitResponse, comment, index, user, recipe, key}) => {
    const [show, toggleShow] = useState(false);
    const [showForm, toggleForm] = useState(false);
    const [inputValue, handleInput] = useState("");

    // const submitResponse = (post, id) => {
    //     console.log()
    // }
    console.log(key);
    return (
        <div className="flex flex__wrap forum__post">
                <h1 className="col-12 forum__post--title">
                    {recipe.comments[index].post.question}
                </h1>
                <div className="forum__post--info flex col-12">
                    <div className="flex flex__column">
                        <p className="forum__post--author">Posted by: {comment.post.author}</p>
                        <p className="forum__post--posted">{comment.post.posted}</p>
                    </div>
                    <div className="forum__post--actions flex flex__justify--end">
                        <div className="flex__inline" onClick={() => toggleShow(!show)}>
                            <div className="forum__icon"><SvgIcon icon="#icon-respond"/></div>
                            
                            <p>2 answers</p>
                        </div>
                    </div>                    
                </div>
                <div className={`col-12 forum__response ${show ? "forum__response--show" : "forum__response--hide"}` }>
                    {recipe.comments[index].post.responses.map((response, index) => {
                        // return <h1>{response.response}</h1>
                        
                        return <ForumResponse response={response}key={index}/>
                    })}
                    <div className="col-12 flex flex__justify--center">
                        <div className="btn__discussion" onClick={() => toggleForm(!showForm)}>Answer</div>
                    </div>
                    <div className={`forum__response--form flex flex__wrap flex__justify--center ${showForm ? "show" : "hide"}`}>
                        <form className="col-9">
                            <p>sometext</p>
                            <textarea rows="8" className="col-12" type="text" value={inputValue} onChange={(e) => { handleInput(e.target.value)}}/>
                            <div className="col-12 flex u-padding-top-small u-padding-bottom-small flex__justify--center">
                                <div className="btn__discussion" onClick={() => {submitResponse(inputValue, comment._id, user)}}>Submit</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}

const mapStateToProps = state => {
    return { user: state.auth.user, recipe: state.recipes.recipe}
}
export default connect(mapStateToProps)(ForumPost);