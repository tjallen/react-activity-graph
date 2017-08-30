/* eslint-disable no-console */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Day from './Day';

export default class Week extends Component {
  // static propTypes = {
  // }
  // static defaultProps = {
  // }
  render() {
    const styles = {
      display: 'inline-block',
      float: 'left',
      backgroundColor: '#e0e0e0',

    };
    let DaysElements = [];
    for (let i = 0; i < this.props.days; i++) {
      DaysElements.push(<Day key={i} ></Day>);
    }
    return (
      <div style={styles}>
        {DaysElements}
      </div>
    );
  }
}
