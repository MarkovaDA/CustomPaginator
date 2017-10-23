import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { switcherUnitStyle } from '../styles/paginatorStyles';
import ArrowLeftPattern from './../ArrowLeftPattern';
import ArrowRightPattern from './../ArrowRightPattern';
import * as pageSwitcherActions from '../actions/PageSwitcherActions';


class ArrowSwitcher extends Component {
  switchPage() {
    if (this.props.isLeft) {
      this.props.switchPage.doDecrement();
    }
    else {
      this.props.switchPage.doIncrement(this.props.maxPageNumber);
    }
  }

  render() {
    const pattern = this.props.isLeft ? <ArrowLeftPattern /> : <ArrowRightPattern />;

    return (
      <div style={switcherUnitStyle} onClick={() => this.switchPage()}>
        {pattern}
      </div>
    );
  }
}
export default connect(
  state => ({}),
  dispatch => ({
    switchPage: bindActionCreators(pageSwitcherActions, dispatch)
  })
)(ArrowSwitcher);