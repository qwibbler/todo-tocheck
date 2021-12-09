export const saveDataLocation = 'myLocalToDo';

let localStorage = []

export const saveListData = (data, location) => {
  // localStorage.setItem(location, JSON.stringify(data));
  return data;
};

export const getListData = (location) => {
  if (localStorage.length > 0) {
    // const data = JSON.parse(localStorage.getItem(location));
    return localStorage;
  }
  return [];
};