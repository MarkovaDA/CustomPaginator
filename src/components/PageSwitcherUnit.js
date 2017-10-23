import React, { Component } from 'react';
import PageIconPattern from './../PageIconPattern';
import { connect } from 'react-redux';
import jss from 'jss';
import preset from 'jss-preset-default';
import { pageIconStyle } from '../styles/paginatorStyles';


class PageSwitcherUnit extends Component {
  state = {
    number: 0
  };

  componentWillReceiveProps(props) {
    //props.currentPage
    this.setState({
      number: props.number + props.delta
    });

  }
  componentDidMount() {
    this.setState({
      number: this.props.number
    });
  }

  render() {
    jss.setup(preset());
    const { classes } = jss.createStyleSheet(pageIconStyle).attach();
    let unitStyle = `${classes.normal}`;

    if (this.state.number === this.props.currentPage) {
      console.log('unitStyle');
      unitStyle += ` ${classes.selection}`;
    }

    return (
      <div className={unitStyle} onClick={() => this.props.onPageSelect(this.state.number)}>
        <PageIconPattern number = {this.state.number} />
      </div>
    );
  }
}
export default connect(
  state => ({
    delta: state.delta,
    currentPage: state.currentPage
  }),
  dispatch => ({

  }))(PageSwitcherUnit);
//export default PageSwitcherUnit;
