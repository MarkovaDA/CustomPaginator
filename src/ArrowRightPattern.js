import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Icon } from 'semantic-ui-react';

class ArrowRightPattern extends Component {
  render() {
    const pageIconStyle = {
      'border': '1px solid #dcdcdc',
      'width': '30px',
      'height': '30px',
      'padding': '5px',
      'textAlign': 'center',
      'borderRadius': '2px',
      'backgroundColor': '#dce0e0'
    };
    return (
      <div style={pageIconStyle}>
          <Icon name='angle double right' />
      </div>
    );
  }
}
export default ArrowRightPattern;