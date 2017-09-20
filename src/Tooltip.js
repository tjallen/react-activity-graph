import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ className, date, children }) => (
  <div className={className}>{children} on {date}</div>
);
Tooltip.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  children: PropTypes.any,
  value: PropTypes.any, // check future type, string/number?
};
export default Tooltip;
