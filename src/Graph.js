/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Week from './Week';
import { v4 } from 'uuid';
import { dateUtils } from './dateUtils';

export default class Graph extends Component {
  static propTypes = {
    data: PropTypes.any,
    weekCount: PropTypes.number,
    color: PropTypes.string,
  }
  static defaultProps = {
    weekCount: 53,
    color: 'green',
    currentDate: dateUtils.getCurrentDate(),
    currentWeekDay: dateUtils.getWeekDay(),
  }
  constructor(props) {
    super(props);
    this.state = {
      weeks: this.initWeeks(props.weekCount),
    };
  }
  initData(source = this.props.data) {
    // if this.props.data provides fewer weeks than this.props.weeks,
    // fill the array with blank weeks before passing to <Week />
    // const fresh = this.props.data.slice();
    // const blankWeek = [0, 0, 0, 0, 0, 0, 0];
    // if (source.length === this.props.weeks) return source;
    // fresh.length = this.props.weeks || this.state.weeks;
    // fresh.fill(blankWeek);
    // fresh.splice(fresh.length - source.length);
    // return fresh.concat(source);

    return source;
  }
  initWeeks() {
    const weeks = [];
    const week = [];
    week.length = 7;
    weeks.length = this.props.weekCount;
    week.fill({ date: null, value: null });
    weeks.fill(week);
    return weeks;
  }
  convertHashToArr(input) {
    const keys = Object.keys(input);
    const out = keys.map(key => ({
      date: key,
      value: input[key],
    }));
    return out;
  }
  render() {
    const styles = {
      border: '1px solid rgba(0, 0, 0, 0.1)',
      display: 'inline-block',
      width: 'auto',
    };
    // const data = this.initData();
    console.log('====');
    console.log(this.state.weeks);
    console.log(this.convertHashToArr(this.props.data));
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
