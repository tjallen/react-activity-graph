import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Graph from '../src/';

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

storiesOf('react-activity-graph', module)
  .add('data, onDayClick, debug', () => (
    <Graph data={data} onDayClick={onDayClickExampleFn} debug />
  ))
  .add('data, endDate, weekCount=4', () => (
    <Graph data={data} endDate="1905-05-05" weekCount={4} />
  ))
  .add('data, endDate=now, weekCount=4', () => (
    <Graph data={data} endDate={d} weekCount={4} />
  ))
  .add('no data', () => (
    <Graph data={noData} />
  ));
