import React, { Component } from 'react';
import './App.scss';
import Container from './components/Container';
import ControlPanel from './components/ControlePanel';
import playerList from './assets/playerList.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {active: []};
    this.handleActivate.bind(this);
  }

  handleActivate(person, active) {
    if (active) {
      this.setState((state) => {
        state.active.push(person);
        return state;
      });
    } else {
      const index = this.state.active.findIndex(active => active.id === person.id);
      if (index !== -1) {
        this.setState((state) => {
          state.active.splice(index, 1);
          return state;
        });
      }
    }
  }

  render() {
    const people = playerList;
    return (
      <div className="App">
        <ControlPanel active={this.state} />
        <Container people={people} activate={this.handleActivate.bind(this)} />
      </div>
    );
  }
}

export default App;
