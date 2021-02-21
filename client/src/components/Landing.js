// import Nav from './Nav';
// import axios from 'axios';
import React from 'react';
import { connect } from "react-redux";
// import submitForm from '../apis/createLessonAPI';
import SvgIcon from './icons/SvgIcon';
import {fetchRecipes} from '../actions/index.js';

class Landing extends React.Component {
    submit = async () => {
        // let res = await submitForm.post("");

        console.log('res');
    }
    render(){
        return(
            <div style={{}}>
                <div onClick={() => this.props.fetchRecipes()}>SUBMIT</div>
                {/* <Nav></Nav> */}
            </div>
        )
    }
}

function mapStateToProps (state, ownProps){
    return {state: state};
}

export default connect(mapStateToProps, {fetchRecipes})(Landing);