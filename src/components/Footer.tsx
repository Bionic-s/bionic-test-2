import { Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import { contactEmails, contactPhone } from '../data/contactData';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const capabilities = [
    { name: 'Enterprise AI & Automation', href: '/capabilities/ai' },
    { name: 'Data, Analytics & Intelligence', href: '/capabilities/data' },
    { name: 'Business Applications & CX', href: '/capabilities/apps' },
    { name: 'Integration & Intelligent Operations', href: '/capabilities/integration' },
    { name: 'Cybersecurity & Cyber Resilience', href: '/capabilities/cyber' },
    { name: 'Sovereign Infrastructure & Hybrid Cloud', href: '/capabilities/infra' },
    { name: 'Technology Operations', href: '/capabilities/ops' },
  ];

  const company = [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Enterprise Value System', href: '/value' },
    { name: 'Architecture', href: '/architecture' },
  ];

  const industries = [
    { name: 'Government', href: '/industries/government' },
    { name: 'Banking', href: '/industries/banking' },
    { name: 'Oil & Gas', href: '/industries/oil-gas' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Enterprise', href: '/industries/enterprise' },
  ];

  return (
    <footer className="bg-bg-secondary border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex space-x-4 mb-6">
              <a
                href="https://www.linkedin.com/company/bionic-solutions-ksa/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bg-primary rounded-full flex items-center justify-center hover:bg-accent-primary hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Linkedin className="w-5 h-5 text-text-muted group-hover:text-text-primary" />
              </a>
              <a
                href="https://twitter.com/bionics_Sa"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-bg-primary rounded-full flex items-center justify-center hover:bg-accent-primary hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <Twitter className="w-5 h-5 text-text-muted group-hover:text-text-primary" />
              </a>
            </div>
            
            <Link to="/" className="inline-block mb-4 hover:opacity-80 transition-opacity footer-logo-link">
              <img 
                src="/bionic-full-dark.svg" 
                alt="Bionic Solutions" 
                className="h-10 w-auto footer-logo"
                style={{ filter: 'brightness(0) saturate(100%) invert(79%) sepia(13%) saturate(2174%) hue-rotate(164deg) brightness(99%) contrast(93%)' }}
              />
            </Link>
            
            <p className="text-body text-text-muted mb-1">
              Enterprise AI Transformation Integrator
            </p>
            <p className="text-tiny text-text-muted">
              We design Intelligence, Automation &amp; Trust into business.
            </p>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-1">
            <h3 className="text-h4 font-semibold mb-4">Capabilities</h3>
            <ul className="space-y-3">
              {capabilities.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-body text-text-muted hover:text-accent-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h3 className="text-h4 font-semibold mb-4">Industries</h3>
            <ul className="space-y-3">
              {industries.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-body text-text-muted hover:text-accent-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-h4 font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {company.map((item, index) => (
                <li key={index}>
                  <Link
                    to={item.href}
                    className="text-body text-text-muted hover:text-accent-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-h4 font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3 mb-4">
              <a
                href={`mailto:${contactEmails.general}`}
                className="block text-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                {contactEmails.general}
              </a>
              <a
                href={`mailto:${contactEmails.sales}`}
                className="block text-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                {contactEmails.sales}
              </a>
              <a
                href={`mailto:${contactEmails.support}`}
                className="block text-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                {contactEmails.support}
              </a>
              <a
                href={contactPhone.href}
                className="block text-sm text-text-muted hover:text-accent-primary transition-colors"
              >
                {contactPhone.number}
              </a>
            </div>
            <Link
              to="/contact?source=footer&intent=executive-briefing"
              className="inline-block px-6 py-3 bg-accent-primary text-text-primary font-semibold rounded-full hover:bg-accent-secondary hover:-translate-y-0.5 transition-all duration-300 text-sm"
            >
              Request Executive Briefing
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-small text-text-muted">
              &copy; {currentYear} Bionic Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-small text-text-muted hover:text-accent-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-of-use" className="text-small text-text-muted hover:text-accent-primary transition-colors">
                Terms of Use
              </Link>
              <Link to="/cookie-policy" className="text-small text-text-muted hover:text-accent-primary transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
