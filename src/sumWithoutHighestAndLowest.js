// Sum all the numbers of the array except the highest and the lowest number
// If the highest and lowest numbers appear more than once, exclude ALL occurrences
//
// e.g. sumWithoutHighestAndLowest([6, 2, 1, 8, 10]) => 16
// e.g. sumWithoutHighestAndLowest([1, 1, 11, 2, 3]) => 5

const sumWithoutHighestAndLowest = array => {

  var max_of_array = Math.max(...array);
console.log(max_of_array);
  var min_of_array = Math.min(...array);

 return array.filter(elements =>elements !== max_of_array && elements !== min_of_array).reduce((a,b)=>a+b)


  }
  


module.exports = sumWithoutHighestAndLowest;
