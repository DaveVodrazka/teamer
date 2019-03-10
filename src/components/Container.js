import React from 'react';
import Avatar from './Avatar';

function Container(props) {
    return (
        <div className="container">
            {props.bgs.map((bg, index) => (
                <Avatar bg={bg} key={index} />
            ))}
        </div>
    );
}

export default Container;
