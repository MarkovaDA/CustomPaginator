import React, { Component } from 'react';
import Paginator  from './components/Paginator';
import TilePattern from './TilePattern';


class App extends Component {
  render() {
    //пользовательский шаблон,определяющий контент одной плитки
    const tileView = <TilePattern />;
    return (

      /*
      * countInRow:кол-во плиток,подлежащих отображению в ряду
      * countOnPage:кол-во элементов, отображаемых на одной странице странице
      * dataSize: размер всего множества отображаемых объектов
      */
      <Paginator countInRow={4} countOnPage={6} tilePattern={tileView} dataSize={50} dataSource='/server/sources.json'/>
    );
  }
}

export default App;
