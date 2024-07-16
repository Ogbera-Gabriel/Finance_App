import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function covertAmountToMiliunits(amount: number) {
  return Math.round(amount * 1000);
}

export function covertAmountFromMiliunits(amount: number) {
  return amount / 1000;
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function calculatePercentageChange(current: number, previous: number) {
  if (previous === 0){
    return previous === current ? 0 : 100
  }
  return Math.round(((current - previous) / previous) * 100);
}