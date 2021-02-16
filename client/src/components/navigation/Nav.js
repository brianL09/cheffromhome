import {Component} from "react";
// import {Link, NavLink} from 'react-router-dom';
import NavLink from './NavLink';
// import { useHistory } from 'react-router-dom';
import { connect } from "react-redux";
import axios from 'axios';
import * as actions from '../../actions';


const Nav = () =>{
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
            <div className="navigation">
                <div className="navigation__link--container">
                    <NavLink target="/" label="Home" icon="home"></NavLink>
                    <NavLink target="/test" label="Recipe" icon="recipe"></NavLink>
                    {/* links shown to registered users eventually */}
                    <NavLink className="navigation__link" target="/" label="Submit Recipe" icon="recipe"></NavLink>
                    <NavLink className="navigation__link" target="/" label="Edit Recipe" icon="recipe"></NavLink>    
                </div>
                <div className="navigation__search">
                    
                </div>
            </div>
        )
}

function mapStateToProps(state){
    console.log(state);
    return state;
}

export default connect(mapStateToProps, actions)(Nav);