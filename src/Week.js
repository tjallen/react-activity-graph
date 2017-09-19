/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import { v4 } from 'uuid';

export default class Week extends Component {
  static propTypes = {
    // data: PropTypes.array,
    color: PropTypes.string,
    week: PropTypes.any,
  }
  render() {
    const styles = {
      display: 'inline-block',
      float: 'left',
    };
    const { week } = this.props;
    // console.log(week);
    return (
      <div style={styles}>
        {week.map(item =>
          <Day
            key={v4()}
            count={item.value}
            color={this.props.color}
            date={item.date}
          >
            {item.value}
          </Day>
        )}
      </div>
    );
  }
}
