import React from 'react';
import PropTypes from 'prop-types';
import Tooltip from './Tooltip';
import hexToRGBA from 'hex-to-rgba';

const Day = (props) => {
  const { color, maxValue, onDayClick, date, formattedDate, value } = props;
  let dayStyles;
  if (value) {
    const opacity = (maxValue === 0) ? 0 : (1 / (maxValue / value));
    const rgbaColor = hexToRGBA(color, opacity);
    dayStyles = {
      backgroundColor: rgbaColor,
    };
  } else {
    dayStyles = {
      backgroundColor: '#efefef',
    }
  }
  return (
    <div
      className="day"
      style={dayStyles}
      onClick={() => onDayClick(value, date, formattedDate)}
    >
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
  onDayClick: PropTypes.func,
};

Day.defaultProps = {
  tooltip: true,
  value: 0,
};

export default Day;
