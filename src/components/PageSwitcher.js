import React, { Component } from 'react';
import { pageSwitcherStyle } from '../styles/paginatorStyles';
import ArrowSwitcher from './ArrowSwitcher';
import PageSwitcherUnit from './PageSwitcherUnit';
import { setCurrentPageAction } from '../actions/SetCurrentPageAction';
import { connect } from 'react-redux';
import { fill } from 'lodash';

class PageSwitcher extends Component {

  onPageSelect = (pageNumber) => {
    //pageNumber в storage
    this.props.setCurrentPage(pageNumber);
  };

  render() {
    const pages = fill(Array(this.props.countDisplayedPages),0);
    return (
        <div style={pageSwitcherStyle}>
          <ArrowSwitcher isLeft={true} />
          {
            pages.map((page,index) => <PageSwitcherUnit number={index+1} key={index} onPageSelect={this.onPageSelect} />)
          }
          <ArrowSwitcher isLeft={false} maxPageNumber={this.props.totalPageCount - this.props.countDisplayedPages}/>
        </div>
    );
  }
}
export default connect(
  state => ({}),
  dispatch => ({
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAction(pageNumber))
    }
  })
)(PageSwitcher);