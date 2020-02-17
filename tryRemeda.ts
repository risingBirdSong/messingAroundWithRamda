import * as R from "remeda";

const clamped = R.clamp({ max: 10, min: 5 });

console.log("clamped", clamped(11))

interface IsimpleObj {
  test: string;
  color: string;
  age: number;
}

interface Iadded extends IsimpleObj {
  added: string;
}

let obj: IsimpleObj = {
  test: "testing",
  color: "red",
  age: 45
}

let addedObj: Iadded = R.addProp(obj, "added", "just now");

const isGreaterTha10n = (x: number) => x > 10;
const isLessThan0 = (x: number) => x < 0;

const inRange = [isGreaterTha10n, isLessThan0];

//data first
let inRangeTest = R.anyPass(-3, inRange);
//data last
let inRangeTestLast = R.anyPass(inRange)(2);

// console.log("inRangeTest", inRangeTestLast)


// data first chunk

let dataFirstChunk = R.chunk([1, 2, 3, 4, 5, 6], 2);
// console.log("dataFirstChunk", dataFirstChunk)


let chunkDataLAst = R.chunk(3);
// console.log("chunkDataLAst", chunkDataLAst([2, 4, 6, 8, 10, 12, 14, 16, 18]))


// make a deep copy
let cloned = R.clone(addedObj);
cloned.added = "more recently"
// console.log(addedObj,cloned)

//gets rid of falsey values
console.log(R.compact([1, 2, 0, 0, 4, false, "", "real", true, false, 0, null]))

let nums = [1, 2, 3, 4];
let strings = ["a", "b", "c", 'd']

let concatted = R.concat(nums, strings)
console.log("concatted", concatted)

const double = (x: number) => x * 2;
const inc = (x: number) => x + 1;
const convertNumToStringUpper = (x: number) => x.toString().toUpperCase();


// very interesting and cool, this whole pipline is type inferred! it says that all you have to do is type the first function and then everything else is inferred!
const createdNumberPipeline: (val: number) => string = R.createPipe(
  double,
  inc,
  // cool it throws an error here, mismatching inputs and output types!
  // convertNumToStringUpper,
  inc,
  double,
  convertNumToStringUpper
)

// console.log("number pipleline", createdNumberPipeline(3))

// difference between arrays


// so useful!
const groupedBy = R.groupBy([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (val: number) => val <= 5)
console.log("groupedBy", groupedBy);

const logger = () => {
  console.log("hitting");
}

R.createPipe

//cool only invokes once
const logOnce = R.once(logger);
// logOnce();
// logOnce();
// logOnce();
// logOnce();

const missingValues = (arr: number[]) => {


}