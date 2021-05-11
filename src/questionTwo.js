const _ = require('lodash');

const items = [
  {
    name: 'product 1',
    amount: 3
  },
  {
    name: 'product 2',
    amount: 4
  },
  {
    name: 'product 3',
    amount: 5
  },
  {
    name: 'product 6',
    amount: 10
  },
  {
    name: 'product 6',
    amount: 10
  }
];

const totalAmountOfItems = _.sumBy(items, 'amount');
// eslint-disable-next-line no-console
console.log('Total amount of items: ', totalAmountOfItems);

const calculateTotalAmountFromIndex = (from, to) => {
  const newArr = items.slice(from, to);
  return _.sumBy(newArr, 'amount');
}
// eslint-disable-next-line no-console
console.log(calculateTotalAmountFromIndex(1, 3));