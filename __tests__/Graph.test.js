import React from 'react';
import Graph from '../src/Graph';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });
import { format, subDays, subWeeks } from 'date-fns';

// const props = {
//   data: data,
//   weekCount: 53,
//   color: '#008000',
//   bgColor: '#EBEDF0',
//   leftToRight: false,
// };

const now = new Date();
const fDate = format(now, 'YYYY-MM-DD');
const fDateOneWeekAgo = format(subWeeks(fDate, 1), 'YYYY-MM-DD');
const fDateOneDayAgo = format(subDays(fDate, 1), 'YYYY-MM-DD');

const data = [
  { date: fDateOneWeekAgo, value: 1 },
  { date: fDateOneDayAgo, value: 2 },
  { date: fDate, value: 3 },
];

const component = renderer.create(
  <Graph data={data} weekCount={2} />
);

// const wrapper = shallow(
//   <Graph {...props} />
// );

test('Graph snapshot test', () => {
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
