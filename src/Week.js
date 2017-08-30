/* eslint-disable no-console */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Day from './Day';

export default class Week extends Component {
  // static propTypes = {
  // }
  // static defaultProps = {
  // }
  constructor(props) {
    super(props);
    this.state = {
      daysInWeek: 7,
    };
  }
  render() {
    const { daysInWeek: DAYS_IN_WEEK } = this.state;
    let DaysElements = [];
    for (let i = 0; i < DAYS_IN_WEEK; i++) {
      DaysElements.push(<Day key={i} />);
    }
    return (
      <div>
        {DaysElements}
      </div>
    );
  }
}
