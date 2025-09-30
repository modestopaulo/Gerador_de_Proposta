import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Sparkles, Crown } from "lucide-react";
interface PricingCardProps {
  title: string;
  monthlyPrice: string;
  implementationPrice: string;
  features: string[];
  popular?: boolean;
}
export const PricingCard = ({
  title,
  monthlyPrice,
  implementationPrice,
  features,
  popular
}: PricingCardProps) => {
  return <Card className={`relative overflow-hidden transform hover:scale-105 transition-all duration-500 ${popular ? 'bg-gradient-to-br from-primary/5 via-background to-accent-gold/5 border-primary/30 ring-2 ring-primary/20 shadow-2xl' : 'bg-gradient-luxury border-border/50 shadow-luxury hover:shadow-elegant'}`}>
      
      
      
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent-gold/10 to-transparent rounded-full -mr-16 -mt-16"></div>
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/10 to-transparent rounded-full -ml-12 -mb-12"></div>
      
      <CardHeader className="text-center pb-8 relative z-10">
        
        <CardTitle className="font-playfair text-3xl font-bold text-foreground mb-4 leading-tight">
          {title}
        </CardTitle>
        
        {/* Pricing Display */}
        <div className="space-y-4">
          <div className="relative">
            <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent-gold bg-clip-text text-transparent">
              R$ {monthlyPrice}
            </div>
            <p className="text-muted-foreground text-base font-medium">por mês</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
            <p className="text-lg font-semibold text-foreground mb-2">Taxa de Implementação</p>
            <p className="text-3xl font-bold text-accent-gold">R$ {implementationPrice}</p>
            <p className="text-sm text-muted-foreground mt-1">Pagamento único na implementação</p>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10">
        {/* Features List */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
          <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-accent-gold" />
            Incluso na Solução:
          </h4>
          <ul className="space-y-4">
            {features.map((feature, index) => <li key={index} className="flex items-start gap-3 group">
                <div className="bg-gradient-to-r from-primary to-accent-gold p-1 rounded-full mt-0.5">
                  <Check className="w-3 h-3 text-white bg-transparent" />
                </div>
                <span className="text-card-foreground leading-relaxed group-hover:text-foreground transition-colors duration-200">
                  {feature}
                </span>
              </li>)}
          </ul>
        </div>
        
        {/* CTA Button */}
        <Button className={`w-full h-14 text-lg font-semibold relative overflow-hidden group ${popular ? 'bg-gradient-to-r from-primary to-accent-gold hover:from-primary/90 hover:to-accent-gold/90 text-white shadow-xl' : 'bg-gradient-to-r from-secondary to-secondary/80 hover:from-secondary/90 hover:to-secondary/70 text-secondary-foreground'} transition-all duration-300 transform hover:scale-105`}>
          <span className="relative z-10">Solicitar Proposta</span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </Button>
        
        {popular}
      </CardContent>
    </Card>;
};
