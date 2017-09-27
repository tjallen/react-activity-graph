import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import Tooltip from '../src/Tooltip';

const { shallow } = Enzyme;

const expected = {
  value: 99,
  className: 'classNamerino',
  date: '1901-01-01',
};

const wrapper = shallow(
  <Tooltip
    className={expected.className}
    formattedDate={expected.date}
  >
    {expected.value}
  </Tooltip>
);

it('renders without crashing', () => {
  shallow(<Tooltip />);
});

it('recieves a className prop', () => {
  expect(wrapper.prop('className')).toEqual(expected.className);
});

it('combines children & formattedDate to display on the tooltip', () => {
  expect(wrapper.props().children).toEqual(
    [expected.value, ' on ', expected.date]
  );
});

