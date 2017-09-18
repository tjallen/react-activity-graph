/* eslint-disable no-console */
import 'babel-polyfill';

import React from 'react';
import Graph from '../src/Graph';
// import moment from 'moment';

// const fakeData = [
//   [0, 0, 0, 0, 0, 0, 0], // week before last
//   [0, 1, 5, 0, 10, 2, 0], // prev week
//   [0, 3, 0, 1, null, null, null], // current week
// ];

const fakeData = {
  id: '7cccc9d3-b8f7-43e7-b6f9-f4f672535cf6',
  name: 'fakeTask',
  data: {
    '2017-09-18': '5',
    '2017-09-16': '2',
  }, // => [ { date: '2017-09-18', count: 5 }, ...etc]
};

const dates = fakeData.data;

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
        data={dates}
      />
      <br />
      <hr />
      <p>color</p>
      <Graph
        data={dates}
        color="rebeccapurple"
      />
      <br />
      <hr />
      <p>weekCount=4</p>
      <Graph data={dates} weekCount={4} />
      {/* <br />
      <hr />
      <p>1 week incase we decide to allow a trim prop etc for data > weekCount</p>
      <Graph data={dates} weekCount={1} /> */}
    </div>
  );
};

export default ExampleApp;
