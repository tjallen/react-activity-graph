/* eslint-disable no-console */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Week from './Week';

export default class Graph extends Component {
  // static propTypes = {
  // }
  // static defaultProps = {
  // }
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <Week />
      </div>
    );
  }
}
