import  React, {useState} from 'react';

import SvgIcon from '../icons/SvgIcon';
import Modal from '../modal/Modal';

const LogInPopup = ({signIn, register, error, name}) => {
    const [show, toggleShow] = useState(false);
    const [revealPassword, toggleReveal] = useState(false);
    const [username, usernameChange] = useState("");
    const [isRegistered, toggleLogInForm] = useState(name ? true : false);
    const [password, passwordChange] = useState("");
    const [email, emailChange] = useState("");

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
                {!isRegistered ?
                    <form className="modal__form">
                        <div className="modal__form--heading">
                            <h2 className="modal__form--heading-main">Create and Edit your Recipes</h2>
                            <h3 className="modal__form--heading-secondary">Register Today.</h3>
                            {error ? <h4 className="error">{error}</h4> : ""}
                        </div>
                        <div className="modal__form--input">
                            <input type="text" id="username" value={username} onChange={(e) => usernameChange(e.target.value)}/>
                            <label className={`${username.length > 0 ? "modal__form--label-active" : ""} modal__form--label`} htmlFor="username">Username</label>
                        </div>
                        <div className="modal__form--input">
                            <input type="text" id="email" value={email} onChange={(e) => emailChange(e.target.value)}/>
                            <label className={`${email.length > 0 ? "modal__form--label-active" : ""} modal__form--label`} htmlFor="email">E-mail</label>
                        </div>
                        <div className="modal__form--input">
                            {/* <div className="input__container--password"> */}
                                <input type={revealPassword ? "text" : "password"} id="password" value={password} onChange={(e) => passwordChange(e.target.value)}/>
                                <label className={`${password.length > 0 ? "modal__form--label-active" : ""} modal__form--label`} htmlFor="password">Password</label>
                                <div className={`${revealPassword ? "icon__container--password-dark": "icon__container--password-light"} icon__container--password`} onClick={() => toggleReveal(!revealPassword)}>
                                    <SvgIcon icon="#icon-password"/>
                                </div>
                            {/* </div> */}
                        </div>
                        <div className="modal__button--submit" onClick={() => register(email, password, username)}>
                            Sign Up
                        </div>
                        <p className="modal__button">Already Registered? <span className="modal__button--toggle" onClick={() => toggleLogInForm(!isRegistered)}>Sign In.</span></p>
                    </form>
                     : 
                     <form className="modal__form">
                        <div className="modal__form--heading">
                            <h2 className="modal__form--heading-main">Welcome Back {name}!</h2>
                            <h3 className="modal__form--heading-secondary">Enter your username and password to login.</h3>
                            {error ? <h4 className="error">{error}</h4> : ""}
                        </div>
                        <div className="modal__form--input">
                            <input type="text" id="username" value={email} onChange={(e) => emailChange(e.target.value)}/>
                            <label className={`${email.length > 0 ? "modal__form--label-active" : ""} modal__form--label`} htmlFor="username">Email</label>
                        </div>
                        <div className="modal__form--input">
                            <input type={revealPassword ? "text" : "password"} id="password"  value={password} onChange={(e) => passwordChange(e.target.value)}/>
                            <label className={`${password.length > 0 ? "modal__form--label-active" : ""} modal__form--label`} htmlFor="password">Password</label>
                            <div className={`${revealPassword ? "icon__container--password-dark": "icon__container--password-light"} icon__container--password`} onClick={() => toggleReveal(!revealPassword)}>
                                <SvgIcon icon="#icon-password"/>
                            </div>
                        </div>
                        <div className="modal__button--submit" onClick={() => signIn(email, password)}>
                            Sign In
                        </div>
                        <p className="modal__button">Not Registered?<span className="modal__button--toggle" onClick={() => toggleLogInForm(!isRegistered)}>Sign Up.</span></p>
                    </form>
                }     
            </Modal>
                    : ""}
        </React.Fragment>
    )
}


export default LogInPopup;