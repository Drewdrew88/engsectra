import { Target, Users, Award, Briefcase } from 'lucide-react';

const stats = [
  { number: '30+', label: 'Anos de Experiência' },
  { number: '5.000+', label: 'Profissionais Capacitados' },
  { number: '500+', label: 'Empresas Atendidas' },
  { number: '98%', label: 'Satisfação dos Clientes' },
];

const values = [
  {
    icon: Target,
    title: 'Missão',
    description: 'Promover a cultura de prevenção de acidentes e doenças ocupacionais, contribuindo para ambientes de trabalho mais seguros e saudáveis.',
  },
  {
    icon: Users,
    title: 'Visão',
    description: 'Ser referência nacional em soluções de Segurança e Saúde do Trabalho, reconhecida pela excelência e inovação em nossos serviços.',
  },
  {
    icon: Award,
    title: 'Valores',
    description: 'Ética, comprometimento, qualidade, inovação e respeito às pessoas são os pilares que orientam todas as nossas ações.',
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            Quem Somos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Tradição e Inovação em <span className="text-gradient">SST</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Desde 1995, a ENGSEGTRA atua na área de Engenharia de Segurança do Trabalho, 
            oferecendo soluções completas para empresas de todos os portes e segmentos.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-card rounded-2xl p-6 text-center shadow-md border border-border hover:shadow-lg transition-shadow"
            >
              <div className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-card rounded-2xl p-8 shadow-md border border-border hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <value.icon className="text-primary" size={28} />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Services preview */}
        <div className="mt-16 bg-foreground rounded-3xl p-8 md:p-12 text-background">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
                Nossos Serviços
              </h3>
              <p className="text-background/80 mb-6">
                Oferecemos uma gama completa de serviços em SST para garantir a conformidade 
                legal e a segurança dos colaboradores da sua empresa.
              </p>
              <ul className="space-y-3">
                {[
                  'Elaboração e Gestão de PGR/PCMSO',
                  'LTCAT e Laudos Técnicos',
                  'Treinamentos NRs',
                  'Perícias e Assistência Técnica',
                  'Consultoria em SST',
                ].map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <Briefcase size={18} className="text-primary" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="bg-background/10 rounded-2xl p-8 backdrop-blur">
                <div className="text-center">
                  <div className="font-heading text-6xl font-bold text-primary mb-2">SST</div>
                  <div className="text-background/80">Segurança e Saúde no Trabalho</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
