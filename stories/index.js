import React from 'react';
import { storiesOf, addDecorator } from '@storybook/react';
import { withConsole } from '@storybook/addon-console';
import Graph from '../src/';

const CenterDecorator = (storyFn) => (
  <div style={{ textAlign: 'center', margin: '30px' }}>
    {storyFn()}
  </div>
);
addDecorator(CenterDecorator);
addDecorator((storyFn, context) => withConsole()(storyFn)(context));

const data = [
  { date: '2017-09-28', value: 1 },
  { date: '2017-09-30', value: 2 },
  { date: '2017-10-01', value: 0 },
];
const d = new Date();
const noData = [];

function onDayClickExampleFn(v) {
  console.log(JSON.stringify(v));
}

storiesOf('react-activity-graph', module)
  .add('data, onDayClick, debug', () => (
    <Graph data={data} onDayClick={onDayClickExampleFn} debug />
  ))
  .add('data, endDate, weekCount=4', () => (
    <Graph data={data} endDate="1905-05-05" weekCount={4} />
  ))
  .add('data=[], endDate=now, weekCount=4', () => (
    <Graph data={noData} endDate={d} weekCount={4} />
  ))
  .add('no props', () => (
    <Graph />
  ));
