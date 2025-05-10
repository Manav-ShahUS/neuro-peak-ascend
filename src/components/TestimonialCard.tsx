
import { cn } from "@/lib/utils";
import { Card } from "./ui/card";
import { QuoteIcon } from "lucide-react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  className?: string;
}

const TestimonialCard = ({ quote, author, role, className }: TestimonialCardProps) => {
  return (
    <Card className={cn("bg-card/50 border-neural-700/30 p-6", className)}>
      <QuoteIcon className="h-8 w-8 text-neural-400 mb-4 opacity-50" />
      <p className="italic text-muted-foreground mb-6">{quote}</p>
      <div className="font-semibold">{author}</div>
      <div className="text-sm text-muted-foreground">{role}</div>
    </Card>
  );
};

export default TestimonialCard;
