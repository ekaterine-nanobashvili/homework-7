"use strict";
// 1
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };

  console.log(user.studentstatus);

// 2
let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let item of numbers) {
    console.log(item);
}
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); 
}
let index = 0;
while (index < numbers.length) {
    console.log(numbers[index]);
    index ++;
}

// 3
let number = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let index = 0; index < number.length; index++) {
    if (number[index] > 5) {
        console.log(number[index]);
    }
}

// 4
let user2 = {
    name: 'giorgi',
    age:  20,
    studentstatus: 'active'
}

if (user2.age < 18 && user2.studentstatus == "active") {
    console.log("hello");
} else if (user2.name == "levani") {
    console.log("hello levani");
} else if (user2.studentstatus == "active" || user2.age < 25) {
    console.log ("hello world");
} else {
    console.log("error");
}

// 5
let array = [ [2, -3, 5, 10], [25, -24, -11, 100] , [-6, -7, 10] ];
for (i = 0; i < array.length; i++) {
    for ( x = 0; x < array[i].length; x++) {
        if (array[i][x] > 0) {
            console.log (array[i][x]);
        }
    }
}

// 6
let array2 = [ 2, 3, 5, 10,25,24,11, 100 , 6,7, 10 ];
// 6.1
for (let item of array2) {
    if (item % 2 == 0) {
        console.log(item);
    }
}
// 6.2
for (let item of array2) {
    if (item % 2 == 1) {
        console.log(item);
    }
}

// 7
function positiveSum(...number) {
    let sum = 0;
    for (let item of number) {
        if (item > 0) {
            sum += item;
        }
    }
return sum;
}
let result = positiveSum(2, -9, 5, 11, -30, 100, -8, -11, -4, 5, -6, 8);
console.log(result);

// 8
let user3 = {
    firstname: 'giorgi',
    lastname: 'saakadze',
    age: 32,
    isloggedin: true
  }
  
  function nameCheck(object) {
    if (user3.isloggedin === true) {
        return object.firstname + " " + object.lastname;
    } else {
        return "false";
    }
  }
  let result2 = nameCheck(user3);
  console.log(result2);

//   9
let array3 = [ 2, -3, 5, 10, 25, -24, -11, 100 , -6, -7, 10 ];

function largestNum(x) {
    let first = array3[0];
    let largest = first;
    for (let x of array3) {
        if (x > largest) {
            largest = x;
        }
    }
    return largest;
}
let largestResult = largestNum(array3);
console.log(largestResult);

// 10
let array4 = [1,2,4,10,34,5,7,87];

array4.forEach (function (x) {
    if (x > 0 && x < 10) {
        console.log(x);
    }
})

// 11
let numbers2 =[1,2,3,4,5,6,7,8,9,10];

for (let item in numbers2) {
    if (item == 5) {
        break;
    }
    console.log(item);
}
