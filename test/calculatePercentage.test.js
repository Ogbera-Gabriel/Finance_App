import { calculatePercentageChange } from '@/lib/utils';

describe('calculatePercentageChange', () => {
  test('returns 0% change when both current and previous are 0', () => {
    expect(calculatePercentageChange(0, 0)).toBe(0);
  });

  test('returns 100% change when previous is 0 and current is non-zero', () => {
    expect(calculatePercentageChange(100, 0)).toBe(100);
  });

  test('returns correct percentage increase when current is greater than previous', () => {
    expect(calculatePercentageChange(150, 100)).toBe(50);
    expect(calculatePercentageChange(200, 100)).toBe(100);
  });

  test('returns correct percentage decrease when current is less than previous', () => {
    expect(calculatePercentageChange(50, 100)).toBe(-50);
    expect(calculatePercentageChange(75, 100)).toBe(-25);
  });

  test('returns 0% when current equals previous', () => {
    expect(calculatePercentageChange(100, 100)).toBe(0);
  });

  test('returns correct percentage when dealing with negative values', () => {
    expect(calculatePercentageChange(-50, -100)).toBe(50);
    expect(calculatePercentageChange(-100, -50)).toBe(-200);
  });

  test('handles fractional results correctly by rounding to nearest integer', () => {
    expect(calculatePercentageChange(105, 100)).toBe(5);
    expect(calculatePercentageChange(95, 100)).toBe(-5);
  });
});
