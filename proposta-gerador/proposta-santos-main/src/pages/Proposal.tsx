import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { ProposalHeader } from "@/components/ProposalHeader";
import { SolutionCard } from "@/components/SolutionCard";
import { PricingCard } from "@/components/PricingCard";
import { ContactSection } from "@/components/ContactSection";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Users, Calendar, BarChart3, MessageSquare, UserCheck, Settings, TrendingUp, Clock, Target } from "lucide-react";

const Proposal = () => {
  const { id } = useParams();
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    axios.get(`http://localhost:5000/proposal/${id}`)
      .then(res => {
        setData(res.data);
        setError("");
      })
      .catch(err => {
        setError(err?.response?.data?.error || "Erro ao buscar proposta");
        setData(null);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div style={{ textAlign: "center", marginTop: 40 }}>Carregando...</div>;
  if (error) return <div style={{ color: "red", textAlign: "center", marginTop: 40 }}>{error}</div>;
  if (!data) return null;

  // Dados personalizados da proposta
  const proposalData = {
    companyName: data.company_name,
    investment: data.investment,
    investmentType: data.investment_type,
    implementationFee: data.implementation_fee,
    implementationType: data.implementation_type
  };

  return (
    <div className="min-h-screen bg-background">
      <ProposalHeader clientName={proposalData.companyName} />
      
      {/* Introdução */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Transforme seu Negócio com Inteligência Artificial
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Nossa solução integrada de IA foi especialmente desenvolvida para empresas modernas, oferecendo automação completa do atendimento, qualificação de leads e gestão de clientes.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-gradient-luxury shadow-luxury text-center p-6 border-border/50">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">-80% no tempo de resposta</h3>
              <p className="text-muted-foreground">Respostas instantâneas que aumentam a satisfação dos clientes.</p>
            </Card>
            <Card className="bg-gradient-luxury shadow-luxury text-center p-6 border-border/50">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">24/7 Atendimento</h3>
              <p className="text-muted-foreground">Disponibilidade total para seus clientes, mesmo fora do horário comercial</p>
            </Card>
            <Card className="bg-gradient-luxury shadow-luxury text-center p-6 border-border/50">
              <Target className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-2">100% Personalizado</h3>
              <p className="text-muted-foreground">Treinado especificamente com as informações do seu negócio</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Soluções */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Nossas Soluções de IA
            </h2>
            <p className="text-xl text-muted-foreground">
              Três componentes inteligentes trabalhando para maximizar seus resultados
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <SolutionCard
              title="Agente de Pré-Atendimento"
              description="Atendimento automático 24/7 que qualifica leads, agenda reuniões e responde dúvidas com precisão."
              icon={<Bot className="w-12 h-12" />}
              badge="Essencial"
              features={[
                "Respostas instantâneas via WhatsApp",
                "Qualificação automática de leads",
                "Agendamento de reuniões",
                "Integração com calendário",
                "Respostas baseadas no seu negócio",
                "Relatórios de conversas"
              ]}
            />
            <SolutionCard
              title="Agente de Follow-up"
              description="Sistema inteligente que mantém contato com leads e clientes, aumentando conversões."
              icon={<MessageSquare className="w-12 h-12" />}
              badge="Recomendado"
              features={[
                "Follow-up automático personalizado",
                "Lembretes de reuniões",
                "Controle de frequência e timing",
                "Reativação de leads frios",
                "Relatórios de performance detalhados"
              ]}
            />
            <SolutionCard
              title="Plataforma CRM Personalizada"
              description="Dashboard completo para gestão de leads, clientes e métricas, com visual personalizado da sua marca."
              icon={<BarChart3 className="w-12 h-12" />}
              badge="Exclusivo"
              features={[
                "Interface personalizada com cores e logo da empresa",
                "Gestão completa de leads",
                "Cadastro detalhado de clientes atendidos",
                "Dashboard com métricas",
                "Configurações gerais dos agentes",
                "Relatórios de atendimento"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Nossos Clientes */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Nossos Clientes
            </h2>
            <p className="text-xl text-muted-foreground">
              Empresas que já confiam na nossa solução de IA
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Dog King - Mogi das Cruzes */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/2e1230bd-7b88-4193-9b73-cdfc268ed434.png" alt="Dog King Mogi das Cruzes" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Dog King Mogi das Cruzes</h4>
                <p className="text-sm text-muted-foreground">Restaurante</p>
              </div>
            </Card>
            {/* Dog King - Suzano */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/e93c1cfa-c27b-474d-bd45-c34c5f436287.png" alt="Dog King Suzano" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Dog King Suzano</h4>
                <p className="text-sm text-muted-foreground">Restaurante</p>
              </div>
            </Card>
            {/* Dog King - Itaim Paulista */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/93424b6a-978c-46ae-858b-64af308b0825.png" alt="Dog King Itaim Paulista" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Dog King Itaim Paulista</h4>
                <p className="text-sm text-muted-foreground">Restaurante</p>
              </div>
            </Card>
            {/* SITRAN */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/e380b7b8-b493-4f40-badf-559833f701eb.png" alt="SITRAN" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">SITRAN</h4>
                <p className="text-sm text-muted-foreground">Sindicato de Transporte</p>
              </div>
            </Card>
            {/* Gallardo Multimarcas */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/999a987b-7f07-4720-9409-0b029f0e02a5.png" alt="Gallardo Multimarcas" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Gallardo Multimarcas</h4>
                <p className="text-sm text-muted-foreground">Concessionária de Veículos</p>
              </div>
            </Card>
            {/* Evolve Essence */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/2bd22725-bf29-4340-bc20-21a5433877dc.png" alt="Evolve Essence" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Evolve Essence</h4>
                <p className="text-sm text-muted-foreground">Empreendimento</p>
              </div>
            </Card>
            {/* Empreendegol */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/ec5bb9f0-04f1-40b8-b93a-d1fd0aaec081.png" alt="Empreendegol" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Empreendegol</h4>
                <p className="text-sm text-muted-foreground">Futebol & Networking</p>
              </div>
            </Card>
            {/* AGEO Móveis Design */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/78503c02-5f11-4c3b-8aa5-ad525814a615.png" alt="AGEO Móveis Design" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">AGEO Móveis Design</h4>
                <p className="text-sm text-muted-foreground">Design & Móveis Planejados</p>
              </div>
            </Card>
            {/* Palácio Sushi House */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/00732c79-f092-4c16-8064-e59be6f77edb.png" alt="Palácio Sushi House" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Palácio Sushi House</h4>
                <p className="text-sm text-muted-foreground">Restaurante & Gastronomia</p>
              </div>
            </Card>
            {/* JRL Empregos */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/5ab997ad-a3e5-4317-b961-1fa8f058bad9.png" alt="JRL Empregos" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">JRL Empregos</h4>
                <p className="text-sm text-muted-foreground">Recrutamento e seleção</p>
              </div>
            </Card>
            {/* Successful' Man */}
            <Card className="bg-white shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-center mb-4 h-[80px]">
                <img src="/lovable-uploads/adfa20f3-432e-44f3-b1f6-e3e7c1ee8473.png" alt="Successful' Man" className="max-w-full max-h-full object-contain" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Successful' Man</h4>
                <p className="text-sm text-muted-foreground">Moda Masculina</p>
              </div>
            </Card>
            {/* Entre Outros */}
            <Card className="bg-gradient-luxury shadow-luxury border-border/50 p-6 text-center min-h-[180px] hover:shadow-xl transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-4xl mb-4">⭐</div>
                <h4 className="font-playfair text-xl font-semibold text-primary mb-2">Entre Outros...</h4>
                <p className="text-sm text-muted-foreground">Diversos segmentos atendidos</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Investimento
            </h2>
            <p className="text-xl text-muted-foreground">
              Solução completa para transformar seu negócio
            </p>
          </div>
          <PricingCard
            title={`Investimento da Solução para ${proposalData.companyName}`}
            monthlyPrice={proposalData.investment?.toString() || "2.500"}
            implementationPrice={proposalData.implementationFee?.toString() || "4.000"}
            popular={true}
            features={[
              "Agente de Pré-Atendimento completo",
              "Agente de Follow-up automatizado",
              "Plataforma CRM personalizada",
              "Integração com WhatsApp",
              "Dashboard com métricas essenciais",
              "Gestão de tráfego pago",
              "Suporte técnico especializado",
              "Treinamento da equipe incluído",
              "Atualizações mensais dos agentes"
            ]}
          />
        </div>
      </section>

      {/* Como Funciona a Implementação */}
      <section className="py-16 px-6 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-foreground mb-6">
              Como Funciona a Implementação
            </h2>
            <p className="text-xl text-muted-foreground">
              Processo simples e eficiente para colocar sua IA funcionando
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-gradient-luxury shadow-luxury border-border/50 text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Análise e Mapeamento</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Coletamos todas as informações da sua empresa e mapeamos os processos atuais
              </p>
            </Card>
            <Card className="bg-gradient-luxury shadow-luxury border-border/50 text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Desenvolvimento Personalizado</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Criamos e treinamos os agentes com as informações específicas da sua empresa
              </p>
            </Card>
            <Card className="bg-gradient-luxury shadow-luxury border-border/50 text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Integração e Testes</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Conectamos tudo ao seu WhatsApp e fazemos testes completos antes da entrega
              </p>
            </Card>
            <Card className="bg-gradient-luxury shadow-luxury border-border/50 text-center p-6 hover:shadow-elegant transition-all duration-300">
              <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-foreground mb-3">Treinamento e Entrega</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Capacitamos sua equipe e entregamos a solução 100% funcional
              </p>
            </Card>
      </div>
        </div>
      </section>
      
      <ContactSection />
    </div>
  );
};

export default Proposal;

