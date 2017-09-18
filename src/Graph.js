/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Week from './Week';
import { v4 } from 'uuid';

export default class Graph extends Component {
  static propTypes = {
    data: PropTypes.object,
    weeks: PropTypes.number,
    color: PropTypes.string,
  }
  static defaultProps = {
    weeks: 53,
    color: 'green',
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
  render() {
    const styles = {
      border: '1px solid rgba(0, 0, 0, 0.1)',
      display: 'inline-block',
      width: 'auto',
    };
    const data = this.initData();
    return (
      <div style={styles}>
      {data.map(week =>
        <Week data={week} key={v4()} color={this.props.color} />
      )}
      </div>
    );
  }
}
