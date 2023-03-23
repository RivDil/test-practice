const analyzeArray = require('./analyzeArray')

describe("analyzeArray", () => {
    test("Returns correct statistics for a given array", () => {
      const input = [1, 2, 3, 4, 5];
      const expectedResult = {
        average: 3,
        min: 1,
        max: 5,
        length: 5,
      };
      expect(analyzeArray(input)).toEqual(expectedResult);
    });
  
    test("Handles arrays with negative numbers", () => {
      const input = [-2, 0, 2, 4];
      const expectedResult = {
        average: 1,
        min: -2,
        max: 4,
        length: 4,
      };
      expect(analyzeArray(input)).toEqual(expectedResult);
    });
  
    test("Handles arrays with floating-point numbers", () => {
      const input = [1.5, 2.5, 3.5, 4.5];
      const expectedResult = {
        average: 3,
        min: 1.5,
        max: 4.5,
        length: 4,
      };
      expect(analyzeArray(input)).toEqual(expectedResult);
    });
  });