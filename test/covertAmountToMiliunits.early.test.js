// Unit tests for: covertAmountToMiliunits

import { covertAmountToMiliunits } from "../lib/utils";

describe("covertAmountToMiliunits() covertAmountToMiliunits method", () => {
  // Happy path tests
  describe("Happy Path", () => {
    test("should convert a positive integer amount to miliunits", () => {
      const amount = 5;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBe(5000);
    });

    test("should convert a positive decimal amount to miliunits", () => {
      const amount = 5.123;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBe(5123);
    });

    test("should convert zero amount to miliunits", () => {
      const amount = 0;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBe(0);
    });

    test("should convert a negative integer amount to miliunits", () => {
      const amount = -3;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBe(-3000);
    });

    test("should convert a negative decimal amount to miliunits", () => {
      const amount = -2.456;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBe(-2456);
    });
  });

  // Edge case tests
  describe("Edge Cases", () => {
    test("should handle very small positive decimal amounts", () => {
      const amount = 0.0001;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBe(0);
    });

    test("should handle very small negative decimal amounts", () => {
      const amount = -0.0001;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBe(-0);
    });

    test("should handle very large positive amounts", () => {
      const amount = 123456789.123;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBe(123456789123);
    });

    test("should handle very large negative amounts", () => {
      const amount = -987654321.987;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBe(-987654321987);
    });

    test("should handle NaN input gracefully", () => {
      const amount = NaN;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBeNaN();
    });

    test("should handle Infinity input gracefully", () => {
      const amount = Infinity;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBe(Infinity);
    });

    test("should handle -Infinity input gracefully", () => {
      const amount = -Infinity;
      const result = covertAmountToMiliunits(amount);
      expect(result).toBe(-Infinity);
    });
  });
});

// End of unit tests for: covertAmountToMiliunits
