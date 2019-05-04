import React from 'react';
import PlayerPortrait from './PlayerPortrait';

import closeIcon from '../assets/close.svg';

function result(results) {
    const blueTeam = {
        playerOne: results[0],
        playerTwo: results[1],
    }
    const redTeam = {
        playerOne: results[2],
        playerTwo: results[3],
    }
    console.log(blueTeam);
    console.log(redTeam);
}

function Modal(props) {
    if(props.people && props.people.length > 3) {
        return(
            <div className={'modal ' + (props.show ? 'show' : 'hide')}>
                <div className="modal-button-holder">
                    <button className="close-button" onClick={props.close}>
                        <img src={closeIcon} alt="close button" />
                    </button>
                    <button className="result-button" onClick={() => result(props.people)}>
                        Result
                    </button>
                </div>
 

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
