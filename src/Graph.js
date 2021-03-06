import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Week from './Week';
import {
  format,
  subDays,
  subWeeks,
  endOfWeek 
} from 'date-fns';
import isEqual from 'lodash.isequal';
import './Graph.css';

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weeks: this.createYear(this.props.data),
      maxValue: this.determineMaxValue(this.props.data),
    };
    this.handleDayClick = this.handleDayClick.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (!isEqual(nextProps, this.props)) {
      this.setState({
        weeks: this.createYear(nextProps.data),
        maxValue: this.determineMaxValue(nextProps.data),
      });
    }
  }
  determineMaxValue(data) {
    return Math.max(...data.map(date => date.value));
  }
  // init all weeks into a year array
  createYear(data) {
    const { endDate, weekCount, leftToRight } = this.props;
    const rawDate = endOfWeek(endDate);
    const year = [];
    for (let i = 0; i < weekCount; i++) {
      const subbedDate = subWeeks(rawDate, i);
      const formattedDate = format(subbedDate, 'YYYY-MM-DD');
      if (leftToRight) {
        year.push(this.createWeek(data, formattedDate));
      } else {
        year.unshift(this.createWeek(data, formattedDate));
      }
    }
    return year;
  }
  handleDayClick(value, date, formattedDate) {
    const ret = {
      value,
      date,
      formattedDate,
    };
    this.props.onDayClick(ret);
  }
  // init weeks to push to the year array
  createWeek(data, startDate) {
    if (!data || !startDate) throw new Error('cWeek missing params');
    const week = [];
    for (let i = 0; i < 7; i++) {
      let value = this.props.nullValue;
      const rawDate = subDays(startDate, i);
      const date = format(rawDate, 'YYYY-MM-DD');
      const formattedDate = format(rawDate, 'ddd, MMM D, YYYY');
      // loop data from props & push to array if date matches
      data.forEach(t => {
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
    const { rootStyles } = this.props;
    return (
      <div className="root" style={rootStyles}>
        {this.state.weeks.map((week, index) =>
          <Week
            className="week"
            week={this.state.weeks[index]}
            key={index}
            color={this.props.color}
            bgColor={this.props.bgColor}
            maxValue={this.state.maxValue}
            onDayClick={this.handleDayClick}
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
  nullValue: PropTypes.any,
  onDayClick: PropTypes.func,
};

Graph.defaultProps = {
  data: [],
  weekCount: 53,
  color: '#008000',
  bgColor: '#EBEDF0',
  leftToRight: false,
  endDate: new Date(),
  nullValue: 0,
  rootStyles: undefined,
  onDayClick: function noOp() {},
};
