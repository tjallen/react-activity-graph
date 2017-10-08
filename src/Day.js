import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';
import hexToRGBA from 'hex-to-rgba';

const Day = (props) => {
  const { color, maxValue } = props;
  const value = props.value;
  const opacity = (maxValue === 0) ? 0 : (1 / (maxValue / value));
  const rgbaColor = hexToRGBA(color, opacity);
  const dayStyles = {
    backgroundColor: rgbaColor,
  };
  return (
    <div className="day" style={dayStyles}>
      {props.tooltip &&
        <Tooltip {...props}>{value}</Tooltip>
      }
    </div>
  );
};

Day.propTypes = {
  children: PropTypes.any,
  color: PropTypes.string,
  tooltip: PropTypes.bool,
  value: PropTypes.any,
  maxValue: PropTypes.any,
};

Day.defaultProps = {
  tooltip: true,
  value: 0,
};

export default Day;
