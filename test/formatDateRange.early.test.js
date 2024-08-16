// Unit tests for: formatDateRange

import { format, subDays } from "date-fns";

import { formatDateRange } from "../lib/utils";

describe("formatDateRange() formatDateRange method", () => {
  // Happy Path Tests
  describe("Happy Path", () => {
    test("should return formatted date range when both from and to dates are provided", () => {
      const period = {
        from: new Date(2023, 0, 1), // January 1, 2023
        to: new Date(2023, 0, 31), // January 31, 2023
      };
      const result = formatDateRange(period);
      expect(result).toBe("Jan 01 - Jan 31, 2023");
    });

    test("should return formatted single date when only from date is provided", () => {
      const period = {
        from: new Date(2023, 0, 1), // January 1, 2023
        to: undefined,
      };
      const result = formatDateRange(period);
      expect(result).toBe("Jan 01, 2023");
    });

    test("should return default date range when no period is provided", () => {
      const defaultTo = new Date();
      const defaultFrom = subDays(defaultTo, 30);
      const result = formatDateRange();
      expect(result).toBe(
        `${format(defaultFrom, "LLL dd")} - ${format(defaultTo, "LLL dd, y")}`,
      );
    });
  });

  // Edge Case Tests
  describe("Edge Cases", () => {
    test("should handle undefined from date and defined to date by returning default from date to provided to date", () => {
      const period = {
        from: undefined,
        to: new Date(2023, 0, 31), // January 31, 2023
      };
      const defaultFrom = subDays(new Date(), 30);
      const result = formatDateRange(period);
      expect(result).toBe(`${format(defaultFrom, "LLL dd")} - Jan 31, 2023`);
    });

    test("should handle string date inputs correctly", () => {
      const period = {
        from: "2023-01-01", // January 1, 2023
        to: "2023-01-31", // January 31, 2023
      };
      const result = formatDateRange(period);
      expect(result).toBe("Jan 01 - Jan 31, 2023");
    });

    test("should handle invalid date strings gracefully by returning default date range", () => {
      const period = {
        from: "invalid-date",
        to: "invalid-date",
      };
      const defaultTo = new Date();
      const defaultFrom = subDays(defaultTo, 30);
      const result = formatDateRange(period);
      expect(result).toBe(
        `${format(defaultFrom, "LLL dd")} - ${format(defaultTo, "LLL dd, y")}`,
      );
    });

    test("should handle from date as undefined and to date as undefined by returning default date range", () => {
      const period = {
        from: undefined,
        to: undefined,
      };
      const defaultTo = new Date();
      const defaultFrom = subDays(defaultTo, 30);
      const result = formatDateRange(period);
      expect(result).toBe(
        `${format(defaultFrom, "LLL dd")} - ${format(defaultTo, "LLL dd, y")}`,
      );
    });

    test("should handle from date as null and to date as null by returning default date range", () => {
      const period = {
        from: null,
        to: null,
      };
      const defaultTo = new Date();
      const defaultFrom = subDays(defaultTo, 30);
      const result = formatDateRange(period);
      expect(result).toBe(
        `${format(defaultFrom, "LLL dd")} - ${format(defaultTo, "LLL dd, y")}`,
      );
    });
  });
});

// End of unit tests for: formatDateRange
