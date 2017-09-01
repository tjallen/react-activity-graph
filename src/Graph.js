/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Week from './Week';
import { v4 } from 'uuid';

export default class Graph extends Component {
  static propTypes = {
    data: PropTypes.array,
    weeks: PropTypes.number,
  }
  static defaultProps = {
    weeks: 53,
  }
  initData(source = this.props.data) {
    // if this.props.data provides fewer weeks than this.props.weeks,
    // fill the array with blank weeks before passing to <Week />
    const fresh = this.props.data.slice();
    const blankWeek = [0, 0, 0, 0, 0, 0, 0];
    if (source.length === this.props.weeks) return source;
    fresh.length = this.props.weeks || this.state.weeks;
    fresh.fill(blankWeek);
    fresh.splice(fresh.length - source.length);
    return fresh.concat(source);
  }
  render() {
    const data = this.initData();
    return (
      <div>
      {data.map(week =>
        <Week data={week} key={v4()} />
      )}
      </div>
    );
  }
}
