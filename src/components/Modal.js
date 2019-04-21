import React from 'react';
import closeIcon from '../assets/close.svg';

function Modal(props) {
    console.log(props);

    return(
        <div className={'modal ' + (props.show ? 'show' : 'hide')}>
            <button className="close-button" onClick={props.close}>
                <img src={closeIcon} alt="close button" />
            </button>
        </div>
    );
}

export default Modal;
