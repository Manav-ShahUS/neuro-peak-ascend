
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface OutcomeItemProps {
  title: string;
  description: string;
  className?: string;
}

const OutcomeItem = ({ title, description, className }: OutcomeItemProps) => {
  return (
    <div className={cn("flex items-start gap-4", className)}>
      <CheckCircle className="h-6 w-6 text-neural-400 flex-shrink-0 mt-1" />
      <div>
        <h4 className="font-medium mb-1">{title}</h4>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </div>
  );
};

export default OutcomeItem;
