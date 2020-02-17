
const R = require("ramda");

let employteeRoot = {
  "status": "success",
  "data": [
    {
      "id": "1",
      "employee_name": "Tiger Nixon",
      "employee_salary": "320800",
      "employee_age": "61",
      "profile_image": ""
    },
    {
      "id": "2",
      "employee_name": "Garrett Winters",
      "employee_salary": "170750",
      "employee_age": "63",
      "profile_image": ""
    },
    {
      "id": "3",
      "employee_name": "Ashton Cox",
      "employee_salary": "86000",
      "employee_age": "66",
      "profile_image": ""
    },
    {
      "id": "4",
      "employee_name": "Cedric Kelly",
      "employee_salary": "433060",
      "employee_age": "22",
      "profile_image": ""
    },
    {
      "id": "5",
      "employee_name": "Airi Satou",
      "employee_salary": "162700",
      "employee_age": "33",
      "profile_image": ""
    },
    {
      "id": "6",
      "employee_name": "Brielle Williamson",
      "employee_salary": "372000",
      "employee_age": "61",
      "profile_image": ""
    },
    {
      "id": "7",
      "employee_name": "Herrod Chandler",
      "employee_salary": "137500",
      "employee_age": "59",
      "profile_image": ""
    },
    {
      "id": "8",
      "employee_name": "Rhona Davidson",
      "employee_salary": "327900",
      "employee_age": "55",
      "profile_image": ""
    },
    {
      "id": "9",
      "employee_name": "Colleen Hurst",
      "employee_salary": "205500",
      "employee_age": "39",
      "profile_image": ""
    },
    {
      "id": "10",
      "employee_name": "Sonya Frost",
      "employee_salary": "103600",
      "employee_age": "23",
      "profile_image": ""
    },
    {
      "id": "11",
      "employee_name": "Paul Gaines",
      "employee_salary": "90560",
      "employee_age": "30",
      "profile_image": ""
    },
    {
      "id": "12",
      "employee_name": "Quinn Flynn",
      "employee_salary": "342000",
      "employee_age": "22",
      "profile_image": ""
    },
    {
      "id": "13",
      "employee_name": "Charde Marshall",
      "employee_salary": "470600",
      "employee_age": "36",
      "profile_image": ""
    },
    {
      "id": "14",
      "employee_name": "Haley Kennedy",
      "employee_salary": "313500",
      "employee_age": "35",
      "profile_image": ""
    },
    {
      "id": "15",
      "employee_name": "Tatyana Fitzpatrick",
      "employee_salary": "385750",
      "employee_age": "19",
      "profile_image": ""
    },
    {
      "id": "16",
      "employee_name": "Michael Silva",
      "employee_salary": "198500",
      "employee_age": "35",
      "profile_image": ""
    },
    {
      "id": "17",
      "employee_name": "Paul Byrd",
      "employee_salary": "725000",
      "employee_age": "64",
      "profile_image": ""
    },
    {
      "id": "18",
      "employee_name": "Gloria Little",
      "employee_salary": "237500",
      "employee_age": "59",
      "profile_image": ""
    },
    {
      "id": "19",
      "employee_name": "Bradley Greer",
      "employee_salary": "132000",
      "employee_age": "41",
      "profile_image": ""
    },
    {
      "id": "20",
      "employee_name": "Dai Rios",
      "employee_salary": "217500",
      "employee_age": "35",
      "profile_image": ""
    },
    {
      "id": "21",
      "employee_name": "Jenette Caldwell",
      "employee_salary": "345000",
      "employee_age": "30",
      "profile_image": ""
    },
    {
      "id": "22",
      "employee_name": "Yuri Berry",
      "employee_salary": "675000",
      "employee_age": "40",
      "profile_image": ""
    },
    {
      "id": "23",
      "employee_name": "Caesar Vance",
      "employee_salary": "106450",
      "employee_age": "21",
      "profile_image": ""
    },
    {
      "id": "24",
      "employee_name": "Doris Wilder",
      "employee_salary": "85600",
      "employee_age": "23",
      "profile_image": ""
    }
  ]
}// Generated by https://quicktype.io


const employees = employteeRoot.data.map(e => e);


// ah i was doing it wrong like this
// const age35 = R.filter(R.where({ "employee_age": "35" }))
//fixed 
const age35 = R.filter(R.where({ "employee_age": R.equals("35") }))

//@ts-ignore
const lessThan100k = R.filter(R.where({ "employee_salary": R.lte(100000) }))

// console.log(lessThan100k(employees));

const double = R.multiply(2)
// console.log(R.map(double, [1, 2, 3, 4, 5]));


const indexPlusVal = (v, i) => v + i;

const mappedIndex = R.addIndex(R.map);

//you can see here it calles multiply with the val and the idx of the array mapping over.
// console.log(mappedIndex(R.multiply, [1, 2, 3, 4, 5]))
//you can see here it calles add with the val and the idx of the array mapping over.
// console.log(mappedIndex(R.add, [1, 2, 3, 4, 5]))

//adjust takes a function, an index and an array, it returns a new array with the array at index being the result of the function...
// as you can see at index 2 of the array, the function add(5) is called and the new array is returned.
// console.log(R.adjust(2, R.add(5), [10, 20, 30, 40, 50,]))

