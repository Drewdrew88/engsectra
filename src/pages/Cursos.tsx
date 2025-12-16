import { useState } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  GraduationCap, Clock, Award, Users, ArrowRight, Star, Search, 
  Filter, Monitor, Building, Zap, Shield, HardHat, Flame, Heart
} from 'lucide-react';

const categories = [
  { id: 'all', name: 'Todos', icon: GraduationCap },
  { id: 'nr', name: 'Normas Regulamentadoras', icon: Shield },
  { id: 'safety', name: 'Segurança', icon: HardHat },
  { id: 'emergency', name: 'Emergência', icon: Flame },
  { id: 'health', name: 'Saúde', icon: Heart },
];

const allCourses = [
  {
    id: 1,
    title: 'NR-35 - Trabalho em Altura',
    category: 'nr',
    hours: '8 horas',
    mode: 'EAD',
    price: 149.90,
    originalPrice: 199.90,
    highlight: true,
    rating: 4.9,
    students: 2340,
    description: 'Capacitação completa sobre trabalho em altura conforme NR-35 atualizada para 2026.',
    topics: ['Análise de risco', 'EPIs obrigatórios', 'Sistemas de ancoragem', 'Primeiros socorros', 'Resgate'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=250&fit=crop',
  },
  {
    id: 2,
    title: 'NR-10 - Segurança em Eletricidade',
    category: 'nr',
    hours: '40 horas',
    mode: 'EAD',
    price: 299.90,
    originalPrice: 399.90,
    highlight: false,
    rating: 4.8,
    students: 1890,
    description: 'Formação completa em segurança para serviços com eletricidade.',
    topics: ['Riscos elétricos', 'Medidas de controle', 'Equipamentos de proteção', 'Procedimentos de trabalho', 'SEP'],
    image: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400&h=250&fit=crop',
  },
  {
    id: 3,
    title: 'CIPA - Comissão Interna',
    category: 'nr',
    hours: '20 horas',
    mode: 'EAD',
    price: 199.90,
    originalPrice: 249.90,
    highlight: false,
    rating: 4.7,
    students: 3200,
    description: 'Treinamento completo para membros da CIPA conforme NR-5.',
    topics: ['Atribuições da CIPA', 'Investigação de acidentes', 'Mapa de riscos', 'Reuniões ordinárias'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
  },
  {
    id: 4,
    title: 'Primeiros Socorros',
    category: 'emergency',
    hours: '8 horas',
    mode: 'EAD',
    price: 129.90,
    originalPrice: 169.90,
    highlight: false,
    rating: 4.9,
    students: 4500,
    description: 'Técnicas essenciais de primeiros socorros no ambiente de trabalho.',
    topics: ['RCP', 'Hemorragias', 'Fraturas', 'Queimaduras', 'Desmaios'],
    image: 'https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?w=400&h=250&fit=crop',
  },
  {
    id: 5,
    title: 'NR-33 - Espaço Confinado',
    category: 'nr',
    hours: '16 horas',
    mode: 'EAD',
    price: 249.90,
    originalPrice: 329.90,
    highlight: true,
    rating: 4.8,
    students: 1560,
    description: 'Capacitação para trabalhos em espaços confinados.',
    topics: ['Identificação', 'Avaliação atmosférica', 'Ventilação', 'Resgate', 'Permissão de entrada'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=250&fit=crop',
  },
  {
    id: 6,
    title: 'Brigada de Incêndio',
    category: 'emergency',
    hours: '12 horas',
    mode: 'EAD + Prático',
    price: 279.90,
    originalPrice: 349.90,
    highlight: false,
    rating: 4.9,
    students: 2100,
    description: 'Formação completa para brigadistas de incêndio.',
    topics: ['Prevenção', 'Combate a incêndio', 'Evacuação', 'Uso de extintores', 'Hidrantes'],
    image: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&h=250&fit=crop',
  },
  {
    id: 7,
    title: 'NR-12 - Máquinas e Equipamentos',
    category: 'nr',
    hours: '8 horas',
    mode: 'EAD',
    price: 159.90,
    originalPrice: 199.90,
    highlight: false,
    rating: 4.7,
    students: 980,
    description: 'Segurança no trabalho em máquinas e equipamentos.',
    topics: ['Proteções fixas', 'Proteções móveis', 'Dispositivos de segurança', 'Manutenção'],
    image: 'https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?w=400&h=250&fit=crop',
  },
  {
    id: 8,
    title: 'Direção Defensiva',
    category: 'safety',
    hours: '8 horas',
    mode: 'EAD',
    price: 119.90,
    originalPrice: 149.90,
    highlight: false,
    rating: 4.6,
    students: 3800,
    description: 'Técnicas de direção defensiva e segurança no trânsito.',
    topics: ['Condições adversas', 'Técnicas preventivas', 'Legislação', 'Meio ambiente'],
    image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=250&fit=crop',
  },
  {
    id: 9,
    title: 'Ergonomia - NR-17',
    category: 'health',
    hours: '4 horas',
    mode: 'EAD',
    price: 89.90,
    originalPrice: 119.90,
    highlight: false,
    rating: 4.5,
    students: 2200,
    description: 'Princípios de ergonomia no ambiente de trabalho.',
    topics: ['Postura', 'Mobiliário', 'Condições ambientais', 'Organização do trabalho'],
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=250&fit=crop',
  },
  {
    id: 10,
    title: 'Operador de Empilhadeira',
    category: 'safety',
    hours: '16 horas',
    mode: 'EAD + Prático',
    price: 349.90,
    originalPrice: 449.90,
    highlight: true,
    rating: 4.8,
    students: 1450,
    description: 'Formação completa para operação segura de empilhadeiras.',
    topics: ['Tipos de empilhadeiras', 'Operação segura', 'Manutenção preventiva', 'Sinalização'],
    image: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=250&fit=crop',
  },
  {
    id: 11,
    title: 'PPRA e PCMSO',
    category: 'health',
    hours: '8 horas',
    mode: 'EAD',
    price: 179.90,
    originalPrice: 229.90,
    highlight: false,
    rating: 4.7,
    students: 1680,
    description: 'Elaboração e gestão de programas de prevenção.',
    topics: ['Antecipação de riscos', 'Reconhecimento', 'Avaliação', 'Controle'],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=250&fit=crop',
  },
  {
    id: 12,
    title: 'PGR - Gerenciamento de Riscos',
    category: 'nr',
    hours: '20 horas',
    mode: 'EAD',
    price: 399.90,
    originalPrice: 499.90,
    highlight: true,
    rating: 4.9,
    students: 890,
    description: 'Curso completo sobre o novo Programa de Gerenciamento de Riscos.',
    topics: ['Inventário de riscos', 'Plano de ação', 'Análise de acidentes', 'Documentação', 'Riscos psicossociais'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop',
  },
];

const Cursos = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('popular');

  const filteredCourses = allCourses
    .filter((course) => {
      const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           course.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return b.students - a.students; // popular
    });

  return (
    <>
      <Header />
      <main className="pt-32 pb-20">
        {/* Hero */}
        <section className="bg-gradient-subtle py-16">
          <div className="container mx-auto px-4 text-center">
            <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              <GraduationCap size={16} />
              Catálogo de Cursos
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6">
              Capacitação em <span className="text-gradient">SST</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
              Mais de 12 cursos certificados para você e sua equipe. Conteúdo atualizado 
              conforme as últimas alterações das Normas Regulamentadoras.
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { icon: Monitor, label: '100% Online', value: '12+ Cursos' },
                { icon: Users, label: 'Alunos Capacitados', value: '25.000+' },
                { icon: Award, label: 'Certificado', value: 'Válido em todo Brasil' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <stat.icon className="text-primary" size={24} />
                  </div>
                  <div className="text-left">
                    <div className="font-heading font-bold text-foreground">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 border-b border-border sticky top-20 bg-background z-40">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative w-full lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
                <Input
                  type="text"
                  placeholder="Buscar cursos..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div className="flex gap-2 overflow-x-auto pb-2 w-full lg:w-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    }`}
                  >
                    <cat.icon size={16} />
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 rounded-lg border border-border bg-background text-foreground text-sm"
              >
                <option value="popular">Mais Populares</option>
                <option value="rating">Melhor Avaliados</option>
                <option value="price-low">Menor Preço</option>
                <option value="price-high">Maior Preço</option>
              </select>
            </div>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="mb-6 text-muted-foreground">
              {filteredCourses.length} curso(s) encontrado(s)
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className={`bg-card rounded-2xl overflow-hidden border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group ${
                    course.highlight ? 'border-primary shadow-md' : 'border-border'
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {course.highlight && (
                      <div className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star size={12} className="fill-current" />
                        Destaque
                      </div>
                    )}
                    <div className="absolute top-3 right-3 bg-background/90 backdrop-blur text-foreground text-xs font-medium px-2 py-1 rounded">
                      {course.mode}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center gap-1">
                        <Star size={14} className="fill-primary text-primary" />
                        <span className="text-sm font-medium">{course.rating}</span>
                      </div>
                      <span className="text-muted-foreground text-xs">({course.students} alunos)</span>
                    </div>

                    <h3 className="font-heading text-lg font-bold text-foreground mb-2 line-clamp-2">
                      {course.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{course.description}</p>

                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                      <Clock size={14} />
                      {course.hours}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <span className="text-muted-foreground text-xs line-through">
                          R$ {course.originalPrice.toFixed(2).replace('.', ',')}
                        </span>
                        <div className="font-heading text-xl font-bold text-primary">
                          R$ {course.price.toFixed(2).replace('.', ',')}
                        </div>
                      </div>
                      <Button variant={course.highlight ? 'hero' : 'default'} size="sm" asChild>
                        <a 
                          href={`https://wa.me/5511951214359?text=Olá! Tenho interesse no curso: ${course.title}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          Inscrever
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredCourses.length === 0 && (
              <div className="text-center py-16">
                <GraduationCap className="mx-auto text-muted-foreground mb-4" size={48} />
                <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                  Nenhum curso encontrado
                </h3>
                <p className="text-muted-foreground">Tente ajustar os filtros ou buscar outro termo.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Precisa de um treinamento personalizado?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Oferecemos treinamentos in-company adaptados às necessidades específicas da sua empresa.
            </p>
            <Button variant="hero" size="xl" asChild>
              <a href="https://wa.me/5511951214359?text=Olá! Gostaria de um orçamento para treinamento in-company." target="_blank" rel="noopener noreferrer">
                Solicitar Orçamento
                <ArrowRight size={20} />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Cursos;
