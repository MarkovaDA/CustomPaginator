import React, { Component } from 'react';
import Tile from '../components/Tile';
import TilePattern from '../TilePattern';
import { paginatorPreviewStyle, pageSwitcherStyle } from '../styles/paginatorStyles';
import PageSwitcher from "./PageSwitcher";

class Paginator extends Component {
  state = {
    tiles: []
  };

  componentDidMount() {
    this.getSourceForTiles();
  }

  getSourceForTiles() {
    fetch(this.props.dataSource)
      .then((response) => response.json())
      .then((tiles) => {
        this.setState({
          tiles: tiles
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const tileWidth = 100/this.props.countInRow - 1;//размер одного тайла

    return (
        <div style={paginatorPreviewStyle}>
          <PageSwitcher countDisplayedPages={5}/>
          {
            this.state.tiles.map((tile, index) => <Tile key={index} width={tileWidth} pattern={<TilePattern tileEntity={this.state.tiles[index]}/>}/>)
          }
          <PageSwitcher countDisplayedPages={5}/>
        </div>
    );
  }
}
export default Paginator;