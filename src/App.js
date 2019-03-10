import React, { Component } from 'react';
import './App.scss';
import Container from './components/Container';
import ControlPanel from './components/ControlePanel';

class App extends Component {
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
        <ControlPanel />
        <Container people={people} />
      </div>
    );
  }
}

export default App;
