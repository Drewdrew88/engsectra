import { Star, Quote } from 'lucide-react';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Carlos Eduardo Silva',
    role: 'Técnico de Segurança',
    company: 'Construtora ABC',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Os cursos da ENGSEGTRA foram fundamentais para minha certificação em NR-35. Conteúdo atualizado e instrutores excelentes.',
  },
  {
    name: 'Maria Fernanda Costa',
    role: 'Coordenadora de SST',
    company: 'Indústria Metalúrgica XYZ',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'A consultoria para adequação às novas NRs foi impecável. A equipe nos guiou em todo o processo de implementação do PGR.',
  },
  {
    name: 'Roberto Almeida',
    role: 'Gerente de Operações',
    company: 'Logística Express',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Capacitamos toda nossa equipe de 200 funcionários com os treinamentos EAD. Flexibilidade e qualidade incomparáveis.',
  },
  {
    name: 'Ana Paula Santos',
    role: 'Engenheira de Segurança',
    company: 'Petroquímica Sul',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Parceria de mais de 5 anos. A ENGSEGTRA sempre nos mantém atualizados sobre mudanças na legislação de SST.',
  },
  {
    name: 'João Pedro Lima',
    role: 'Diretor Industrial',
    company: 'Manufatura Tech',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    rating: 5,
    text: 'Reduzimos em 80% os acidentes de trabalho após implementar as recomendações da consultoria. Investimento que se paga.',
  },
];

export const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-foreground text-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <Quote size={16} />
            Depoimentos
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-background/70 text-lg max-w-2xl mx-auto">
            Mais de 500 empresas confiam na ENGSEGTRA para garantir a segurança de seus colaboradores.
          </p>
        </div>

        {/* Featured testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="bg-background/5 backdrop-blur rounded-3xl p-8 md:p-12 relative">
            <Quote className="absolute top-6 left-6 text-primary/20" size={60} />
            <div className="relative z-10">
              <div className="flex items-center gap-1 mb-6">
                {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-xl md:text-2xl text-background/90 mb-8 italic leading-relaxed">
                "{testimonials[activeIndex].text}"
              </p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].image}
                  alt={testimonials[activeIndex].name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                />
                <div>
                  <div className="font-heading font-bold text-lg">{testimonials[activeIndex].name}</div>
                  <div className="text-background/60 text-sm">{testimonials[activeIndex].role}</div>
                  <div className="text-primary text-sm">{testimonials[activeIndex].company}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeIndex ? 'bg-primary w-8' : 'bg-background/30 hover:bg-background/50'
              }`}
              aria-label={`Ver depoimento ${index + 1}`}
            />
          ))}
        </div>

        {/* All testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`bg-background/5 rounded-2xl p-6 transition-all duration-300 hover:bg-background/10 cursor-pointer ${
                index === activeIndex ? 'ring-2 ring-primary' : ''
              }`}
              onClick={() => setActiveIndex(index)}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-background/80 text-sm mb-4 line-clamp-3">"{testimonial.text}"</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-background/50 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
