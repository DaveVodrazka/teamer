import React, { Component } from 'react';
import './App.scss';
import Container from './components/Container';
import ControlPanel from './components/ControlePanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {active: []};
    this.handleActivate.bind(this);
  }

  handleActivate(name, active) {
    if (active) {
      this.setState((state) => {
        state.active.push(name);
        return state;
      });
    } else {
      const index = this.state.active.indexOf(name);
      if (index !== -1) {
        this.setState((state) => {
          state.active.splice(index, 1);
          return state;
        });
      }
    }
  }

  render() {
    const people = [
      {name: 'David', bg: 'https://neznam.szn.cz/media/thumbs/photos/5263.jpg.148x203_q85_crop-smart.jpg?1534250268'},
      {name: 'Pavel', bg: 'https://neznam.szn.cz/media/thumbs/photos/4162.jpg.148x203_q85_crop-smart.jpg?1537786244'},
      {name: 'Filip', bg: 'https://neznam.szn.cz/media/thumbs/photos/5069.jpg.148x203_q85_crop-smart.jpg?1512568192'},
      {name: 'Honza', bg: 'https://neznam.szn.cz/media/thumbs/photos/4878.jpg.148x203_q85_crop-smart.jpg?1506946589'},
      {name: 'Míša', bg: 'https://neznam.szn.cz/media/thumbs/photos/4615.jpg.148x203_q85_crop-smart.jpg?1517819880'},
    ];
    return (
      <div className="App">
        <ControlPanel active={this.state} />
        <Container people={people} activate={this.handleActivate.bind(this)} />
      </div>
    );
  }
}

export default App;
