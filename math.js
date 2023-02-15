function mathSequence(arr){
    return arr
}

console.log(mathSequence([2,4,6,8]))
console.log(mathSequence([3,9,27,81]))
console.log(mathSequence([2,5,14,89]))

// Find the first non-consecutive number
function firstNonConsecutive (arr) {
    for (let i= 0; i<arr.length-1; i++){
      const curr=arr[i]
      const next=arr[i+1]
      
      if(curr +1 !==next){
        return next
      }
    }
      return null
    }

    // Write a small function that returns the values of an array that are not odd.





    function noOdds( values ){
        // Return all non-odd values
        // return values.filter(val=>val%2===0)
        const arr=[];
        for(let i=0; i<values.length; i++){
          if(values[i] %2 ===0){
            arr.push(values[i])
          }
        }
        return arr
      }





    //  You need to make a function that takes an object as an argument, and returns a very similar object but with a special property. The returned object should allow a user to access values by providing only the beginning of the key for the value they want. For example if the given object has a key idNumber, you should be able to access its value on the returned object by using a key idNum or even simply id. Num and Number shouldn't work because we are only looking for matches at the beginning of a key.

// Be aware that you could simply add all these partial keys one by one to the object. However, for the sake of avoiding clutter, we don't want to have a JSON with a bunch of nonsensical keys. Thus, in the random tests there will be a test to check that you did not add or remove any keys from the object passed in or the object returned.

// Also, if a key is tested that appears as the beginning of more than one key in the original object (e.g. if the original object had a key idNumber and idString and we wanted to test the key id) then return the value corresponding with whichever key comes first alphabetically. (In this case it would be idNumbers value because it comes first alphabetically.)

// Example

// let o = partialKeys({ abcd: 1 })

// o.abcd === 1 // true
// o.abc === 1 // true
// o.ab === 1 // true
// o.a === 1 // true

// o.b === 1 // false!

// Object.keys(o) // ['abcd'] 

    function partialKeys (obj) {
        const newObj={}
        Object.keys(obj).sort().reverse().forEach((key)=>{
          const value=obj[key]
          for(let i=0; i<key.length; i++){
            const newkey=key.substring(0, i +1)
            newObj[newkey]=value
            
          }
        })
        return newObj
    }




//     Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia cs"

function solve(s) {
    return Math.max(...s.replace(/[aeiou]+/g, ' ').trim().split(' ').map( addUpString))
   };
   
   function charToValue(c){
     return c.charCodeAt(0) - 96;
   }
   function addUpString(str){
     return str.split('').map(charToValue).reduce((acc, item) => acc += item, 0);
   }

//    Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

function spinWords(words){
    return words.split(' ').map(word => word.length >=5 ? reverseStr(word) : word).join(' ')
    
  }
  
  function reverseStr(str){
    return str.split('').reverse().join('')
  }
  

//   Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

function findMissingLetter(array){
    for (let i=0; i<array.length ; i++){
      const curr=array[i].charCodeAt(0)
      const next=array[i+1].charCodeAt(0)
      
      if(curr +1 !==next){
        return String.fromCharCode(curr + 1)
      }
    }
  }

  // Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
  function isValidIP(str) {
    return str.split('.').filter(isValidNum).length === 4;
  }
  
  function isValidNum(n){
    if(/^0/.test(n) && +n !==0 || n ==='00' || n ==='000') return false
    return (+n >=0) && (+n <= 255) && (/^\d{1,3}$/.test(n));
  }

  // checking an existennce of a value in array
  array.indexOf(elem) >-1



  // We have defined a function, filteredArray, which takes arr, a nested array, and elem as arguments, and returns a new array. elem represents an element that may or may not be present on one or more of the arrays nested within arr. Modify the function, using a for loop, to return a filtered version of the passed array such that any array nested within arr containing elem has been removed.

  function filteredArray(arr, elem) {
    let newArr = [];
    // Only change code below this line
    for(let i=0; i<arr.length; i++){
      if(!elementExist (arr[i], elem)){
         newArr.push(arr[i])
      }
    }
  
    // Only change code above this line
    return newArr;
  }
  function elementExist(arr, elem){
    return arr.indexOf(elem) >-1
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));



  // algorithing Scripting


  // returning longest word
  function findLongestWordLength(str) {
    let max=0
     const arr=str.split(' ')
     for(let i=0; i<arr.length; i++){
       if(arr[i].length > max){
         max=arr[i].length
  
  
       }
     }
  
    return max
  }
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));




//   Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

// Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

function largestOfFour(arr) {
  let arrayMax=[]

  for(let i=0; i<arr.length; i++){
    let max = -Infinity;
    for(let j=0; j<arr[i].length; j++){
      if(arr[i][j] > max){
        max =arr[i][j]
      }
    }
    arrayMax.push(max)
  }
  return arrayMax;
}

console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

// Repeat a given string str (first argument) for num times (second argument). Return an empty string if num is not a positive number. For the purpose of this challenge, do not use the built-in .repeat() method.


function repeatStringNumTimes(str, num) {
  if(num < 0) return ""
  let finalStr=''
  for(let i=0; i<num; i++){
    finalStr +=str
  }
  return finalStr;

}

console.log(repeatStringNumTimes("abc", 3));


//Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

function truncateString(str, num) {
  let final=''
  if(str.length >num){
    final=str.slice(0,num)+ '...'
  }
  return final;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));


// Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

// For the purpose of this exercise, you should also capitalize connecting words like the and of.


function titleCase(str) {
  return str.split(' ').map(elem=>elem[0].toUpperCase() + elem.slice(1).toLowerCase()).join(' ')
}

console.log(titleCase("I'm a little tea pot"));

//Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

function chunkArrayInGroups(arr, size) {
  let index=0;
  let innerArr=[]
  let finalArr=[]

  for(let i=0; i<arr.length; i++){
    innerArr.push(arr[i])
    index++

  if(index===size){
    finalArr.push(innerArr)
    innerArr=[]
    index=0

  }
    }
    if(innerArr.length>0){
      finalArr.push(innerArr)
    }
  return finalArr;
}

console.log(chunkArrayInGroups([ "a","b", "c", "d"], 2));

// console.log(ownProps) would display ["name"] in the console, and console.log(prototypeProps) would display ["numLegs"].


function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for(let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property)
  }
  else{
    prototypeProps.push(property)
  }
}
console.log(ownProps)
console.log(prototypeProps)


// Modify the code so that instances of Dog inherit from Animal.

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line
Dog.prototype=Object.create(Animal.prototype)



let beagle = new Dog();
beagle.eat()