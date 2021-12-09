const documentToDo = (list) => {
  if (list) {
    const wrapper = document.querySelector('.items');
    wrapper.innerHTML = '';
    for (let i = 0; i < list.length; i += 1) {
      const listElem = document.createElement('li');

      wrapper.appendChild(listElem);
    }
  }
};

export default documentToDo;