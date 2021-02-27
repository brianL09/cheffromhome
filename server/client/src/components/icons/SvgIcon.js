import React from 'react';
import sprite from "../../SVG/sprite.svg";

const SvgIcon = ({icon, centered, path, activeLink}) => {
    let urlPath = window.location.pathname;
    return ( 
        <React.Fragment>
            <svg className={`${urlPath === path || activeLink ? "navigation__link--active" : ""} ${(centered ? "u-absolute-center" : "")} icon__${icon.slice(6)}`}>
                <use href={`${sprite}${icon}`}/>
            </svg>
        </React.Fragment>
    )
}

export default SvgIcon;
