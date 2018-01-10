import Graph from './../src';
import data from './placeholderData';

function onDayClick(v) {
  alert(JSON.stringify(v));
}

export default {
  component: Graph,
  props: {
    data,
    onDayClick,
    rootStyles: {
      backgroundColor: '#fff',
      border: '3px solid black',
      margin: '20px auto',
      padding: '10px',
      width: '95%',
    },
  }
}