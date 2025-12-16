import { GraduationCap, Clock, Award, Users, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const courses = [
  {
    title: 'NR-35 - Trabalho em Altura',
    hours: '8 horas',
    mode: 'EAD',
    price: 'R$ 149,90',
    highlight: true,
    description: 'Capacitação completa sobre trabalho em altura conforme NR-35 atualizada.',
    topics: ['Análise de risco', 'EPIs obrigatórios', 'Sistemas de ancoragem', 'Primeiros socorros'],
  },
  {
    title: 'NR-10 - Segurança em Eletricidade',
    hours: '40 horas',
    mode: 'EAD',
    price: 'R$ 299,90',
    highlight: false,
    description: 'Formação em segurança para serviços com eletricidade.',
    topics: ['Riscos elétricos', 'Medidas de controle', 'Equipamentos de proteção', 'Procedimentos de trabalho'],
  },
  {
    title: 'CIPA - Comissão Interna',
    hours: '20 horas',
    mode: 'EAD',
    price: 'R$ 199,90',
    highlight: false,
    description: 'Treinamento para membros da CIPA conforme NR-5.',
    topics: ['Atribuições da CIPA', 'Investigação de acidentes', 'Mapa de riscos', 'Reuniões ordinárias'],
  },
  {
    title: 'Primeiros Socorros',
    hours: '8 horas',
    mode: 'EAD',
    price: 'R$ 129,90',
    highlight: false,
    description: 'Técnicas essenciais de primeiros socorros no ambiente de trabalho.',
    topics: ['RCP', 'Hemorragias', 'Fraturas', 'Queimaduras'],
  },
  {
    title: 'NR-33 - Espaço Confinado',
    hours: '16 horas',
    mode: 'EAD',
    price: 'R$ 249,90',
    highlight: true,
    description: 'Capacitação para trabalhos em espaços confinados.',
    topics: ['Identificação', 'Avaliação atmosférica', 'Ventilação', 'Resgate'],
  },
  {
    title: 'Brigada de Incêndio',
    hours: '12 horas',
    mode: 'EAD + Prático',
    price: 'R$ 279,90',
    highlight: false,
    description: 'Formação completa para brigadistas de incêndio.',
    topics: ['Prevenção', 'Combate a incêndio', 'Evacuação', 'Uso de extintores'],
  },
];

export const CoursesSection = () => {
  return (
    <section id="courses" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <GraduationCap size={16} />
            Capacitação Profissional
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cursos <span className="text-gradient">Online</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Capacite sua equipe com nossos cursos EAD certificados. Conteúdo atualizado 
            conforme as últimas alterações das Normas Regulamentadoras.
          </p>
        </div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { icon: GraduationCap, label: 'Certificado Válido', desc: 'Reconhecido em todo Brasil' },
            { icon: Clock, label: 'Estude no Seu Ritmo', desc: 'Acesso por 12 meses' },
            { icon: Award, label: 'Conteúdo Atualizado', desc: 'NRs 2025/2026' },
            { icon: Users, label: 'Suporte Especializado', desc: 'Tutores online' },
          ].map((feature) => (
            <div key={feature.label} className="flex items-start gap-4 bg-card rounded-xl p-6 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <feature.icon className="text-primary" size={24} />
              </div>
              <div>
                <div className="font-semibold text-foreground">{feature.label}</div>
                <div className="text-sm text-muted-foreground">{feature.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Courses grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className={`bg-card rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                course.highlight ? 'border-primary shadow-md' : 'border-border'
              }`}
            >
              {course.highlight && (
                <div className="bg-primary text-primary-foreground text-center py-2 text-sm font-semibold flex items-center justify-center gap-2">
                  <Star size={14} />
                  Mais Vendido
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-heading text-xl font-bold text-foreground">
                    {course.title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">{course.description}</p>
                
                <div className="flex items-center gap-4 mb-4 text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock size={14} />
                    {course.hours}
                  </span>
                  <span className="bg-secondary text-secondary-foreground px-2 py-1 rounded-md text-xs font-medium">
                    {course.mode}
                  </span>
                </div>

                <div className="space-y-2 mb-6">
                  {course.topics.map((topic) => (
                    <div key={topic} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      {topic}
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="font-heading text-2xl font-bold text-primary">{course.price}</div>
                  <Button variant={course.highlight ? 'hero' : 'heroOutline'} size="sm" asChild>
                    <a href={`https://wa.me/5511951214359?text=Olá! Tenho interesse no curso: ${course.title}`} target="_blank" rel="noopener noreferrer">
                      Matricular
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="hero" size="xl" asChild>
            <a href="/cursos">
              Ver Todos os Cursos
              <ArrowRight size={20} />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
