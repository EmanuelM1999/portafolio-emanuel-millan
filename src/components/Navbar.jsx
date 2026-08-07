import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Menu, X, Code2, Briefcase, User, Wrench, FolderGit2, Send } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      const sections = ['hero', 'about', 'skills', 'experience', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Inicio', href: '#hero', icon: Code2, id: 'hero' },
    { name: 'Sobre Mí', href: '#about', icon: User, id: 'about' },
    { name: 'Habilidades', href: '#skills', icon: Wrench, id: 'skills' },
    { name: 'Experiencia', href: '#experience', icon: Briefcase, id: 'experience' },
    { name: 'Proyectos', href: '#projects', icon: FolderGit2, id: 'projects' },
    { name: 'Contacto', href: '#contact', icon: Send, id: 'contact' },
  ];

  return (
    <header
      className="navbar-header"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(8, 11, 17, 0.95)' : 'rgba(8, 11, 17, 0.6)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid transparent',
        padding: scrolled ? '0.8rem 0' : '1.2rem 0',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Brand Logo */}
        <a
          href="#hero"
          className="brand-logo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            textDecoration: 'none',
            color: '#fff',
            fontWeight: 800,
            fontSize: '1.25rem',
            letterSpacing: '-0.02em'
          }}
        >
          <span style={{
            fontFamily: 'var(--font-mono)',
            color: 'var(--primary-cyan)',
            fontWeight: 900
          }}>
            &lt;EM /&gt;
          </span>
          <span style={{ color: '#fff', fontWeight: 800 }}>Emanuel</span>
          <span className="gradient-text" style={{ fontWeight: 800 }}>Millán</span>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.45rem',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? 'var(--primary-cyan)' : 'var(--text-muted)',
                  transition: 'all 0.2s ease',
                  padding: '0.5rem 0.8rem',
                  borderRadius: '8px',
                  background: isActive ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
                }}
              >
                <Icon size={17} />
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-main)',
            cursor: 'pointer',
            display: 'none',
            padding: '0.5rem',
          }}
          className="mobile-toggle"
          aria-label="Menu"
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: 'rgba(8, 11, 17, 0.98)',
            backdropFilter: 'blur(24px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '1.5rem 1.2rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            maxHeight: 'calc(100vh - 65px)',
            overflowY: 'auto'
          }}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  textDecoration: 'none',
                  color: isActive ? 'var(--primary-cyan)' : 'var(--text-main)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  padding: '0.8rem 1rem',
                  borderRadius: '10px',
                  background: isActive ? 'rgba(0, 242, 254, 0.08)' : 'transparent',
                }}
              >
                <Icon size={20} color={isActive ? 'var(--primary-cyan)' : 'var(--text-muted)'} />
                {link.name}
              </a>
            );
          })}
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
        @media (max-width: 480px) {
          .navbar-header {
            padding: 0.8rem 0 !important;
          }
          .brand-logo {
            font-size: 1.05rem !important;
          }
        }
      `}</style>
    </header>
  );
}
