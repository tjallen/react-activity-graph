/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import { v4 } from 'uuid';

export default class Week extends Component {
  static propTypes = {
    data: PropTypes.array,
  }
  // static defaultProps = {
  // }
  renderDays(data) {
    let render;
    if (!data.length || data.length <= 0 || data === null) {
      // console.log(data, 'err');
      render = [];
    } else {
      render = data.map(day => (
        <Day key={v4()} count={day} />
      ));
    }
    return render;
  }
  renderDayComponent(count) {
    // console.log(`rDC ${count}`);
    if (count !== null) {
      return (
        <Day key={v4()} count={count}>{count}</Day>
      );
    }
    return null;
  }
  render() {
    const styles = {
      display: 'inline-block',
      float: 'left',
      backgroundColor: '#e0e0e0',
    };
    const { data } = this.props;
    return (
      <div style={styles}>
        {data &&
          data.map(item =>
            this.renderDayComponent(item)
          )
        }
      </div>
    );
  }
}
