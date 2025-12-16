import { Facebook, Instagram, Linkedin } from 'lucide-react';
import logo from '@/assets/logo-engsegtra.png';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo and about */}
          <div className="space-y-4">
            <img src={logo} alt="ENGSEGTRA" className="h-12 brightness-0 invert" />
            <p className="text-background/70 text-sm">
              Há mais de 30 anos promovendo a segurança e saúde dos trabalhadores brasileiros.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/Engsegtra.face/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/engsegtra/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/engsegtra"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              {[
                { name: 'Quem Somos', href: '#about' },
                { name: 'Serviços', href: '#about' },
                { name: 'Cursos', href: '#courses' },
                { name: 'Notícias', href: '#news' },
                { name: 'Contato', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-background/70 hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Serviços</h4>
            <ul className="space-y-3">
              {[
                'PGR / PCMSO',
                'LTCAT',
                'Treinamentos NRs',
                'Perícias Técnicas',
                'Consultoria SST',
              ].map((service) => (
                <li key={service}>
                  <span className="text-background/70 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li>
                <a href="tel:1143017005" className="hover:text-primary transition-colors">
                  (11) 4301-7005
                </a>
              </li>
              <li>
                <a href="tel:1195121-4359" className="hover:text-primary transition-colors">
                  (11) 95121-4359 (WhatsApp)
                </a>
              </li>
              <li>
                <a href="mailto:contato@engsegtra.com.br" className="hover:text-primary transition-colors">
                  contato@engsegtra.com.br
                </a>
              </li>
              <li>São Paulo - SP</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-background/60 text-sm">
            © {currentYear} ENGSEGTRA. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-background/60">
            <a href="#" className="hover:text-primary transition-colors">Política de Privacidade</a>
            <a href="#" className="hover:text-primary transition-colors">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
