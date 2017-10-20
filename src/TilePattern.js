import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment,Label} from 'semantic-ui-react';

//шаблон, который отображается пользователем
class TilePattern extends Component {

  render() {
    const patternStyle = {
      position: 'relative',
      width: '100%',
      height: '300px',
      display: 'flex',
      alignContent: 'center',
      flexDirection: 'column'
    };
    const tileEntity = this.props.tileEntity;

    return (
      <Segment style={patternStyle}>
        <div><Label>{tileEntity.name}</Label></div>
        <br/>
        <img src={tileEntity.url} width='100%' height='auto'/>
      </Segment>
    );
  }
}

export default TilePattern;