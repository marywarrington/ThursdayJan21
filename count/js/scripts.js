var countBy = function(addNumber, maxNumber) {
  var answer = "";
  for (var i = 0; i <= maxNumber; i += addNumber) {
    answer = answer + i + ",";
  }
    answer = answer.slice(2, answer.length-1);
  return answer;
}






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
