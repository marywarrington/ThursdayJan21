describe('hasVowel', function() {
  it("replaces vowels with a dash", function() {
    expect(hasVowel("mississippi cat")).to.equal("m-ss-ss-pp- c-t");
  });
  // it("returns false if a userInput does not contain a vowel", function () {
  //   expect(hasVowel("sync")).to.equal(false);
  // });
});



//
// make an array with vowels
// make a for loop to run through the word searching for vowels
// potentially slice the word, remove the vowel, insert the -
