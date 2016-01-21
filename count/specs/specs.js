// describe('countBy', function() {
//   it("will return an array counting up to firstInput", function() {
//     expect(countBy(5)).to.eql([1,2,3,4,5]);
//   });
// });

describe('makeArray', function() {
  it("will take the number and put it in an array", function () {
    expect(makeArray(30)).to.eql([ 30 ]);
  });
});

describe('convertNumber', function() {
  it("will convert a string into a number", function() {
    expect(convertNumber("30")).to.equal(30);
  });
});
