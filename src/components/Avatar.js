import React, { useState } from 'react';

function Avatar(props) {
    const bgImage = {
        backgroundImage: `url(${props.person.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    const [active, changeActive] = useState(false);

    return(
        <div className='avatar-container' onClick={() => {
                props.activate(props.person.name, !active);
                changeActive(!active);
            }}>
            <div
                className={'avatar-holder ' + (active ? 'avatar-holder-active' : '')}
                style={bgImage}
            >
                <div className="avatar-name-plate">{props.person.name}</div>
            </div>
        </div>
    );
}

export default Avatar;
