import React from 'react';
import ReactDOM from 'react-dom';
import Graph from '../src/';

const rootElement = document.getElementById('app');

const data = [
  { date: '2017-09-28', value: 1 },
  { date: '2017-09-30', value: 2 },
  { date: '2017-10-01', value: 0 },
];
const d = new Date();
const noData = [];

function onDayClickExampleFn(v) {
  console.log(v);
}

ReactDOM.render(
  <div>
    <p>react-activity-graph examples</p>
    <Graph data={data} onDayClick={onDayClickExampleFn} debug />
    <Graph data={data} endDate="1905-05-05" weekCount={4} />
    <Graph data={data} endDate={d} weekCount={4} />
    <Graph data={noData} />
  </div>,
  rootElement
);
