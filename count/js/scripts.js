var countBy = function(addNumber, maxNumber) {
  var answer = "";
  // i, while obvious, is not very descriptive. If you start i at addNumber you wont have to cut off 0
  for (var i = 0; i <= maxNumber; i += addNumber) {
    // WHY U NO SPACE?
    answer = answer + i + ",";
  }
  // this could be refactored out
    answer = answer.slice(2, answer.length-1);
  return answer;
}
// If you used an array instead of a string for answer then used join to turn the array into a string you can control how the sentence looks better





// var countBy = function(convertNumber) {
//   for (index = 0, index = convertNumber, index ++) {
//     return
//   }
// [index = 0, index = convertNumber, index++]
//
// };
// var makeArray = function(elementIn) {
//   var firstInputArray = [];
//   firstInputArray.push(convertNumber(elementIn))
//   return firstInputArray;
// };
// // return firstInputArray;
//
// var convertNumber = function(firstInput) {
//   return parseInt(firstInput);
// };










// for (index = 5, index <= 30, i + (5))
