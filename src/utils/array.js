export const createCopy = (array) => {
  return JSON.parse(JSON.stringify(array));
};

export const findInArray = (array, id) => {
  return array.find((arrayItem) => arrayItem.id === id);
};
