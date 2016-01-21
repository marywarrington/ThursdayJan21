var hasVowel = function(userInput) {
  var vowels = ['a', 'e', 'i', 'o', 'u'];

  for (var index = 0; index < vowels.length; index++) {
    while(userInput.indexOf(vowels[index]) >= 0) {
      userInput = userInput.replace(vowels[index], '-');
    }
  } return userInput;

};


//   for (var uIi = 0; uIi < userInput.length; uIi++) {
//     //outer for loop moves from one char to next char and then next word
//      for(var vi = 0; vi < vowels.length; vi++) {
//        //inner for loop moves from one vowel to next vowel
//        if(userInput[uIi] === vowels[vi]) {
//          return true;
//        }
//        else {
//          return false;
//        }
//       // if (userInput[uIi].includes(vowels[vi])) {
//       //   return true;
//       //   }
//       //   else
//       //   {
//       //   return false;
//       //   }
//      }
//     }
// };

//
// var countBy = function(addNumber, maxNumber) {
//   var answer = "";
//   for (var i = 0; i <= maxNumber; i += addNumber) {
//     answer = answer + i + ",";
//   }
//     answer = answer.slice(2, answer.length-1);
//   return answer;
// }


// if ( userInput[uIi].indexOf(vowels[vi]) < 0 ) {
