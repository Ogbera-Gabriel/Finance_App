// Unit tests for: formatCurrency

import { formatCurrency } from "../lib/utils";

describe("formatCurrency() formatCurrency method", () => {
  // Happy Path Tests
  describe("Happy Path", () => {
    it("should format a positive number correctly", () => {
      const amount = 1234.56;
      const result = formatCurrency(amount);
      expect(result).toBe("$1,234.56");
    });

    it("should format a negative number correctly", () => {
      const amount = -1234.56;
      const result = formatCurrency(amount);
      expect(result).toBe("-$1,234.56");
    });

    it("should format zero correctly", () => {
      const amount = 0;
      const result = formatCurrency(amount);
      expect(result).toBe("$0.00");
    });

    it("should format a large number correctly", () => {
      const amount = 1234567890.12;
      const result = formatCurrency(amount);
      expect(result).toBe("$1,234,567,890.12");
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    it("should format a very small number correctly", () => {
      const amount = 0.0001;
      const result = formatCurrency(amount);
      expect(result).toBe("$0.00");
    });

    it("should format a very large number correctly", () => {
      const amount = Number.MAX_SAFE_INTEGER;
      const result = formatCurrency(amount);
      expect(result).toBe("$9,007,199,254,740,991.00");
    });

    it("should format a number with many decimal places correctly", () => {
      const amount = 1234.567890123;
      const result = formatCurrency(amount);
      expect(result).toBe("$1,234.57");
    });

    it("should format a negative number with many decimal places correctly", () => {
      const amount = -1234.567890123;
      const result = formatCurrency(amount);
      expect(result).toBe("-$1,234.57");
    });

    it("should handle NaN gracefully", () => {
      const amount = NaN;
      const result = formatCurrency(amount);
      expect(result).toBe("$NaN");
    });

    it("should handle Infinity gracefully", () => {
      const amount = Infinity;
      const result = formatCurrency(amount);
      expect(result).toBe("$∞");
    });

    it("should handle -Infinity gracefully", () => {
      const amount = -Infinity;
      const result = formatCurrency(amount);
      expect(result).toBe("-$∞");
    });
  });
});

// End of unit tests for: formatCurrency
