/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import { v4 } from 'uuid';

export default class Week extends Component {
  static propTypes = {
    data: PropTypes.array,
    color: PropTypes.string,
  }
  renderDayComponent(count) {
    // console.log(`rDC ${count}`);
    if (count !== null) {
      return (
        <Day key={v4()} count={count} color={this.props.color}>{count}</Day>
      );
    }
    return null;
  }
  render() {
    const styles = {
      display: 'inline-block',
      float: 'left',
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
