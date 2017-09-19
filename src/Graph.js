/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Week from './Week';
import { v4 } from 'uuid';
import moment from 'moment';

export default class Graph extends Component {
  static propTypes = {
    data: PropTypes.any,
    weekCount: PropTypes.number,
    color: PropTypes.string,
    normData: PropTypes.any,
  }
  static defaultProps = {
    weekCount: 53,
    color: 'green',
  }
  constructor(props) {
    super(props);
    this.state = {
      weeks: this.createYear(),
    };
  }
  createYear(startDate) {
    const now = moment(startDate);
    const year = [];
    for (let i = 0; i < this.props.weekCount; i++) {
      year.push(
        this.createWeek(
          moment(now)
          .subtract(i, 'weeks')
          .format('YYYY-MM-DD')
        )
      );
    }
    return year;
  }
  createWeek(startDate) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      week.push({
        date: moment(startDate)
        .subtract(i, 'days')
        .format('YYYY-MM-DD'),
        value: 0,
      });
    }
    return week;
  }
  // convertHashToArr(input) {
  //   const keys = Object.keys(input);
  //   const out = keys.map(key => ({
  //     date: key,
  //     value: input[key],
  //   }));
  //   return out;
  // }
  render() {
    const styles = {
      border: '1px solid rgba(0, 0, 0, 0.1)',
      display: 'inline-block',
      width: 'auto',
    };
    return (
      <div style={styles}>
        {this.state.weeks.map((week, index) =>
          <Week
            week={this.state.weeks[index]}
            key={v4()}
            color={this.props.color}
          />
        )}
      </div>
    );
  }
}
