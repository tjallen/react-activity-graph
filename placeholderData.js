import dateFns from 'date-fns';

const data = [];
const now = Date.now();
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const dateMinus = (count) => {
  const date = dateFns.format(
    dateFns.subDays(now, count),
    'YYYY-MM-DD'
  );
  const value = randomBetween(0, 10);
  return { date, value };
};

for (var i = 0; i < 365; i++) {
  data.push(dateMinus(i));
};

export default data;