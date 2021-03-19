import React from 'react';
import SvgIcon from '../icons/SvgIcon';
import { useHistory } from 'react-router-dom';

const LogOut = ({onClick, redirect}) => {
    const history = useHistory();

    const signOut = (path) => {
        if(path){
            history.push(`/${path}`)
        } else {
            console.log('no path');
            history.push('/');
        }
        onClick();
    }
    return (
        <div className="navigation__link" >
            <div className="icon__container--navigation">
                <SvgIcon icon={"#icon-logout"} />
            </div>
        <h3 className="navigation__link--label" onClick={() => signOut(redirect)}>Sign Out</h3>
    </div>
    )
}

export default LogOut;