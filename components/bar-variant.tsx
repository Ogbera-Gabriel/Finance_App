import { format } from 'date-fns';
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { CustomTooltip } from './custom-tooltip';

type Props = {
  data: {
    date: Date;
    income: number;
    expenses: number;
  }[];
};

export const BarVariant = ({ data }: Props) => {
    
}