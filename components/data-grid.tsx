'use client';

import { useGetSummary } from '@/features/summary/api/use-get-summary';
import { formatDateRange } from '@/lib/utils';
import { useSearchParams } from 'next/navigation';
import { FaPiggyBank } from 'react-icons/fa';
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6';
import { DataCard } from '@/components/data-card';
import { DataCardLoading } from '@/components/data-card-loading';

export const DataGrid = () => {
  const { data, isLoading } = useGetSummary();
  const params = useSearchParams();
  const to = params.get('to') || undefined;
  const from = params.get('from') || undefined;

  const dateRangeLabel = formatDateRange({ to, from });

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2">
        <DataCardLoading />
        <DataCardLoading />
        <DataCardLoading />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-2 mb-8">
      <DataCard
        title="Net Balance"
        value={data?.remainingAmount}
        percentageChange={data?.remainingChange}
        icon={FaPiggyBank}
        variant="default"
        dataRange={dateRangeLabel}
      />
      <DataCard
        title="Income Balance"
        value={data?.incomeAmount}
        percentageChange={data?.incomeChange}
        icon={FaArrowTrendUp}
        dataRange={dateRangeLabel}
      />
      <DataCard
        title="Expense Balance"
        value={data?.expenseAmount}
        percentageChange={data?.expenseChange}
        icon={FaArrowTrendDown}
        dataRange={dateRangeLabel}
      />
    </div>
  );
};
