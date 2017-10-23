import React, { Component } from 'react';
import Tile from '../components/Tile';
import TilePattern from '../TilePattern';
import { tilePreviewStyle, paginatorWrapperStyle } from '../styles/paginatorStyles';
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
    //totalPageCount - всего страниц
    return (
      <div style={paginatorWrapperStyle}>
        <PageSwitcher countDisplayedPages={5} totalPageCount={20} />
        <div style={tilePreviewStyle}>
          {
            this.state.tiles.map((tile, index) => <Tile key={index} width={tileWidth} pattern={<TilePattern tileEntity={this.state.tiles[index]}/>}/>)
          }
        </div>
        <PageSwitcher countDisplayedPages={5} totalPageCount={20} />
      </div>
    );
  }
}
export default Paginator;