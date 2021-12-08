jest.mock('./add-remove')
import * as addRemove from './add-remove.js'

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
    addRemove.addItem('Abc', itemsEmpty)
    expect(itemsEmpty.length).toBe(1);
  })
});