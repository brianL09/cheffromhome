import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class User extends React.Component{
    constructor(props){
        super(props);

        this.renderContent = this.renderContent.bind(this);
    }
    renderContent(section){
        let result = [];
        let { user } = this.props;
        console.log(user.recipes);
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
                if(typeof user[key] === "string"){
                    result.push(<div key={key}>
                                    <h3 className="heading__tertiary"><span>{key}</span> - {user[key]}</h3>
                                </div>);
                }
            }
        }
        return result;
    }

    render(){
        return(
            <React.Fragment>
            {this.props.user ?  <div className="user" onClick={() => this.renderContent("recipes")}>
                                    <div className="user__navigation">
                                        <div className="heading">
                                            <h1 className="heading__primary">User Options Nav</h1>
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