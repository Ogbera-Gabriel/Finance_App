import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {  FileSearch, PieChart, Radar, Target  } from 'lucide-react';
import { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PieVariant } from '@/components/pie-variant';
import { RadarVariant } from '@/components/radar-variant';
import { RadialVariant } from '@/components/radial-variant';

type Props = {
  data?: {
    name: string;
    value: number;
  }[];
};

export const SpendingPie = ({ data = [] }: Props) => {
  const [chartType, setChartType] = useState("pie");

  const onTypeChange = (type: string) => {
    
    setChartType(type);
  }
  return (
    <Card className="border-none drop-shadow-sm">
      <CardHeader className="flex space-y-2 lg:space-y-0 lg:flex-row lg:items-center justify-between">
        <CardTitle className='text-xg line-clamp-1'>Categories</CardTitle>
        <Select
          onValueChange={onTypeChange}
          defaultValue={chartType}
        >
          <SelectTrigger className='lg:w-auto h-9 rounded-md px-3'>
            <SelectValue placeholder="Select chart type"/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="pie">
              <div className='flex items-center'>
                 <PieChart className='size-4 mr-2 shrink-0'/>
                 <p className='line-clamp-1'>
                   Pie Chart 
                 </p>
              </div>
            </SelectItem>
            <SelectItem value="radar">
              <div className='flex items-center'>
                 <Radar className='size-4 mr-2 shrink-0'/>
                 <p className='line-clamp-1'>
                   Radar Chart
                 </p>
              </div>
            </SelectItem>
            <SelectItem value="target">
              <div className='flex items-center'>
                 <Target className='size-4 mr-2 shrink-0'/>
                 <p className='line-clamp-1'>
                   Target Chart
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
           {chartType === "pie" && <PieVariant data={data}/>}
           {chartType === "radar" && <RadarVariant data={data}/>}
           {chartType === "target" && <RadialVariant data={data}/>}
          </>
        )}
      </CardContent>
    </Card>
  );
};
