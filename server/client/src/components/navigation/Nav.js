import React from "react";
import NavLink from './NavLink';
import LogInPopup from '../authentication/LogInPopup';
import LogOut from '../authentication/LogOut';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../../actions';
import {Cookie} from '../../utils/cookie';

class Nav extends React.Component{
    state = {
        user:  undefined,
    }

    componentDidMount(){
        // checks if a user cookie exists and signs them in
        if(Cookie.find("_id")){
            this.props.fetchUser(Cookie.find("_id"));
        }
        // this.props.fetchRecipes();
    }
    
    componentDidUpdate(){
        // causes re render on redux state change
        if(this.props.auth.user !== this.state.user){
            this.setState({user: this.props.auth.user});
        }
    }

    render(){
        return(
            <header className="navigation">
                <div className="navigation__logo"></div>
                <nav className="navigation__container">
                    <ul className="navigation__link--container">
                        <NavLink target="/" label="Home" icon="home"></NavLink>
                        <NavLink target="/recipe/123" label="About" icon="about"></NavLink>
                        <NavLink target="/recipe" label="Recipe" icon="about"/>
                        { this.props.auth.user ? <div className="drop-down">
                            <NavLink activeLink={true} target="/create" label={this.props.auth.user.username} icon="user" dropdown={true}/>
                            <ul className="drop-down__drop-down">
                                <NavLink target="/create/new" label="Create Recipe" icon="create"/>
                                <NavLink target="/user/settings" label="Settings" icon="recipe"/>
                                <LogOut loggedIn={this.props.isSignedIn} onClick={this.props.signOut}/>
                            </ul>
                        </div> : <LogInPopup signIn={this.props.signIn} register={this.props.register} name={Cookie.find("username")} error={this.props.auth.message} click={this.toggleUserStatus}/>}
                    </ul>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) =>({auth: state.auth, user: state.auth.user, recipes: state.recipes});

export default withRouter(connect(mapStateToProps, actions)(Nav));