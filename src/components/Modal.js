import React from 'react';
import PlayerPortrait from './PlayerPortrait';
import closeIcon from '../assets/close.svg';

function Modal(props) {
    if(props.people && props.people.length > 3) {
        return(
            <div className={'modal ' + (props.show ? 'show' : 'hide')}>

                <button className="close-button" onClick={props.close}>
                    <img src={closeIcon} alt="close button" />
                </button>

                <div className="team-holder blue">
                    <PlayerPortrait person={props.people[0]} />
                    <PlayerPortrait person={props.people[1]} />
                </div>
                <div className="team-holder red">
                    <PlayerPortrait person={props.people[2]} />
                    <PlayerPortrait person={props.people[3]} />
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Modal;
