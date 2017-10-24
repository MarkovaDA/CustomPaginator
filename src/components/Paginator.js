import React, { Component } from 'react';
import Tile from '../components/Tile';
import TilePattern from '../TilePattern';
import { connect } from 'react-redux';
import { tilePreviewStyle, paginatorWrapperStyle } from '../styles/paginatorStyles';
import PageSwitcher from "./PageSwitcher";

class Paginator extends Component {
  state = {
    tiles: []
  };

  componentDidMount() {
    this.getSourceForTiles(0, this.props.countOnPage);
  }

  componentWillReceiveProps(props) {
    this.getSourceForTiles(props.currentPage - 1, this.props.countOnPage);
  }

  getSourceForTiles(pageNumber, portionSize) {
    fetch(this.props.dataSource)
      .then((response) => response.json())
      .then((tiles) => {
        console.log(pageNumber*portionSize, (pageNumber + 1)*portionSize);
        this.setState({
          tiles: tiles.slice(pageNumber*portionSize, (pageNumber + 1)*portionSize)
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    const tileWidth = 100/this.props.countInRow - 1;//размер одного тайла
    const pageCount = Math.ceil(this.props.dataSize / this.props.countOnPage);

    return (
      <div style={paginatorWrapperStyle}>
        <PageSwitcher countDisplayedPages={5} totalPageCount={pageCount} />
        <div style={tilePreviewStyle}>
          {
            this.state.tiles.map((tile, index) => <Tile key={index} width={tileWidth} pattern={<TilePattern tileEntity={this.state.tiles[index]}/>}/>)
          }
        </div>
        <PageSwitcher countDisplayedPages={5} totalPageCount={pageCount} />
      </div>
    );
  }
}
export default connect(
  state =>({
    currentPage: state.currentPage
  })
)(Paginator);