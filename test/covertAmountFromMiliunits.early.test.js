// Unit tests for: covertAmountFromMiliunits

import { covertAmountFromMiliunits } from "../lib/utils";

describe("covertAmountFromMiliunits() covertAmountFromMiliunits method", () => {
  // Happy path tests
  describe("Happy Path", () => {
    test("should convert 1000 miliunits to 1 unit", () => {
      const result = covertAmountFromMiliunits(1000);
      expect(result).toBe(1);
    });

    test("should convert 5000 miliunits to 5 units", () => {
      const result = covertAmountFromMiliunits(5000);
      expect(result).toBe(5);
    });

    test("should convert 123456 miliunits to 123.456 units", () => {
      const result = covertAmountFromMiliunits(123456);
      expect(result).toBe(123.456);
    });
  });

  // Edge case tests
  describe("Edge Cases", () => {
    test("should convert 0 miliunits to 0 units", () => {
      const result = covertAmountFromMiliunits(0);
      expect(result).toBe(0);
    });

    test("should convert negative miliunits correctly", () => {
      const result = covertAmountFromMiliunits(-1000);
      expect(result).toBe(-1);
    });

    test("should handle very large miliunits correctly", () => {
      const result = covertAmountFromMiliunits(1e9); // 1 billion miliunits
      expect(result).toBe(1e6); // 1 million units
    });

    test("should handle very small miliunits correctly", () => {
      const result = covertAmountFromMiliunits(1); // 1 miliunit
      expect(result).toBe(0.001); // 0.001 units
    });

    test("should handle floating point miliunits correctly", () => {
      const result = covertAmountFromMiliunits(1234.567); // 1234.567 miliunits
      expect(result).toBeCloseTo(1.234567); // 1.234567 units
    });
  });
});

// End of unit tests for: covertAmountFromMiliunits
