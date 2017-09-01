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
      <p>data only</p>
      <Graph
        data={fakeData}
      />
      <br />
      <hr />
      <p>weeks=4</p>
      <Graph data={fakeData} weeks={4} />
      {/* <br />
      <hr />
      <p>1 week incase we decide to allow a trim prop etc for data > weeks</p>
      <Graph data={fakeData} weeks={1} /> */}
    </div>
  );
};

export default ExampleApp;
