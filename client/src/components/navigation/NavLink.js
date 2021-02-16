import {NavLink as Link} from 'react-router-dom';
import React from 'react';
import SvgIcon from '../icons/SvgIcon';

const NavLink = ({target, label, icon}) => {
    return (
        <React.Fragment>
            <Link className="navigation__link" to={target}>
                <div className="icon__container--navigation">
                    <SvgIcon icon={`#icon-${icon}`}></SvgIcon>
                </div>
                <h3 className="navigation__link--label">{label}</h3>
            </Link>
        </React.Fragment>
    )
}

export default NavLink;