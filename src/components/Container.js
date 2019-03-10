import React from 'react';
import Avatar from './Avatar';

function Container(props) {
    return (
        <div className="container">
            {props.people.map((person, index) => (
                <Avatar person={person} key={index} activate={props.activate} />
            ))}
        </div>
    );
}

export default Container;
