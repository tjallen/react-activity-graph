/* eslint-disable no-console */
import 'babel-polyfill';

import React from 'react';
import Graph from '../src/Graph';

const data = [
  { date: '2017-09-18', value: 5 },
  { date: '2017-09-17', value: 2 },
  { date: '2017-09-20', value: 10 },
];

const ExampleApp = () => {
  const wrapper = {
    margin: '0 auto',
    padding: '20px 80px',
  };
  return (
    <div style={wrapper}>
      <p>data only</p>
      <Graph
        data={data}
      />
      <br />
      <hr />
      <p>props: weekCount=4, color='f44336', leftToRight</p>
      <Graph data={data} weekCount={4} color="#f44336" leftToRight />
      <br />
      <hr />
    </div>
  );
};

export default ExampleApp;
