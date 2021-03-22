import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import EditInput from '../forms/EditInput';
import RecipeCard from '../recipes/search/RecipeCard';

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
            });
        } 
    }

    getUser = async (id) => {
        let fetchedUser = await this.props.fetchUser(id);
        return fetchedUser;
    }

    componentDidMount(){
        let { user } = this.props;
        console.log('mounted: ', user);
        if(user){          
            this.setState({
                username: user.username,
                email: user.email,
                _id: user._id,
            });
        }
    }
     
    renderContent(section){
        let result = [];
        let { user } = this.props;
        if(section){
            for(let i = 0; i < user[section].length; i++){
                result.push(<RecipeCard key={i} data={user[section][i]}/>);
            }
        } else {
            for(let key in user){
                if(typeof user[key] === "string" && key !== "_id" && key !== "password"){
                    result.push(<EditInput value={this.state[key]} id={user._id} section={key} onChange={this.onInputChange} key={key}>
                                    <h3 className="heading__secondary user__settings--edit"><span>{key}</span>: {this.state[key]}</h3>
                                </EditInput>);
                }
            }
            result.push(<EditInput id={this.state._id} password={true}  setPassword={this.setPassword} key="editPassword"><h3 className="heading__secondary user__settings--edit">Edit Password</h3></EditInput>)
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

    setPassword = (password) => {
        this.setState({
            ...this.state,
            password: password
        })
    }

    render(){
        return(
            <React.Fragment>
            {this.state.username ?
                <div className="user">
                    <div className="user__settings">
                        <div className="heading">
                            <h1 onClick={() => console.log(this.state)} className="heading__primary u-center-text">Welcome {this.state.username}</h1>
                            <h2 className="heading__tertiary u-center-text">View and modify your settings and recipes.</h2>
                        </div>
                        <div className="user__setting">
                            <div className="heading">
                                <h1 className="heading__secondary u-margin-bottom-medium u-center-text">Basic Info</h1>
                            </div>
                            <div className="user__content">
                                {this.renderContent()}
                            </div>
                        </div>
                        <div className="user__setting">
                            <div className="heading">
                                <h1 className="heading__secondary u-margin-bottom-medium u-center-text">Recipes</h1>
                            </div>
                            <div id="test" className="user__content user__content--recipes">
                                {this.renderContent("recipes")}
                            </div>
                        </div>
                    </div>
                    <div className="user__settings--btn"><h3 className="btn__submit" onClick={() => this.props.updateUser(this.state)}>Update Settings</h3></div> 
                </div>
                :
                <div>
                    <h1 className="heading__primary">You must be logged in to change your settings.</h1>
                </div>
        }
        
            </React.Fragment>
        )
    }
}
const mapStateToProps = (state) => {
    return{ user: state.auth.user}
}
export default connect(mapStateToProps, actions)(User);