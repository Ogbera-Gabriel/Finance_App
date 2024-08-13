import { formatPercentage } from '@/lib/utils';

describe('formatPercentage function', () => {
  it('should format positive percentage without prefix', () => {
    const result = formatPercentage(15);
    expect(result).toBe('15%');
  });

  it('should format negative percentage without prefix', () => {
    const result = formatPercentage(-10);
    expect(result).toBe('-10%');
  });

  it('should add "+" prefix to positive percentage when addPrefix option is true', () => {
    const result = formatPercentage(25, { addPrefix: true });
    expect(result).toBe('+25%');
  });

  it('should not add "+" prefix to zero percentage when addPrefix option is true', () => {
    const result = formatPercentage(0, { addPrefix: true });
    expect(result).toBe('0%');
  });

  it('should not add "+" prefix to negative percentage when addPrefix option is true', () => {
    const result = formatPercentage(-5, { addPrefix: true });
    expect(result).toBe('-5%');
  });

  it('should format with maximum fraction digits as specified in options', () => {
    const result = formatPercentage(12.3456);
    expect(result).toBe('12.35%');
  });

  it('should handle values that need rounding correctly', () => {
    const result = formatPercentage(12.3449);
    expect(result).toBe('12.34%');
  });
});
