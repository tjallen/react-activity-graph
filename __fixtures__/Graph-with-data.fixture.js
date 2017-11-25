import Graph from './../src';

const data = [
  { date: '2017-09-28', value: 1 },
  { date: '2017-09-30', value: 2 },
  { date: '2017-10-01', value: 0 },
];

export default {
  component: Graph,
  props: {
    data
  }
}