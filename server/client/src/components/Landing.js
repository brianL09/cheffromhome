// import Nav from './Nav';
// import axios from 'axios';
import React from 'react';
import { connect } from "react-redux";
// import  {auth} from '../apis/authentication';
import {api} from '../apis';
// import SvgIcon from './icons/SvgIcon';
import * as actions from '../actions/index.js';

class Landing extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            msg: "hello",
        }

    }
    submit = async () => {
        // let res = await submitForm.post("");

        console.log('res');
    }

    fun = () => {
        this.setState({wow: "wowie"});
    }
    render(){
        return(
            <div onClick={() => console.log(this.state)}>
                <h1 onClick={this.fun}>
                {this.state.msg}
                </h1>
                {this.state.wow ? <h1>{this.state.wow}</h1> : <h2>No wow</h2>}
            </div>
        )
    }
}

function mapStateToProps (state, ownProps){
    return {state: state};
}

export default connect(mapStateToProps, actions)(Landing);