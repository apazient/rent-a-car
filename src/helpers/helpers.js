export const revStringToArray = (data) => {
  return data.split(" ").reverse();
};

//param string, return string
export const findWordInArray = (word, array) => {
  let match = "";
  array.forEach((el) => {
    if (el.toLowerCase().includes(word.toLowerCase())) {
      match = el;
    }
    return match;
  });
  return match;
};

//param string, return string
export const minLenString = (arr) => {
  return arr.reduce((a, b) => (a.length <= b.length ? a : b));
};

export const coloredString = (str) => {
  const m = str.match(/\d+/);
  if (m) {
    const cutEl = m.input.slice(0, m.index);
    return { cutEl: cutEl, m: m[0] };
  }
  return str;
};

export const formatNumber = (number) => {
  return number.replace(/(\d{1})/, "$1,");
};
