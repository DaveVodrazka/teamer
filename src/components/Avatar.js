import React, { useState } from 'react';

function Avatar(props) {
    const bgImage = {
        backgroundImage: `url(${props.person.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    const [active, changeActive] = useState(false);
    return(
        <div className='avatar-container' onClick={() => changeActive(!active)}>
            <div className={'avatar-holder ' + (active ? 'avatar-holder-active' : '')} style={bgImage}><h4>{props.person.name}</h4></div>
        </div>
    );
}

export default Avatar;
