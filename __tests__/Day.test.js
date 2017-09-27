import React from 'react';
import Day from '../src/Day';
import renderer from 'react-test-renderer';

const expected = {
  key: 1,
  value: 99,
  date: '1901-01-01',
  formattedDate: '1st Jan, 1901',
  maxValue: 100,
  color: '#000000',
};

const component = renderer.create(
  <Day
    key={expected.key}
    value={expected.value}
    date={expected.date}
    formattedDate={expected.formattedDate}
    maxValue={expected.maxValue}
    color={expected.color}
  />
);

test('Day snapshot test', () => {
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