// and here it calls toUpper on index 3...
// console.log(R.adjust(3, R.toUpper, ["aaa", "bbb", "cccc", "dddd", "eeee"]))

// and here is subtract at idx 2 using placeholder
// console.log(R.adjust(2, R.subtract(R.__, 10), [100, 200, 300, 400]))

//and with partial application so that you can specify the index later!
const partiallyAppliAdjust = R.adjust(R.__, R.subtract(R.__, 20));
// console.log(partiallyAppliAdjust(1)([10, 10, 10, 10]))


// all runs a function over an array of vals and only returns true if all the vals were true in the function
const gtrThn10 = x => x >= 10;
const lessThan = R.lte(R.__, 16);
// console.log(R.all(lessThan, [10, 10, 15]))


//all pass takes multiple functions and returns true if all the functions return true for a passed value...

const gt10 = R.gte(R.__, 10);
const lt20 = R.lte(R.__, 20);
//only returns true for nums 10 through 20

const singleAllPass = R.allPass([gt10, lt20]);
console.log("single pass", singleAllPass(15))


const severalAllPass = R.map(singleAllPass, [9, 14, 17, 21]);

// console.log(severalAllPass)

//doesnt work with vanilla js
// test.filter((val) => {
//   isEven(val);
// })

//wow it even works with objects out of the box! vanilla js won't do that!
const isEven = x => x % 2 == 0;
let test = { a: 1, b: 2, c: 3, d: 4 };
// console.log(R.filter(isEven, test))

//mix all with all past

// console.log("all with all pass", R.all(R.allPass([gt10, lt20]), [14, 15, 11]))


// receives two arguments and only returns true if both args are truthy logical and
// console.log(R.and(4)( true))
// console.log(R.all(isEven, [4, 2, 6]))
// console.log(R.all(isEven, [1, 2, 5]))


//any logical or on a list of items
// console.log(R.any(isEven, [4, 2, 6]))
// console.log(R.any(isEven, [1, 3, 5]))


//ap apply a list of functions to a list of arguments

//working on a single string
let foods = ["pizza", "souffle", "tacos"];
// console.log(R.ap([R.concat("tasty"), R.toUpper()], foods[0]))
//[ 'tastypizza','tastysouffle','tastytacos','PIZZA','SOUFFLE','TACOS' ]

const tastyAndBig = R.ap([R.concat("tasty"), R.toUpper()]);
// console.log(R.map(tastyAndBig)(foods));


//apertature

// console.log(R.aperture(2)([1, 2, 3, 4, 5, 6, 7]));
// [ [ 1, 2 ], [ 2, 3 ], [ 3, 4 ], [ 4, 5 ], [ 5, 6 ], [ 6, 7 ] ]
// console.log(R.aperture(3)([1, 2, 3, 4, 5, 6, 7]));
// [ [ 1, 2, 3 ], [ 2, 3, 4 ], [ 3, 4, 5 ], [ 4, 5, 6 ], [ 5, 6, 7 ] ]

//apped 
// console.log(R.append("add me", ["a", "b", "c"]))

const taker = (val, idx, obj) => {
  return val == 1 || val == 2;
}

const adding = (acc, ele) => {
  console.log("our ele", ele, "acc", acc);
  acc += Number(ele[0])
  return acc;

}

const logger = (a) => {
  console.log(a);
  return a;
}

const multiplyByPair = (subArr) => {
  if (subArr[1] === 1) {
    subArr[0] = (Number(subArr[0]) * Number(subArr[0])).toString()
  }
  return subArr;
}

const multiplyElems = ((acc, elem) => {
  console.log('acc', acc, 'elem', elem)
  if (acc === 0) {
    acc = Number(elem[0]);
    return acc;
  }
  acc *= Number(elem[0])
  console.log("acc", acc)
  return acc;
});

const countBy = (arr) => {
  return R.pipe(
    R.countBy(R.identity),
    logger,
    R.filter(taker),
    logger,
    R.toPairs(),
    R.map(R.map(multiplyByPair))(R.identity),
    logger,
    R.reduce(multiplyElems, 0)
  )(arr)
}


// console.log("countyBy", countBy([1, 1, 1, 1, 2, 2, 3]));
// console.log("countyBy", countBy([27, 65, 44, 39, 44, 21, 21, 44, 65, 39, 21, 65]));

// console.log(R.countBy(R.identity)([1,1,1,1,2,2,2,3,3,4]))

const workingWithString = (a) => {
  console.log(a);
  return a;
}

const fillUrinals = (arr) => {
  let canAdd;
  console.log('arr', arr);
  const reduced = arr.reduce((acc, val, idx, arr) => {
    if (acc.length == 0) {
      //mirror the beginning of the passed arr.
      acc.push(val);
    }
    if (acc[acc.length - 1] == '1') {
      acc.push('0');
    }

    else if (acc[acc.length - 1] == '0') {
      if (arr[idx + 1] == "0") {

        acc.push('1')
      }
      else if (arr[idx + 1] == "1") {
        acc.push('0');
      }
    }
    if (idx == arr.length - 1) {
      acc[idx] = val;
    }
    return acc;
  }, [])
  console.log("reduced", reduced);
  return reduced;
}

const urinals = (str) => {
  R.pipe(
    R.map(workingWithString),
    fillUrinals,
  )(str)
}

console.log(urinals("1000001"))