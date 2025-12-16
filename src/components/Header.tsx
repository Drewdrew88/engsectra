import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo-engsegtra.png';

const navLinks = [
  { name: 'Início', href: '#home' },
  { name: 'Quem Somos', href: '#about' },
  { name: 'NR 2026', href: '#legislation' },
  { name: 'Cursos', href: '#courses' },
  { name: 'Notícias', href: '#news' },
  { name: 'Contato', href: '#contact' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Top bar */}
      <div className="hidden md:block bg-foreground/95 text-background py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-6">
            <a href="tel:1143017005" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone size={14} />
              (11) 4301-7005
            </a>
            <a href="mailto:contato@engsegtra.com.br" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Mail size={14} />
              contato@engsegtra.com.br
            </a>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-background/70">Seg - Sex: 8h às 18h</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="flex items-center">
            <img src={logo} alt="ENGSEGTRA - Engenharia de Segurança do Trabalho" className="h-12 md:h-14" />
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <Button variant="hero" size="lg" asChild>
              <a href="https://wa.me/5511951214359" target="_blank" rel="noopener noreferrer">
                Fale Conosco
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-fade-up">
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary font-medium py-2 border-b border-border"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button variant="hero" size="lg" className="mt-2" asChild>
                <a href="https://wa.me/5511951214359" target="_blank" rel="noopener noreferrer">
                  Fale Conosco
                </a>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
