export const addItem = (inputValue, items) => {
  items.push({
    description: inputValue,
    complete: false,
    index: items.length,
  });
  inputValue = '';
  return items;
};