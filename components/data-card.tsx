import { IconType } from 'react-icons';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

const boxVariants = cva('shrink-0 rounded-md p-3', {
  variants: {
    variant: {
      default: 'bg-blue-500/20',
      success: 'bg-emerald-500/20',
      warning: 'bg-amber-500/20',
      danger: 'bg-rose-500/20',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const iconVariants = cva('size-6', {
  variants: {
    variant: {
      default: 'fill-blue-500',
      success: 'fill-emerald-500',
      warning: 'fill-amber-500',
      danger: 'fill-rose-500',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BoxVariants = VariantProps<typeof boxVariants>;
type IconVariants = VariantProps<typeof iconVariants>;

interface DataCardProps extends BoxVariants, IconVariants {
  title: string;
  value?: number;
  percentageChange?: number;
  dataRange: string;
  icon: IconType;
}

export const DataCard = ({
  title,
  value = 0,
  percentageChange = 0,
  icon: Icon, // this is an allias for icon
  variant,
  dataRange,
}: DataCardProps) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-x-4">
        <div className="space-y-2">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="line-clamp1">{dataRange}</CardDescription>
        </div>
        <div className={cn(boxVariants({ variant }))}>
          <Icon className={cn(iconVariants({ variant }))} />
        </div>
      </CardHeader>
    </Card>
  );
};
