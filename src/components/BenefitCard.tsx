
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface BenefitCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const BenefitCard = ({ title, description, icon, className }: BenefitCardProps) => {
  return (
    <div className={cn("neural-card group", className)}>
      <div className="mb-4 text-neural-400 group-hover:text-neural-300 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-white">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

export default BenefitCard;
