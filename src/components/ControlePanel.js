import React, { Component } from 'react';

class ControlPanel extends Component {
    constructor(props) {
        super(props);
        this.state = props.active;
    }
    
    render() {
        return (
            <div className="control-panel-container">
                <button className={'pickbutton ' + (this.state.active.length === 4 ? 'pickbutton-active' : '')}>Team It!</button>
            </div>
        );
    }
}

export default ControlPanel;
