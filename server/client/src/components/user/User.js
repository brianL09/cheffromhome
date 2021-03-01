import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import EditInput from '../forms/EditInput';

class User extends React.Component{
    constructor(props){
        super(props);
        this.renderContent = this.renderContent.bind(this);
        this.state = { username: "",
                        email: "",
                        _id: "",
                        password: ""                    
                    }
    }

    componentDidUpdate(){
        let { user } = this.props;
        if(this.state._id !== user._id){
            this.setState({ username: user.username,
                            email: user.email,
                            _id: user._id,
                            password: user.password
            });
        } 
    }

    componentDidMount(){
        let { user } = this.props;
        if(user){
            this.setState({
                username: user.username,
                email: user.email,
                _id: user._id,
                password: user.password
            });
        }
    }

    

    
    renderContent(section){
        let result = [];
        let { user } = this.props;
        if(section){
            for(let i = 0; i < user[section].length; i++){
                result.push(<div className="recipe-card" key={i}>
                                <div className="recipe-card__image">
                                    <img className="recipe-card__image--image" alt={user[section][i].basicInfo.thumbnail.alt} src={user[section][i].basicInfo.thumbnail.src}/>
                                </div>
                                <div className="recipe-card__content">
                                    <h3 className="heading__secondary">{user[section][i].basicInfo.title}</h3>
                                    <h4 className="heading__tertiary">{user[section][i].about.paragraphs[0]}</h4>
                                </div>
                            </div>);
            }
        } else {
            for(let key in user){
                if(typeof user[key] === "string" && key !== "_id"){
                    result.push(<EditInput value={this.state[key]} section={key} onChange={this.onInputChange} key={key}>
                                    <h3 className="heading__tertiary user__settings--edit"><span>{key}</span>: {this.state[key]}</h3>
                                </EditInput>);
                }
            }
        }
        return result;
    }

    onInputChange = (e, section) => {
        console.log(section);
        console.log(this.state[section]);
        this.setState({
            ...this.state,
            [section]: e.target.value
        });
    }
    render(){
        return(
            <React.Fragment>
            {this.state.username ?  <div className="user">
                                    <div className="user__navigation" onClick={() => console.log(this.state)}>
                                        <div className="heading">
                                            <h1 className="heading__primary">User Options Nav</h1>
                                            {this.state.email}
                                        </div>
                                    </div>
                                    <div className="user__settings">
                                        <div className="heading">
                                            <h1 className="heading__primary u-center-text">User Settings for: {this.props.user.username}</h1>
                                            <h2 className="heading__secondary u-center-text">Change your settings. Edit and Delete your recipes</h2>
                                        </div>
                                        <div className="user__setting">
                                            <div className="heading">
                                                <h1 className="heading u-center-text">Basic Info</h1>
                                            </div>
                                            <div className="user__content">
                                                {this.renderContent()}
                                            </div>
                                        </div>
                                        <div className="user__setting">
                                            <div className="heading">
                                                <h1 className="heading__primary u-center-text">Recipes</h1>
                                            </div>
                                            <div className="user__content user__content--recipes">
                                                {this.renderContent("recipes")}
                                                {this.renderContent("recipes")}
                                                {this.renderContent("recipes")}
                                                {this.renderContent("recipes")}
                                            </div>
                                        </div>
                                    </div>
                                </div> : 
                                <div><h1 className="heading__primary">You must be logged in to change your settings.</h1></div>
                            }
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return{ user: state.auth.user}
}
export default connect(mapStateToProps, actions)(User);