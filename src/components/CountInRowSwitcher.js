import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Dropdown } from 'semantic-ui-react';
import { switchCountInRowAction } from '../actions/SwitchCountInRowAction';
import { connect } from 'react-redux';

class CountInRowSwitcher extends Component {
  state = {
    partials: [2,3,4,5,6]
  };

  render() {
    //это представить в виде шаблона, опеределить универсальный родитель
    return(
      <Dropdown text={'Параметры отображения'}>
        <Dropdown.Menu>
          {
            this.state.partials.map((partial) => <Dropdown.Item key={partial} text={`отображать по ${partial}`} value={partial} onClick={this.changeCountInRow}/>)
          }
        </Dropdown.Menu>
      </Dropdown>
    );
  }

  changeCountInRow = (event, data) => {
    this.props.updateCountInRow(data.value);
  }
}
export default connect(
  state => ({}),
  dispatch => ({
    updateCountInRow: (countInRow) => {
      dispatch(switchCountInRowAction(countInRow))
    }
  })
)(CountInRowSwitcher);