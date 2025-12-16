import { useState } from 'react';
import { Newspaper, Download, Calendar, ArrowRight, BookOpen, FileText, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const news = [
  {
    date: '10 Dez 2024',
    category: 'Legislação',
    title: 'NR-1 e os Riscos Psicossociais: O que muda para as empresas em 2026',
    excerpt: 'A inclusão obrigatória de riscos psicossociais no PGR representa uma mudança significativa na gestão de SST.',
    featured: true,
  },
  {
    date: '05 Dez 2024',
    category: 'Treinamentos',
    title: 'A importância da reciclagem em NR-35 para 2026',
    excerpt: 'Com as novas exigências, a atualização dos treinamentos se torna ainda mais crucial.',
    featured: false,
  },
  {
    date: '28 Nov 2024',
    category: 'SST',
    title: 'Inteligência Artificial na prevenção de acidentes de trabalho',
    excerpt: 'Como a tecnologia está revolucionando a forma de identificar e prevenir riscos ocupacionais.',
    featured: false,
  },
  {
    date: '20 Nov 2024',
    category: 'Legislação',
    title: 'PCMSO 2026: Novas exigências para exames ocupacionais',
    excerpt: 'Entenda as mudanças na NR-7 e como preparar sua empresa para os novos requisitos.',
    featured: false,
  },
];

const ebooks = [
  {
    title: 'Guia Completo NRs 2026',
    description: 'Todas as atualizações das Normas Regulamentadoras em um único material.',
    pages: '45 páginas',
    icon: BookOpen,
  },
  {
    title: 'Checklist PGR',
    description: 'Lista de verificação para implementação do Programa de Gerenciamento de Riscos.',
    pages: '12 páginas',
    icon: FileText,
  },
];

export const NewsSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEbook, setSelectedEbook] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const { toast } = useToast();

  const handleDownload = (ebookTitle: string) => {
    setSelectedEbook(ebookTitle);
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && name) {
      toast({
        title: 'E-book enviado!',
        description: `O ${selectedEbook} foi enviado para ${email}`,
      });
      setIsModalOpen(false);
      setEmail('');
      setName('');
    }
  };

  return (
    <section id="news" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm uppercase tracking-wider mb-4">
            <Newspaper size={16} />
            Fique Atualizado
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Notícias e <span className="text-gradient">Materiais</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Acompanhe as últimas novidades em Segurança e Saúde do Trabalho e 
            baixe nossos e-books gratuitos para se manter informado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* News column */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
              <Newspaper size={20} className="text-primary" />
              Últimas Notícias
            </h3>
            
            {news.map((article, index) => (
              <article
                key={article.title}
                className={`bg-card rounded-2xl border border-border p-6 hover:shadow-lg transition-all duration-300 ${
                  article.featured ? 'border-l-4 border-l-primary' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    <Calendar size={12} />
                    {article.date}
                  </span>
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2 py-1 rounded">
                    {article.category}
                  </span>
                  {article.featured && (
                    <span className="bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded">
                      Destaque
                    </span>
                  )}
                </div>
                <h4 className="font-heading text-lg font-bold text-foreground mb-2 hover:text-primary transition-colors cursor-pointer">
                  {article.title}
                </h4>
                <p className="text-muted-foreground text-sm">{article.excerpt}</p>
              </article>
            ))}

            <Button variant="heroOutline" className="w-full" asChild>
              <a href="#news">
                Ver Todas as Notícias
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>

          {/* E-books column */}
          <div className="space-y-6">
            <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
              <Download size={20} className="text-primary" />
              E-books Gratuitos
            </h3>

            {ebooks.map((ebook) => (
              <div
                key={ebook.title}
                className="bg-gradient-dark text-background rounded-2xl p-6 space-y-4"
              >
                <div className="w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center">
                  <ebook.icon size={28} className="text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-lg font-bold mb-2">{ebook.title}</h4>
                  <p className="text-background/70 text-sm mb-2">{ebook.description}</p>
                  <span className="text-xs text-background/50">{ebook.pages}</span>
                </div>
                <Button
                  variant="hero"
                  className="w-full"
                  onClick={() => handleDownload(ebook.title)}
                >
                  <Download size={16} />
                  Baixar Grátis
                </Button>
              </div>
            ))}

            <div className="bg-primary/5 rounded-2xl p-6 border border-primary/20">
              <h4 className="font-heading font-bold text-foreground mb-2">Newsletter SST</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Receba atualizações sobre legislação e dicas de SST no seu e-mail.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); toast({ title: 'Inscrito!', description: 'Você foi inscrito na newsletter.' }); }}>
                <Input
                  type="email"
                  placeholder="Seu melhor e-mail"
                  className="mb-3"
                  required
                />
                <Button variant="hero" type="submit" className="w-full">
                  Inscrever-se
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* E-book download modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Baixar {selectedEbook}</DialogTitle>
            <DialogDescription>
              Preencha seus dados para receber o e-book gratuitamente no seu e-mail.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4 mt-4">
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">Nome</label>
              <Input
                type="text"
                placeholder="Seu nome completo"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label className="text-sm font-medium text-foreground mb-2 block">E-mail</label>
              <Input
                type="email"
                placeholder="seu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <Button variant="hero" type="submit" className="w-full">
              <Download size={16} />
              Enviar E-book
            </Button>
            <p className="text-xs text-muted-foreground text-center">
              Seus dados estão seguros. Não compartilhamos informações com terceiros.
            </p>
          </form>
        </DialogContent>
      </Dialog>
    </section>
  );
};
