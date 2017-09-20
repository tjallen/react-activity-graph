/* eslint-disable no-console */
import 'babel-polyfill';

import React from 'react';
import Graph from '../src/Graph';

const fakeData = {
  id: '7cccc9d3-b8f7-43e7-b6f9-f4f672535cf6',
  name: 'fakeTask',
  data: {
    '2017-09-18': '5',
    '2017-09-16': '2',
  },
};

const normData = [
  { date: '2017-09-18', value: 5 },
  { date: '2017-09-17', value: 2 },
  { date: '2017-09-20', value: 10 },
];

const dates = fakeData.data;

const ExampleApp = () => {
  const wrapper = {
    margin: '0 auto',
    padding: '20px 80px',
  };
  return (
    <div style={wrapper}>
      <p>data only</p>
      <Graph
        data={dates} normData={normData}
      />
      <br />
      <hr />
      <p>color</p>
      {/* <Graph
        data={dates} normData={normData}
        color="rebeccapurple"
      />
      <br />
      <hr />
      <p>weekCount=4</p>
      <Graph data={dates} normData={normData} weekCount={4} /> */}
      {/* <br />
      <hr />
      <p>1 week incase we decide to allow a trim prop etc for data > weekCount</p>
      <Graph data={dates} weekCount={1} /> */}
    </div>
  );
};

export default ExampleApp;
