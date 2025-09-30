import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ReactNode } from "react";

interface SolutionCardProps {
  title: string;
  description: string;
  features: string[];
  icon: ReactNode;
  badge?: string;
}

export const SolutionCard = ({ title, description, features, icon, badge }: SolutionCardProps) => {
  
  return (
    <Card className="bg-gradient-luxury shadow-luxury hover:shadow-elegant transition-all duration-300 border-border/50">
      <CardHeader className="text-center pb-4">
        <div className="flex justify-center mb-4 text-primary">
          {icon}
        </div>
        <CardTitle className="font-playfair text-xl text-foreground flex items-center justify-center gap-2">
          {title}
          {badge && <Badge variant="secondary" className="bg-accent-gold text-accent-gold-foreground">{badge}</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4 leading-relaxed">{description}</p>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2 text-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
              <span className="text-card-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};