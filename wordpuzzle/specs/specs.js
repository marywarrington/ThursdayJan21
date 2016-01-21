describe('vowelConverter', function() {
  it("it will convert all vowels in a word to dashes", function () {
    expect(vowelConverter("mississippi")).to.equal("m-ss-ss-pp-");
  });
  it("it will convert all vowels in a sentence to dashes", function () {
    expect(vowelConverter("I am an epicodus student")).to.equal("- -m -n -p-c-d-s st-d-nt");
  });
});
