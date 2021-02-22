import React from "react";
import NavLink from './NavLink';
import LogInPopup from '../authentication/LogInPopup';
import LogOut from '../authentication/LogOut';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import * as actions from '../../actions';



class Nav extends React.Component{
    state = {
        loggedIn: this.props.auth.isSignedIn,
    }

    componentDidUpdate(){
        if(this.props.auth.isSignedIn !== this.state.loggedIn){
            this.setState({loggedIn: this.props.auth.isSignedIn});
        }
    }

    render(){
        return(
            <header className="navigation">
                <div className="navigation__logo"></div>
                <nav className="navigation__container">
                    <ul className="navigation__link--container">
                        <NavLink target="/" label="Home" icon="home"></NavLink>
                        <NavLink target="/test" label="About" icon="about"></NavLink>
                        { this.state.loggedIn ? <div className="drop-down">
                            <NavLink activeLink={true} target="/create" label={this.props.auth.user.name} icon="user" dropdown={true}/>
                            <ul className="drop-down__drop-down">
                                <NavLink target="/create" label="Create Recipe" icon="create"/>
                                <NavLink target="/edit" label="Edit Recipes" icon="recipe"/>
                                <LogOut loggedIn={this.props.isSignedIn} click={this.props.signOut}/>
                            </ul>
                        </div> : <LogInPopup signIn={this.props.signIn} register={this.props.register} click={this.toggleUserStatus}/>}
                    </ul>
                </nav>
            </header>
        )
    }
}

const mapStateToProps = (state) => ({auth: state.auth,user: state.user});

export default withRouter(connect(mapStateToProps, actions)(Nav));