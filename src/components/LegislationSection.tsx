import { AlertTriangle, FileText, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const updates = [
  {
    nr: 'NR-1',
    title: 'Riscos Psicossociais',
    deadline: 'Maio 2026',
    status: 'Em vigor',
    description: 'A nova atualização da NR-1 torna obrigatória a inclusão de riscos psicossociais no Programa de Gerenciamento de Riscos (PGR). Isso inclui fatores como estresse, assédio e sobrecarga de trabalho.',
    changes: [
      'Inclusão obrigatória de riscos psicossociais no PGR',
      'Avaliação de fatores organizacionais',
      'Medidas de prevenção ao assédio',
      'Monitoramento da saúde mental',
    ],
  },
  {
    nr: 'NR-35',
    title: 'Trabalho em Altura',
    deadline: 'Julho 2026',
    status: 'Prazo em andamento',
    description: 'Novas exigências para trabalho em altura com foco em sistemas de ancoragem, capacitação e medidas de proteção coletiva.',
    changes: [
      'Novos requisitos para sistemas de ancoragem',
      'Atualização na carga horária de treinamentos',
      'Exigência de análise de risco por atividade',
      'Requisitos para equipamentos de proteção',
    ],
  },
  {
    nr: 'NR-7',
    title: 'PCMSO Atualizado',
    deadline: 'Janeiro 2026',
    status: 'Em vigor',
    description: 'Alterações no Programa de Controle Médico de Saúde Ocupacional com novos parâmetros para exames e acompanhamento.',
    changes: [
      'Novos exames obrigatórios por função',
      'Integração com o PGR',
      'Relatórios analíticos anuais',
      'Prontuário médico digital',
    ],
  },
];

export const LegislationSection = () => {
  return (
    <section id="legislation" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <AlertTriangle size={16} />
            Atenção às Mudanças
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Atualizações <span className="text-gradient">NRs 2026</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Fique por dentro das principais mudanças na legislação de Segurança e Saúde do Trabalho 
            que entram em vigor em 2025 e 2026. Prepare sua empresa com antecedência.
          </p>
        </div>

        <div className="space-y-8">
          {updates.map((update, index) => (
            <div
              key={update.nr}
              className="bg-card rounded-2xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-3">
                <div className="bg-primary/5 p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 text-primary font-bold text-sm mb-2">
                    <FileText size={16} />
                    {update.nr}
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-3">
                    {update.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm">
                    <Calendar size={14} className="text-muted-foreground" />
                    <span className="text-muted-foreground">Prazo: {update.deadline}</span>
                  </div>
                  <div className="mt-3">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-3 py-1 rounded-full ${
                      update.status === 'Em vigor' 
                        ? 'bg-green-100 text-green-700' 
                        : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {update.status}
                    </span>
                  </div>
                </div>
                <div className="md:col-span-2 p-8">
                  <p className="text-muted-foreground mb-6">{update.description}</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {update.changes.map((change) => (
                      <div key={change} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{change}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 inline-block">
            <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
              Precisa de ajuda para se adequar?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl">
              Nossa equipe de especialistas pode auxiliar sua empresa na implementação 
              das novas exigências das Normas Regulamentadoras.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/5511951214359?text=Olá! Preciso de ajuda para adequação às novas NRs 2026." target="_blank" rel="noopener noreferrer">
                Solicitar Consultoria
                <ArrowRight size={18} />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
