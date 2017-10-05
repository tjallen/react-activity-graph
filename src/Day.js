import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';
import hexToRGBA from 'hex-to-rgba';

export default class Day extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    const { color, maxValue } = this.props;
    const value = this.props.value || 0;
    const opacity = 1 / (maxValue / value);
    const rgbaColor = hexToRGBA(color, opacity);
    const dayStyles = {
      backgroundColor: rgbaColor,
    };
    return (
      <div className="day" style={dayStyles}>
        {this.props.tooltip &&
          <Tooltip {...this.props}>{value}</Tooltip>
        }
      </div>
    );
  }
}

Day.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  tooltip: PropTypes.bool,
  value: PropTypes.any,
  maxValue: PropTypes.any,
};

Day.defaultProps = {
  tooltip: true,
};
