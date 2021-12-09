jest.mock('./local-storage')
jest.mock('./default-list')
import * as addRemove from './add-remove.js'
import documentToDo from './default-list.js';

// const input = { value: 'Abc' }
// const itemsEmpty = [];
// const itemsFull = [{
//   description: 'xyzzy',
//   complete: false,
//   index: 0,
// },
// {
//   description: 'abcde',
//   complete: true,
//   index: 1,
// }];

describe('Add...', () => {
  test('Abc to empty items', () => {
    const input = { value: 'Abc' }
    const itemsEmpty = [];
    addRemove.addItem(input, itemsEmpty);
    expect(itemsEmpty.length).toBe(1);
  })

  test('Abc to full items', () => {
    const input = { value: 'Abc' }
    const itemsFull = [{
      description: 'xyzzy',
      complete: false,
      index: 0,
    },
    {
      description: 'abcde',
      complete: true,
      index: 1,
    }];
    addRemove.addItem(input, itemsFull);
    expect(itemsFull.length).toBe(3);
  })

  test('Abc to Empty DOM', () => {
    document.body.innerHTML = `
    <ul class="todo items">
    </ul>
    `
    const input = { value: 'Abc' }
    const itemsEmpty = [];
    addRemove.addItem(input, itemsEmpty);
    documentToDo(itemsEmpty);
    expect(document.body.querySelectorAll('li').length).toBe(1);
  })

  test('Abc to NonEmpty DOM', () => {
    document.body.innerHTML = `
    <ul class="todo items">
    </ul>
    `
    const input = { value: 'Abc' }
    const itemsFull = [{
      description: 'xyzzy',
      complete: false,
      index: 0,
    },
    {
      description: 'abcde',
      complete: true,
      index: 1,
    }];
    addRemove.addItem(input, itemsFull);
    documentToDo(itemsFull);
    expect(document.body.querySelectorAll('li').length).toBe(3);
  })
});