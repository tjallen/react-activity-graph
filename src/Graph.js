/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Week from './Week';
import {
  format,
  subDays,
  subWeeks,
  endOfWeek
} from 'date-fns';
import './Graph.css';

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeks: this.createYear(),
      maxValue: this.props.data.reduce((prev, curr) => {
        if (prev.value > curr.value) return prev.value;
        return curr.value;
      }, 0),
    };
  }
  // init all weeks into a year array
  createYear() {
    const { endDate, weekCount, leftToRight } = this.props;
    const rawDate = endOfWeek(endDate);
    const year = [];
    for (let i = 0; i < weekCount; i++) {
      const subbedDate = subWeeks(rawDate, i);
      const formattedDate = format(subbedDate, 'YYYY-MM-DD');
      if (leftToRight) {
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
      const rawDate = subDays(startDate, i);
      const date = format(rawDate, 'YYYY-MM-DD');
      const formattedDate = format(rawDate, 'ddd, MMM D, YYYY');
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
      margin: '5px',
    };
    return (
      <div style={styles} className="root">
        {this.state.weeks.map((week, index) =>
          <Week
            className="week"
            week={this.state.weeks[index]}
            key={index}
            color={this.props.color}
            bgColor={this.props.bgColor}
            maxValue={this.state.maxValue}
          />
        )}
      </div>
    );
  }
}

Graph.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  weekCount: PropTypes.number,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  leftToRight: PropTypes.bool,
  endDate: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string, // TODO validator for YYYY-MM-DD
  ]),
};

Graph.defaultProps = {
  weekCount: 53,
  color: '#008000',
  bgColor: '#EBEDF0',
  leftToRight: false,
  endDate: new Date(),
};
