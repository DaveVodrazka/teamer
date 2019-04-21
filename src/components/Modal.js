import React from 'react';

function Modal(props) {
    console.log(props);

    return(
        <div className={'modal ' + (props.show ? 'show' : 'hide')}>
        </div>
    );
}

export default Modal;
