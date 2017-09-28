import React from 'react';
import Week from '../src/Week';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
configure({ adapter: new Adapter() });
import { format, subDays } from 'date-fns';

function fillWeek() {
  const week = [];
  const now = new Date();
  for (let i = 0; i < 7; i++) {
    const date = format(subDays(now, i), 'YYYY-MM-DD');
    week.unshift({
      date,
      value: i,
    });
  }
  return week;
}

const props = {
  week: fillWeek(),
  maxValue: 99,
  color: '#008000',
  bgColor: '#EBEDF0',
};

const component = renderer.create(
  <Week week={props.week} color={props.color} bgColor={props.bgcolor} />
);

// const wrapper = shallow(
//   <Week {...props} />
// );

test('Graph snapshot test', () => {
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
