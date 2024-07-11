'use client';

import { Button } from '@/components/ui/button';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowUpDown } from 'lucide-react';
import { InferResponseType } from 'hono';
import { Checkbox } from '../ui/checkbox';
import { client } from '@/lib/hono';
import { Actions } from './actions';
import { format } from 'date-fns';
import { covertAmountFromMiliunits, formatCurrency } from '@/lib/utils';
import { Badge } from '../ui/badge';

export type ResponseType = InferResponseType<
  typeof client.api.transactions.$get,
  200
>['data'][0]; // infer response type

export const columns: ColumnDef<ResponseType>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllRowsSelected() ||
          (table.getIsSomeRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={row.getToggleSelectedHandler()}
        aria-label="Select row"
      />
    ),
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Date
          <ArrowUpDown className="size-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const date = new Date(row.getValue('date')) as Date;

      return <span>{format(date, 'MM/dd/yyyy')}</span>;
    },
  },
  {
    accessorKey: 'amount',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Amount
          <ArrowUpDown className="size-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const finalAmount = covertAmountFromMiliunits(row.getValue('amount'));
      return (
        <Badge 
        variant={finalAmount < 0 ? 'destructive' : 'emerald'}
        className='text-xs font-medium px-3.5 py-2.5'
        >
          {formatCurrency(finalAmount)}
        </Badge>
      );
    },
  },
  {
    accessorKey: 'account',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Account
          <ArrowUpDown className="size-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'category',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Category
          <ArrowUpDown className="size-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: 'payee',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Payee
          <ArrowUpDown className="size-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <span>
          {row.getValue('payee') === '' ? 'No payee' : row.getValue('payee')}
        </span>
      );
    },
  },
  {
    accessorKey: 'notes',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Notes
          <ArrowUpDown className="size-4 ml-2" />
        </Button>
      );
    },
    cell: ({ row }) => {
      return (
        <span>
          {row.getValue('notes') === '' ? 'No notes' : row.getValue('notes')}
        </span>
      );
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <Actions id={row.original.id} />,
  },
];
