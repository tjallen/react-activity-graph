import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ className, formattedDate, children }) => (
  <div className={className}>{children} on {formattedDate}</div>
);
Tooltip.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  formattedDate: PropTypes.string,
  children: PropTypes.any,
  value: PropTypes.any, // check future type, string/number?
};
export default Tooltip;
