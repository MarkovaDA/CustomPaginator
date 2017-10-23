import React, { Component } from 'react';
import jss from 'jss';
import preset from 'jss-preset-default';
import { tileBehaviourStyle, tileStyle } from '../styles/paginatorStyles';


class Tile extends Component {
  render() {
    jss.setup(preset());
    const { classes } = jss.createStyleSheet(tileBehaviourStyle).attach();

    const tileWidth = this.props.width;
    const Pattern = this.props.pattern;

    return (
      <div style={tileStyle(tileWidth)} className={`${classes.small} ${classes.medium}`}>
        {Pattern}
      </div>
    );
  }
}
export default Tile;