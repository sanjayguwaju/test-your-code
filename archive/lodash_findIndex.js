// Import the entire lodash library
import _ from 'lodash';

// Example array of objects
const users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];

// Using _.findIndex to find the index of the first element 
// where the 'active' property is true
const index = _.findIndex(users, o => o.active);

// Output the result
console.log("The index of the first active user is:", index);
// Expected output: "The index of the first active user is: 2"
