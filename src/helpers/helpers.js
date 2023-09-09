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
