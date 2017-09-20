import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ className, date, value }) => (
  <div className={className}>{value} on {date}</div>
);
Tooltip.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  value: PropTypes.any, // check future type, string/number?
};
export default Tooltip;
