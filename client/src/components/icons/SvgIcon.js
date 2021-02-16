import React from 'react';
import sprite from "../../SVG/sprite.svg";

const SvgIcon = ({icon, centered}) => {
    return (
        <React.Fragment>
            <svg className={`${(centered ? "u-absolute-center" : null)} icon__${icon.slice(6)}`}>
                <use href={`${sprite}${icon}`}/>
            </svg>
        </React.Fragment>
    )
}

export default SvgIcon;
