/* eslint-disable no-console */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Week from './Week';

export default class Graph extends Component {
  // static propTypes = {
  // }
  // static defaultProps = {
  // }
  constructor(props) {
    super(props);
    this.state = {
      weeks: 53,
      daysInWeek: 7,
    };
  }
  render() {
    let WeekElements = [];
    for (let i = 0; i < this.state.weeks; i++) {
      WeekElements.push(<Week key={i} days={this.state.daysInWeek} />);
    }
    return (
      <div>
       {WeekElements} 
      </div>
    );
  }
}
