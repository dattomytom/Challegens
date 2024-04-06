
// const { expect } = require('chai')
// const  {processTask1} = require('../tasks/task1')

// describe("Sum numbers", () => {
//     test("it should sum two numbers correctly", () => {
//       const sum = 1 + 2;
//       const expectedResult = 3;
//       const v = processTask1.processTask1(3)
//       expect(sum).toEqual(expectedResult);
//     })
//   });
const processTask1 = require('../tasks/task1')
describe("isEven", () => {
    test("returns true if number is even", () => {
      //expect(processTask1(0)).toBe(null);
      expect(processTask1(99)).toThrow();
    });

  });

