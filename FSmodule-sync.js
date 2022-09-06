const { readFileSync, writeFileSync } = require("fs");

console.log("start");

const first = readFileSync("./content/first.txt", "utf-8");

// console.log(first);

const second = readFileSync("./content/second.txt", "utf-8");

// console.log(second);

const third = writeFileSync(
  "./content/third.txt",
  `Here is the third, result, file : ${first}, ${second}`,
  { flag: "a" }
);

console.log("done with this task");

console.log("starting the next one");
