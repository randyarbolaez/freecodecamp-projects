/*
We've defined a function, countOnline; use a for...in statement within this function to loop through the users in the users object and return the number of users whose online property is set to true.
*/
let users = {
  Alan: {
    age: 27,
    online: false,
  },
  Jeff: {
    age: 32,
    online: true,
  },
  Sarah: {
    age: 48,
    online: false,
  },
  Ryan: {
    age: 19,
    online: true,
  },
};

function countOnline(obj) {
  // change code below this line
  for (let user in obj) {
    // console.log(obj[user].online)
    if (obj[user].online == true) {
      console.log(user);
    }
  }
  // change code above this line
}

console.log(countOnline(users));
