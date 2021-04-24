import React from 'react';
import {connect} from 'react-redux';
import {api} from '../../apis';
import ForumPost from './ForumPost';
import ForumResponse from './ForumResponse';
import {submitQuestion, submitResponse} from '../../actions';

class Forum extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            show: null,
            inputValue: "",
            error: ""
        }
    }

  submitQuestion = (question, user, userid) => {
        if(question.length <= 15) return this.updateState("error", "Your question must be longer than 15 letters");
        if(!this.props.user) return this.updateState("error", "You must be logged in to ask a question.");
    //     this.updateState("error", "");
        let post = { 
            recipeId: this.props.recipeId,
            post: {
            author: this.props.user.username,
            userid: this.props.user._id,
            question: this.state.inputValue,
        }
    }
    console.log(post);
    this.props.submitQuestion(post);
    // api.recipes.post("/new/comment", {post});
  }

    updateState = (stateName, value, isBoolean,) => {
        if(isBoolean){
            this.setState({
                ...this.state[stateName],
                [stateName]: !this.state[stateName]
            });
        } else {
            this.setState({
                [stateName]: value
            });
        }
    }

    displayForm = () => {
        // this.state.initialLoad ? "forum__question--initialLoad" : ""} ${this.state.initialLoad ? "forum__question--initialLoad" : !this.state.initialLoad && this.state.show ? "forum__question--show" : "forum__question--hide"}
        if(this.state.show === null) return "forum__question--initialLoad";
        if(this.state.show === false) return "forum__question--hide";
        return "forum__question--show";
    }
    toggleForm = () => {
        console.log('tooggle')
        if(this.state.initialLoad){
            this.updateState("initialLoad", null, false);
            this.updateState("show", true);
        }
        this.updateState("show", null, true);
    }
    render(){
        return (
            <div className="col-10 forum">
            <div className="forum__posts">
                <div className="col-12 forum__heading">
                    <h1 className="heading u-center-text" onClick={() => console.log(this.props.comments.length)}>Join the discussion</h1>
                    <h2 className="text u-center-text"> Ask a question or help others with theirs.</h2>
                </div>
                {this.props.comments.length > 0 ? this.props.comments.map((comment, index) => {
                    return <ForumPost index={index} comment={comment} key={index} submitResponse={this.props.submitResponse} user={this.props.user}/>
                }): null}
            </div>
            <div className="flex forum__controls">
                <div className="col-12 flex flex__justify--center">
                    <div className="btn__discussion u-margin-top-medium" onClick={() => this.toggleForm()}>Ask a question</div>
                </div>
                <form className={`forum__question ${this.displayForm()}`}>
                    <input id="eeee" type="text" value={this.state.inputValue} onChange={e => this.updateState("inputValue", e.target.value)}/>
                    <label htmlFor="anon">Post Anonymously?</label>
                    <input type="radio" id="anon"/>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    <h1>f</h1>
                    length: {this.props.comments.length}
                    <div className="flex">
                        {this.state.error ? <span>{this.state.error}</span> : null}
                        <div className="forum__submit" onClick={() => this.submitQuestion(this.state.inputValue)}>Submit</div>
                    </div>
                </form> 
            </div>
        </div>
        )
    }
}

// fix the state comments object to reflect the new comments Schema
const mapStateToProps = state => {
    return {
        user: state.auth.user,
        comments: state.recipes.recipe.comments,
        recipeId: state.recipes.recipe._id,
        error: state.auth.error
    }
}
export default connect(mapStateToProps, {submitQuestion, submitResponse})(Forum);

