import { Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-subtle" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 rounded-bl-[200px]" />
      
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Shield size={16} />
              <span>Especialistas em SST desde 1995</span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Segurança do Trabalho com{' '}
              <span className="text-gradient">Excelência</span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Cuidando com carinho de quem faz o Brasil crescer. Soluções completas em 
              <strong className="text-foreground"> Segurança e Saúde no Trabalho</strong> para sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" asChild>
                <a href="#courses">
                  Conheça Nossos Cursos
                  <ArrowRight size={20} />
                </a>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <a href="#legislation">
                  Atualizações NRs 2026
                </a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              {['30+ anos de experiência', 'Cursos EAD certificados', 'Atendimento personalizado'].map((item) => (
                <div key={item} className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle size={18} className="text-primary" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative bg-card rounded-3xl shadow-lg p-8 border border-border">
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground px-4 py-2 rounded-xl font-heading font-bold shadow-lg">
                DESTAQUE 2026
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Novas Normas Regulamentadoras
              </h3>
              <p className="text-muted-foreground mb-6">
                Fique atualizado com as mudanças na legislação de SST que entram em vigor em 2026.
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  'NR-1: Riscos psicossociais obrigatórios',
                  'NR-35: Novas exigências para trabalho em altura',
                  'PGR: Gerenciamento de Riscos Ocupacionais',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button variant="hero" className="w-full" asChild>
                <a href="#legislation">Saiba Mais</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
