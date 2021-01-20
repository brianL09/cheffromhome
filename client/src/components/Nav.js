import {Component} from "react";
import { connect } from "react-redux";
import axios from 'axios';
import * as actions from '../actions';


class Nav extends Component{
   fetchRecipes = async () => {
        console.log('recipes');
        const lesson = await axios.get("http://localhost:5000/search");
        console.log(lesson.data);
    }

    render(){
        return(
            <div className="nav" onClick={() => this.fetchRecipes()}>
                NAVIGATION
            </div>
        )
    }
}

function mapStateToProps(state){
    console.log(state);
    return state;
}

export default connect(mapStateToProps, actions)(Nav);