import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Tooltip from '../src/Tooltip';

const { shallow } = Enzyme;

const value = 99;
const expectedClassName = 'classNamerino';
const expectedDate = '1901-01-01';
const expectedOutput = [value, ' on ', expectedDate];

const wrapper = shallow(
  <Tooltip
    className={expectedClassName}
    formattedDate={expectedDate}
  >
    {value}
  </Tooltip>
);

it('renders without crashing', () => {
  shallow(<Tooltip />);
});

it('recieves a className prop', () => {
  expect(wrapper.prop('className')).toEqual(expectedClassName);
});

it('combines children & formattedDate to display on the tooltip', () => {
  expect(wrapper.props().children).toEqual(expectedOutput);
});

