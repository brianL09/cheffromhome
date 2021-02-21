import React from 'react';
import SvgIcon from '../icons/SvgIcon';

const Modal = props => {
    return(
        <div id="modal" className="modal" onClick={() => props.toggleShow(!props.show)}>
            <div className="modal__container" onClick={(e) => e.stopPropagation()}>
            <div className="modal__button--close" onClick={() => props.toggleShow(!props.show)}><SvgIcon icon="#icon-close"/></div>
                {props.children}
            </div>
        </div> 
    )
}

export default Modal;