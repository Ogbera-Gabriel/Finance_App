import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, BarChart3, FileSearch, LineChart } from 'lucide-react';
import { AreaVariant } from './area-variant';
import { BarVariant } from './bar-variant';
import { LineVariant } from './line-variant';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

type Props = {
  data?: {
    date: string;
    income: number;
    expenses: number;
  }[];
};

export const Charts = ({ data = [] }: Props) => {
  const [chartType, setChartType] = useState("bar");

  const onTypeChange = (type: string) => {
    
    setChartType(type);
  }
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
        <CardTitle className='text-xg line-clamp-1'>Transactions</CardTitle>
        <Select
          onValueChange={onTypeChange}
          defaultValue={chartType}
        >
          <SelectTrigger className='lg:w-auto h-9 rounded-md px-3'>
            <SelectValue placeholder="Select chart type"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="bar">
              <div className='flex items-center'>
                 <BarChart3 className='size-4 mr-2 shrink-0'/>
                 <p className='line-clamp-1'>
                   Bar
                 </p>
              </div>
            </SelectItem>
            <SelectItem value="area">
              <div className='flex items-center'>
                 <AreaChart className='size-4 mr-2 shrink-0'/>
                 <p className='line-clamp-1'>
                   Area
                 </p>
              </div>
            </SelectItem>
            <SelectItem value="line">
              <div className='flex items-center'>
                 <LineChart className='size-4 mr-2 shrink-0'/>
                 <p className='line-clamp-1'>
                   Line
                 </p>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        {data.length === 0 ? (
            <div className='flex flex-col gap-y-4 items-center justify-center h-[350px] w-full'>
              <FileSearch className='size-6 text-muted-foreground'/>
              <p className='text-muted-foreground text-sm'>
                No data for this period
              </p>
            </div>
        ) : (
          <>
           {chartType === "bar" && <BarVariant data={data}/>}
           {chartType === "area" && <AreaVariant data={data}/>}
           {chartType === "line" && <LineVariant data={data}/>}
          </>
        )}
      </CardContent>
    </Card>
  );
};
