var vowelConverter = function(wordInput) {
  var convertedWord = wordInput.replace(/[aeiou]/gi, "-");
  return convertedWord;
}

$(document).ready(function() {
  $("#formInput").submit(function(event) {
    var wordInput = $("input#userInput").val();
    var wordResults = vowelConverter(wordInput);


    // return wordResults
    $(".results").show();
    $("#formInput").hide();
    $("p#showResults").text(wordResults);
    // $("#userInput").text("");
    event.preventDefault();
  });
});
