import React from 'react';

function PlayerPortrait(props) {
    const bgImage = {
        backgroundImage: `url(${props.person.bg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    };
    return(
        <div className="player-holder" style={bgImage}>
            <div className="player-name-plate">{props.person.name}</div>
        </div>
    );
}

export default PlayerPortrait;
