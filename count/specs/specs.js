describe('countBy', function() {
  it("it will count by 1 to maxNumber", function () {
    expect(countBy(1, 10)).to.equal("1,2,3,4,5,6,7,8,9,10");
  });
  it("will county by 2 to maxNumber", function () {
    expect(countBy(2, 10)).to.equal("2,4,6,8,10");
  });
  it("will count by addNumber to maxNumber", function () {
    expect(countBy(3, 30)).to.equal("3,6,9,12,15,18,21,24,27,30");
  });
});





// describe('countBy', function() {
//   it("will return an array counting up to firstInput", function() {
//     expect(countBy(5)).to.eql([1,2,3,4,5]);
//   });
// });

// describe('makeArray', function() {
//   it("will take the number and put it in an array", function () {
//     expect(makeArray(30)).to.eql([ 30 ]);
//   });
// });
//
// describe('convertNumber', function() {
//   it("will convert a string into a number", function() {
//     expect(convertNumber("30")).to.equal(30);
//   });
// });
