
import { cn } from "@/lib/utils";

interface StatCardProps {
  percentage: string;
  description: string;
  className?: string;
}

const StatCard = ({ percentage, description, className }: StatCardProps) => {
  return (
    <div className={cn("neural-card flex flex-col items-center justify-center p-6", className)}>
      <div className="text-4xl md:text-5xl font-bold text-neural-400 mb-3">{percentage}</div>
      <p className="text-center text-muted-foreground">{description}</p>
    </div>
  );
};

export default StatCard;
