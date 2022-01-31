import sum from './sum';

describe("sum suite", () => {
   test("should sum all numbers of array", () => {
      expect(sum([1, 2, 3, 4])).toBe(10);
   }) 

   test("should have negative sum if negative numbers are greater", () => {
      expect(sum([1, 2, -3, -4])).toBe(-4);
   })

   test("should have result 0 when array is empty", () => {
      expect(sum([])).toBe(0);
   })
})