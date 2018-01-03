import Graph from './../src';
import data from './../placeholderData';

function onDayClick(v) {
  alert(JSON.stringify(v));
}

export default {
  component: Graph,
  props: {
    data,
    onDayClick,
  }
}