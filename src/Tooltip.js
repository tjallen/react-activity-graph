import React, { Component } from 'react';

export default class Tooltip extends Component {
  render() {
    return (
      <div>{this.props.date} {this.props.count}</div>
    );
  }
}
