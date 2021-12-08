jest.mock('./add-remove')
import * as addRemove from './add-remove.js'
// import * as ls from './local-storage.js';

const input = {value: 'Abc'}
const itemsEmpty = [];
const items2 = [{
  description: 'xyzzy',
  complete: false,
  index: 0,
},
{ 
  description: 'abcde',
  complete: true,
  index: 1,
}]

describe('Add...', () => {
  test('Abc to empty items', () => {
    addRemove.addItem(input, itemsEmpty)
    expect(itemsEmpty.length).toBe(1);
  })
});