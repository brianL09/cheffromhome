import { useState } from "react";
// import {Link, NavLink} from 'react-router-dom';
import NavLink from './NavLink';
import LogIn from '../authentication/LogIn';
import LogOut from '../authentication/LogOut';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import axios from 'axios';
import * as actions from '../../actions';


const Nav = () =>{
    const [isLoggedIn, toggleUserStatus ] = useState(false);
    // const history = useHistory();

    // const handleClick = (path) => {
    //     history.push("/test");
    // }
//    fetchRecipes = async () => {
//         console.log('recipes');
//         const lesson = await axios.get("http://localhost:5000/search");
//         console.log(lesson.data);
//     }
        return(
            <header className="navigation">
                <div className="navigation__logo"></div>
                <nav className="navigation__container">
                    <ul className="navigation__link--container">
                        <NavLink target="/" label="Home" icon="home"></NavLink>
                        <NavLink target="/test" label="About" icon="about"></NavLink>
                        {/* links shown to registered users eventually */}
                        { isLoggedIn ? <div className="drop-down">
                            <NavLink target="/create" label="Brian" icon="user" dropdown={true}/>
                            <ul className="drop-down__drop-down">
                                <NavLink target="/create" label="Create Recipe" icon="create"/>
                                <NavLink target="/edit" label="Edit Recipes" icon="recipe"/>
                                <LogOut loggedIn={isLoggedIn} click={toggleUserStatus}/>
                            </ul>
                        </div> : <LogIn loggedIn={isLoggedIn} click={toggleUserStatus}/>}
                    </ul>
                </nav>
            </header>
        )
}

function mapStateToProps(state){
    // console.log(state);
    return state;
}

export default withRouter(connect(mapStateToProps, actions)(Nav));