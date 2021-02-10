import React from 'react';
import sprite from "../../SVG/sprite.svg";

const SvgIcon = ({size, icon, fill, centered, fillOpacity, stroke, strokeWidth}) => {
    return (
        <React.Fragment>
            <svg className={`${(centered ? "u-absolute-center" : null)} ${icon.slice(1)}`} style={{height: size, width: size, fill: fill, fillOpacity: fillOpacity, stroke: stroke, strokeWidth: strokeWidth}}>
                <use href={`${sprite}${icon}`}/>
            </svg>
        </React.Fragment>
    )
}

export default SvgIcon;
