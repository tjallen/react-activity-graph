import React from 'react';
import ReactDOM from 'react-dom';
import Graph from '../lib/index.js';

const rootElement = document.getElementById('app');

const data = [{ date: '2017-09-28', value: 1 }];

ReactDOM.render(
  <div>
    <p>react-activity-graph examples</p>
    <Graph data={data} />
  </div>,
  rootElement
);
