import React, { Component } from 'react';
import Paginator  from './components/Paginator';
import TilePattern from './TilePattern';


class App extends Component {
  render() {
    //пользовательский шаблон,определяющий контент одной плитки
    const tileView = <TilePattern />;
    return (
      <Paginator countInRow={3} tilePattern={tileView} dataSource='/server/sources.json'/>
    );
  }
}

export default App;
