import React, { Component } from 'react';

class PageIconPattern extends Component {

  render() {
    const pageIconStyle = {
      'border': '1px solid #dcdcdc',
      'width': '30px',
      'height': '30px',
      'padding': '5px',
      'textAlign': 'center',
      'borderRight': 'none'
    };
    return (
      <div style={pageIconStyle}>
        {this.props.number}
      </div>
    );
  }
}
export default PageIconPattern;