/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import Day from './Day';

const Week = ({ week, maxValue, color, bgColor, onDayClick }) => {
  return (
    <div className='week'>
      {week.map((item, index) =>
        <Day
          key={index}
          value={item.value}
          date={item.date}
          formattedDate={item.formattedDate}
          maxValue={maxValue}
          color={color}
          onDayClick={onDayClick}
        >
          {item.value}
        </Day>
      )}
    </div>
  );
};

Week.propTypes = {
  color: PropTypes.string,
  bgColor: PropTypes.string,
  week: PropTypes.any,
  maxValue: PropTypes.any,
  onDayClick: PropTypes.func,
};

export default Week;
