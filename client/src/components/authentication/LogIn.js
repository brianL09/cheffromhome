import  React, {useState} from 'react';

import SvgIcon from '../icons/SvgIcon';
import Modal from '../modal/Modal';
import {registerUser, logIn} from  '../../apis/authentication';

const LogIn = (props) => {
    const [show, toggleShow] = useState(true);
    const [username, usernameChange] = useState("");
    const [isLoggedIn, toggleModalForm] = useState(false);
    const [password, passwordChange] = useState("");
    const [email, emailChange] = useState("");

    let register = () => registerUser.post("", {name: username, email: email, password: password });
    let signIn = async () => {
        let response = await logIn.post("", {email: email, password: password});

        if(response.data){
            console.log('signed in');
        } else {
            console.log('not signed in');
        }
    };

    return(
        <React.Fragment>
            <div className="navigation__link" >
                <div className="icon__container--navigation">
                    <SvgIcon icon={"#icon-user_add"} />
                </div>
            <h3 className="navigation__link--label" onClick={() => toggleShow(!show)}>Sign in/Register</h3>
        </div>
        {show ?
            <Modal toggleShow={toggleShow} show={show}>
                {isLoggedIn ?
                    <form className="modal__form">
                        <div className="modal__form--heading">
                            <h2 className="modal__form--heading-main">Create and Edit your Recipes</h2>
                            <h3 className="modal__form--heading-secondary">Register Today.</h3>
                        </div>
                        <div className="modal__form--input">
                            <input type="text" id="username" value={username} onChange={(e) => usernameChange(e.target.value)}/>
                            {username.length > 0 ? null : <label className="modal__form--label" htmlFor="username">Username</label>}
                        </div>
                        <div className="modal__form--input">
                            <input type="text" id="email" value={email} onChange={(e) => emailChange(e.target.value)}/>
                            {email.length > 0 ? null : <label className="modal__form--label" htmlFor="email">E-mail</label>}
                        </div>
                        <div className="modal__form--input">
                            <input type="text" id="password" value={password} onChange={(e) => passwordChange(e.target.value)}/>
                            {password.length > 0 ? null : <label className="modal__form--label" htmlFor="password">Password</label>}
                        </div>
                        <div className="modal__button--submit" onClick={register}>
                            Sign Up
                        </div>
                        <p className="modal__button">Already Registered? <span className="modal__button--toggle" onClick={() => toggleModalForm(!isLoggedIn)}>Sign In.</span></p>
                    </form>
                     : 
                     <form className="modal__form">
                        <div className="modal__form--heading">
                            <h2 className="modal__form--heading-main">Welcome Back!</h2>
                            <h3 className="modal__form--heading-secondary">Enter your username and password to login.</h3>
                        </div>
                        <div className="modal__form--input">
                            <input type="text" id="username" value={email} onChange={(e) => emailChange(e.target.value)}/>
                            {username.length > 0 ? null : <label className="modal__form--label" htmlFor="username">Username</label>}
                        </div>
                        <div className="modal__form--input">
                            <input type="text" id="password" value={password} onChange={(e) => passwordChange(e.target.value)}/>
                            {password.length > 0 ? null : <label className="modal__form--label" htmlFor="password">Password</label>}
                        </div>
                        <div className="modal__button--submit" onClick={signIn}>
                            Sign In
                        </div>
                    </form>
                }
                
                        
            </Modal>
                    : ""}
        </React.Fragment>
    )
}

export default LogIn;