export const dateUtils = {
  pad(num) {
    if (num.toString().length < 2) {
      return `0${num}`;
    }
    return num;
  },
  getCurrentDate() {
    const t = new Date();
    const y = t.getFullYear();
    const m = this.pad(t.getMonth() + 1);
    const d = t.getDate();
    const date = `${y}-${m}-${d}`;
    return date;
  },
  getWeekDay() {
    const t = new Date();
    return t.getDay();
  },
};

// const t = new Date();
// const dayOfWeek = t.getDay();
// const dayOfMonth = t.getDate();
// const month = t.getMonth();
// const year = t.getFullYear();
// const dates = fakeData.data;

// default date info:
// dayOfWeek
// `${year}-${month}-{dayOfMonth}`

