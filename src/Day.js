/* eslint-disable no-console */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

export default class Day extends Component {
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
    const styles = {
      fontSize: '8px',
      border: '1px solid white',
      height: '10px',
      width: '10px',
    };
    return (
      <div style={styles}>
        {this.props.children}
      </div>
    );
  }
}
