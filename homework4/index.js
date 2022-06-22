const friends = ["Melissa", "Marc", "Andrew", "Nick"];
let friend = [];

friend = friends.forEach(frn => frn.toLowerCase())

 console.log("I have a friend named " + friend)
/////////////////////


const numbers = [1, 2, 3];
const numbersTimesTwo = numbers.map(function(num) {
  return num * 2;
});

// numsTimesTwo --> [1, 4, 6]

/*--- using an arrow function for the callback ---*/
const timesTwo = numbers.map(num => num * 2);


const number = [1, 5, 8]
let numbersSquared  = [];

numbersSquared= number.map(x => x*x );
console.log(numbersSquared);


const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];
let isawesome  = [];

isawesome= instructors.map(x => x+" is awesome" );
console.log(isawesome);



const nums = [25, 6, 100, 3];
let sums 
sums = nums.reduce((prev, curr) => prev+curr , 0)
console.log(sums);

// sum equals 134

/*--- using an arrow function for the callback ---*/
let sum = nums.reduce((acc, num) => acc + num);



const numsr = [25, 6, 8, 3];
let evenNumbers = [];
evenNumbers = numsr.reduce((x)=> x%2==0)
console.log(evenNumbers)



const numss = [100, 2, 5, 42, 99];
const odds = nums.filter(function(num) {
  if (num % 2 !== 0)
    return true
  else
    return false
});

console.log(odds);

/*--- using an arrow function for the callback ---*/
const oddss = nums.filter(num => num % 2 !== 0);



const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];
let jerks = people.filter((x)=> x.includes("jerks"))

console.log(jerks);


const avg = [8, 2, 2, 4];
const average = avg.reduce((a, b) => a + b, 0) / avg.length;

console.log(average);


const averag = arr => arr.reduce((a,b) => a + b, 0) / arr.length;
console.log(averag([8, 2, 2, 4]))
 
 
function reverseString(rev){
    return rev.split("").reverse().join("");
}
console.log( reverseString("caterpillar"))




const movie = function(title ,duration,stars ){
    const obj = {};
    obj.title = title
    obj.duration = duration
    obj.stars = stars
    return obj
}

const m1 = movie("random",30,["Puff", "Jackie",  "Sneezes"])

