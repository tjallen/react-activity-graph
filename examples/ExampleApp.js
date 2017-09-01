/* eslint-disable no-console */
import 'babel-polyfill';

import React from 'react';
import Graph from '../src/Graph';
// import moment from 'moment';

const fakeData = [
  [0, 0, 0, 0, 0, 0, 0], // week before last
  [0, 1, 5, 0, 10, 2, 0], // prev week
  [0, 3, 0, 1, null, null, null], // current week
];

const ExampleApp = () => {
  const wrapper = {
    margin: '0 auto',
    padding: '20px',
  };
  return (
    <div style={wrapper}>
      {/* {moment().format('MMMM Do YYYY, h:mm:ss a')} */}
      <Graph
        data={fakeData}
      />
    </div>
  );
};

export default ExampleApp;
