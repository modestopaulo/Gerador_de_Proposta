interface ProposalHeaderProps {
  clientName?: string;
}
export const ProposalHeader = ({
  clientName = "Sua Clínica"
}: ProposalHeaderProps) => {
  return <div className="bg-gradient-hero text-primary-foreground py-24 px-6 relative overflow-hidden min-h-[85vh] flex items-center">
      
      {/* Elementos decorativos de fundo melhorados */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-accent-gold rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-white rounded-full blur-3xl opacity-50"></div>
        
        {/* Elementos geométricos decorativos */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-accent-gold rounded-full animate-ping delay-500"></div>
        <div className="absolute bottom-1/4 left-3/4 w-1 h-1 bg-white rounded-full animate-ping delay-1000"></div>
      </div>
      
      {/* Grade de fundo sutil */}
      <div className="absolute inset-0 opacity-5" style={{
      backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
      backgroundSize: '50px 50px'
    }}>
      </div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10 w-full">
        <div className="mb-12 transform hover:scale-105 transition-transform duration-700">
          <div className="mb-8">
            <div className="inline-block p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 mb-8 shadow-luxury">
              <h1 className="font-playfair text-6xl md:text-8xl mb-4 tracking-tight leading-none font-bold lg:text-2xl">
                Proposta Exclusiva The Forge AI
                <span className="block text-5xl md:text-7xl lg:text-8xl mt-3 text-accent-gold drop-shadow-lg animate-pulse">{clientName}</span>
              </h1>
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl md:text-3xl font-light opacity-95 max-w-4xl mx-auto leading-relaxed lg:text-xl">
              Soluções Inteligentes de IA para Atendimento Automatizado
            </p>
            
            <div className="flex items-center justify-center space-x-4 my-10">
              <div className="h-px w-20 bg-gradient-to-r from-transparent to-white/50"></div>
              <div className="w-3 h-3 rounded-full bg-accent-gold animate-pulse"></div>
              <div className="h-px w-20 bg-gradient-to-l from-transparent to-white/50"></div>
            </div>
          </div>
        </div>
        
        
      </div>
    </div>;
};
