import React, { Component } from 'react';

import Modal from './Modal';
import shuffle from '../helpers/shuffle';

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = props.active;
        this.state.modal = false;
    }

    pickTeams(people) {
        if (this.state.active.length < 4) return;
        const res = shuffle(people);
        console.log(`Blue team is ${res[0]} and ${res[1]}.\nRed team is ${res[2]} and ${res[3]}.`);
        this.setState({
            modal: true,
            people: res,
        })
    }
    
    render() {
        return (
            <>
                <div className="control-panel-container">
                    <button
                        className={'pickbutton ' + (this.state.active.length >= 4 ? 'pickbutton-active' : '')}
                        onClick={() => this.pickTeams(this.state.active)}
                    >
                        Team It!
                    </button>
                </div>
                <Modal show={this.state.modal} people={this.state.people} />
            </>
        );
    }
}

export default ControlPanel;
