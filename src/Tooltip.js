import React from 'react';
import PropTypes from 'prop-types';

const Tooltip = ({ className, date, count }) => (
  <div className={className}>{count} on {date}</div>
);
Tooltip.propTypes = {
  className: PropTypes.string,
  date: PropTypes.string,
  count: PropTypes.number,
};
export default Tooltip;
