export const addItem = (input, items) => {
  items.push({
    description: input.value,
    complete: false,
    index: items.length,
  });
  input.value = '';
  // ls.saveListData(items, ls.saveDataLocation);
  return items;
};