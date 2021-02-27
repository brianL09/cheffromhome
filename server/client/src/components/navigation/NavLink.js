import {NavLink as Link} from 'react-router-dom';
import React from 'react';
import SvgIcon from '../icons/SvgIcon';

const NavLink = ({target, label, icon, dropdown, activeLink}) => {

    return (
        <li >
            <Link className={`navigation__link`} exact activeClassName="navigation__link--active" to={target}>
                <div className="icon__container--navigation">
                    <SvgIcon activeLink={activeLink} icon={`#icon-${icon}`} path={target}></SvgIcon>
                </div>
                <h3 className="navigation__link--label">{label}</h3>
            </Link>
        </li>
    )
}

export default NavLink;