/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Week from './Week';
import { v4 } from 'uuid';
import moment from 'moment';

export default class Graph extends Component {
  static propTypes = {
    weekCount: PropTypes.number,
    color: PropTypes.string,
    data: PropTypes.any,
    leftToRight: PropTypes.bool,
  }
  static defaultProps = {
    weekCount: 53,
    color: '#008000',
    leftToRight: false,
  }
  constructor(props) {
    super(props);
    this.state = {
      weeks: this.createYear(),
      maxValue: this.props.data.reduce((prev, curr) => {
        if (prev.value > curr.value) return prev.value;
        return curr.value;
      }),
    };
  }
  // init all weeks into a year array
  createYear() {
    const rawDate = moment();
    const year = [];
    for (let i = 0; i < this.props.weekCount; i++) {
      const formattedDate = moment(rawDate)
        .subtract(i, 'weeks')
        .format('YYYY-MM-DD');
      if (this.props.leftToRight) {
        year.push(this.createWeek(formattedDate));
      } else {
        year.unshift(this.createWeek(formattedDate));
      }
    }
    return year;
  }
  // init weeks to push to the year array
  createWeek(startDate) {
    const week = [];
    for (let i = 0; i < 7; i++) {
      let value;
      const rawDate = moment(startDate).subtract(i, 'days');
      const date = moment(rawDate).format('YYYY-MM-DD');
      const formattedDate = rawDate.format('ddd, MMM D, YYYY');
      // loop data from props & push to array if date matches
      this.props.data.forEach(t => {
        if (t.date === date) {
          value = t.value;
        }
      });
      const dayObj = {
        date,
        value,
        formattedDate,
      };
      if (this.props.leftToRight) {
        week.push(dayObj);
      } else {
        week.unshift(dayObj);
      }
    }
    return week;
  }
  render() {
    const styles = {
      display: 'inline-block',
      width: 'auto',
      background: '#EBEDF0',
    };
    return (
      <div style={styles}>
        {this.state.weeks.map((week, index) =>
          <Week
            week={this.state.weeks[index]}
            key={v4()}
            color={this.props.color}
            maxValue={this.state.maxValue}
          />
        )}
      </div>
    );
  }
}
