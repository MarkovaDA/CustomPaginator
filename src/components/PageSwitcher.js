import React, { Component } from 'react';
import { pageSwitcherStyle } from '../styles/paginatorStyles';
import { fill } from 'lodash';

class PageSwitcher extends Component {

  render() {
    const switcherUnitStyle = {
      'width': '35px',
      'height': '40px',
      'border': '1px solid silver',
      'text-align': 'center'
    };
    const pages = fill(Array(this.props.countDisplayedPages),0);
    return (
      <div style={pageSwitcherStyle}>
        {
          pages.map((page,index) => <div style={switcherUnitStyle}>{index + 1}</div>)
        }
      </div>
    );
  }
}
export default PageSwitcher;