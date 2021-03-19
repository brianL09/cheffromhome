import { useState, useEffect } from 'react';
import {api} from '../../apis/index.js';
import { validation } from '../../utils/validation.js';

const EditPassword = (props, {setPassword, id}) => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword1, setNewPassword1] = useState("");
    const [newPassword2, setNewPassword2] = useState("");
    const [errorMsg, setErrorMsg] = useState("Your new password must be more than 8 characters, 1 or more capitals and number");

    useEffect(() => {
        const timerId = setTimeout(async () => {
            if(validation.password(newPassword2) && newPassword1 === newPassword2){
                const response = await api.auth.get("/verify/password", {params: {password: oldPassword, userId: props.id}});
                const updatePassword = () => {
                    props.setPassword(newPassword2);
                    setErrorMsg("");
                }
                response.data ?  updatePassword() : setErrorMsg('Incorrect old password. Try again.');
            }
        }, 1000);
    
        return () => {
          clearTimeout(timerId);
        };
    }, [newPassword1, newPassword2, oldPassword, setPassword, id]);


    return(
        <div className="input__edit input__edit--column">
            <input type="text" placeholder="Enter your old password." onChange={(e) => setOldPassword(e.target.value)}></input>
            <input type="text" placeholder="Enter a new password." onChange={(e) => setNewPassword1(e.target.value)}></input>
            {validation.password(newPassword1) ? <input type="text" placeholder="Re-enter your new password" onChange={(e) => setNewPassword2(e.target.value)}></input> : null}
            {errorMsg ? <h3>{errorMsg}</h3> : <h3>New password accepted.</h3>}
            {props.children ? props.children : null}
        </div>
    )
}

export default EditPassword;