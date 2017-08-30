/* eslint-disable no-undef */
import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import expectJSX from 'expect-jsx';
expect.extend(expectJSX);

import Graph from '../src/index.js';

const wrapper = shallow(<Graph />);

describe('Graph', () => {
  it('renders without exploding', () => {
    expect(wrapper.length).toEqual(1);
  });
});

