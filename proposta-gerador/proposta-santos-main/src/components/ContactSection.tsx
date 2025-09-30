import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Globe, Instagram } from "lucide-react";
export const ContactSection = () => {
  
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5547992814820", "_blank");
  };
  const handleWebsiteClick = () => {
    window.open("https://theforgeai.com.br", "_blank");
  };
  const handleInstagramClick = () => {
    window.open("https://instagram.com/theforge_ai", "_blank");
  };
  return <div className="bg-gradient-hero text-primary-foreground py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="font-playfair text-4xl font-bold mb-6">Pronto para Revolucionar seu Negócio?</h2>
        <p className="text-xl opacity-90 mb-16">
          Entre em contato conosco e descubra como a IA pode transformar seu atendimento
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group hover:scale-105 shadow-elegant" onClick={handleWhatsAppClick}>
            <CardContent className="p-8 text-center">
              <div className="bg-white/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                <MessageCircle className="w-12 h-12 mx-auto" />
              </div>
              <p className="font-semibold mb-3 text-lg">WhatsApp</p>
              <p className="text-sm opacity-90">+55 47 99281-4820</p>
              <div className="mt-4 text-xs opacity-75 group-hover:opacity-100 transition-opacity">
                Clique para conversar
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group hover:scale-105 shadow-elegant" onClick={handleWebsiteClick}>
            <CardContent className="p-8 text-center">
              <div className="bg-white/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                <Globe className="w-12 h-12 mx-auto" />
              </div>
              <p className="font-semibold mb-3 text-lg">Website</p>
              <p className="text-sm opacity-90">theforgeai.com.br</p>
              <div className="mt-4 text-xs opacity-75 group-hover:opacity-100 transition-opacity">
                Visite nosso site
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer group hover:scale-105 shadow-elegant" onClick={handleInstagramClick}>
            <CardContent className="p-8 text-center">
              <div className="bg-white/20 rounded-full p-4 w-20 h-20 mx-auto mb-4 group-hover:bg-white/30 transition-all duration-300">
                <Instagram className="w-12 h-12 mx-auto" />
              </div>
              <p className="font-semibold mb-3 text-lg">Instagram</p>
              <p className="text-sm opacity-90">@theforge_ai</p>
              <div className="mt-4 text-xs opacity-75 group-hover:opacity-100 transition-opacity">
                Siga nosso perfil
              </div>
            </CardContent>
          </Card>
        </div>
        
        
      </div>
    </div>;
};