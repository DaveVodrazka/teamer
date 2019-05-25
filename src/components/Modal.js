import React, { useState } from 'react';
import PlayerPortrait from './PlayerPortrait';
import closeIcon from '../assets/close.svg';

function sendScore(score, players, done) {
    if (score.red === 0 && score.blue === 0) {
        // No score input
        return null;
    }
    const result = {
        bluePlayers: [players[0], players[1]],
        redPlayers: [players[2], players[3]],
        blueScore: score.blue,
        redScore: score.red
    }
    if (score.blue > score.red) {
        result.winner = 'blue';
    } else if (score.blue < score.red) {
        result.winner = 'red';
    } else if (score.blue === score.red) {
        result.winner = 'draw';
    }
    score.blue = '';
    score.red = '';

    // TODO: send data logic
    console.log(result);
    done();
}

function Modal(props) {
    const [showRes, changeVis] = useState(false);
    const [score, changeScore] = useState({blue: '', red: ''});

    if(props.people && props.people.length > 3) {
        return(
            <div className={'modal ' + (props.show ? 'show' : 'hide')}>
                <div className="modal-button-holder">
                    <button className="close-button" onClick={props.close}>
                        <img src={closeIcon} alt="close button" />
                    </button>
                    <button className="result-button" onClick={() => {
                        if (showRes) {
                            sendScore(score, props.people, props.close);
                        }
                        changeVis(!showRes);
                    }}>
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

                <div className={'result ' + (showRes ? 'show' : 'hide')}>
                    <div className='left-one'>
                        <input className='score-input' type="number" value={score.blue} onChange={(event) => changeScore({blue: parseInt(event.target.value), red: score.red})} />
                    </div>
                    <div className='right-one'>
                        <input className='score-input' type="number" value={score.red} onChange={(event) => changeScore({blue: score.blue, red: parseInt(event.target.value)})} />
                    </div>
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Modal;
