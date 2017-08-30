/* eslint-disable no-console */
import 'babel-polyfill';

import React from 'react';
import Graph from '../src/Graph';

const ExampleApp = () => {
  const wrapper = {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '480px',
  };
  return (
    <div style={wrapper}>
      <Graph />
    </div>
  );
};

export default ExampleApp;
