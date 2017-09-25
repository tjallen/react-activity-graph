/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day';
import { v4 } from 'uuid';

const Week = ({ week, maxValue, color, bgColor }) => {
  const styles = {
    display: 'inline-block',
    float: 'left',
    background: bgColor,
  };
  return (
    <div style={styles}>
      {week.map(item =>
        <Day
          key={v4()}
          value={item.value}
          date={item.date}
          formattedDate={item.formattedDate}
          maxValue={maxValue}
          color={color}
        >
          {item.value}
        </Day>
      )}
    </div>
  );
};

Week.propTypes = {
  color: PropTypes.string,
  week: PropTypes.any,
  maxValue: PropTypes.any,
};

export default Week;
