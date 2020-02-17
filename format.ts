// const R = require("ramda");
import * as R from 'ramda';
const dataBitcoin = require("../input/bitcoin")
const dataEthereum = require("../input/ethereum")
import fs from "fs";
console.log(dataBitcoin);

const logger = (val: any) => {
  console.log(val);
  return val;
}

const heyLogger = (val: any) => {
  console.log("hey", val);
  return val;
}

let readCSVTest = fs.readFileSync("../input/bitcoin.csv", { encoding: "utf-8" })

console.log("readCSVTest", readCSVTest);

//learned cool trick!
// let test = "hi im a test";
// console.log({ test });

// const getName = (val: any) => {
//   console.log("get the name", R.identity({ val }));
//   return () => { R.identity(val) }
// }

const returnPath = (path: any) => R.identity(path);


let names = ["bitcoin", "ethereum"];

// const convergeData = R.pipe(
//   R.converge(R.concat, [
//     () => names.map(val => val),
//     returnPath,
//   ])
// )

// R.pipe(
//   R.map(convergeData),
//   // R.pipe(
//   //   R.map(R.split("\n")),
//   //   R.map(R.drop(1))
//   // ),
//   // R.map(R.map(R.split('\t'))),
//   // R.map(R.map(R.take(2))),
//   heyLogger,
// )([dataBitcoin, dataEthereum])


