/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Week from './Week';
import { v4 } from 'uuid';
// import moment from 'moment';
import dateFns from 'date-fns';

// window.dateFns = dateFns;
// window.moment = moment;

export default class Graph extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
    weekCount: PropTypes.number,
    color: PropTypes.string,
    bgColor: PropTypes.string,
    leftToRight: PropTypes.bool,
  }
  static defaultProps = {
    weekCount: 53,
    color: '#008000',
    bgColor: '#EBEDF0',
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
    // const rawDate = moment().endOf('week');
    const d = new Date();
    const rawDate = dateFns.endOfWeek(d);
    const year = [];
    for (let i = 0; i < this.props.weekCount; i++) {
      // const formattedDate = moment(rawDate)
      //   .subtract(i, 'weeks')
      //   .format('YYYY-MM-DD');
      const subbedDate = dateFns.subWeeks(rawDate, i);
      const formattedDate = dateFns.format(subbedDate, 'YYYY-MM-DD');
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
      // const rawDate = moment(startDate).subtract(i, 'days');
      const rawDate = dateFns.subDays(startDate, i);
      // const date = moment(rawDate).format('YYYY-MM-DD');
      const date = dateFns.format(rawDate, 'YYYY-MM-DD');
      // const formattedDate = rawDate.format('ddd, MMM D, YYYY');
      const formattedDate = dateFns.format(rawDate, 'ddd, MMM D, YYYY');
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
    };
    return (
      <div style={styles}>
        {this.state.weeks.map((week, index) =>
          <Week
            week={this.state.weeks[index]}
            key={v4()}
            color={this.props.color}
            bgColor={this.props.bgColor}
            maxValue={this.state.maxValue}
          />
        )}
      </div>
    );
  }
}
