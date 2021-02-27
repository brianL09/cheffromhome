import React from 'react';
import SvgIcon from '../icons/SvgIcon';

const LogOut = props => {
    return (
        <div className="navigation__link" >
            <div className="icon__container--navigation">
                <SvgIcon icon={"#icon-logout"} />
            </div>
        <h3 className="navigation__link--label" onClick={() => props.click(!props.loggedIn)}>Sign Out</h3>
    </div>
    )
}

export default LogOut;