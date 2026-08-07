import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { ArrowUp, Heart, Code2 } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'rgba(5, 8, 14, 0.95)',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '3rem 0 2rem 0',
      position: 'relative'
    }}>
      <div className="container">
        <div className="footer-top-row" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
          paddingBottom: '2rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
        }}>
          {/* Brand Signature */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{
              background: 'linear-gradient(135deg, var(--primary-cyan), var(--primary-purple))',
              padding: '0.4rem 0.6rem',
              borderRadius: '8px',
              color: '#080b11',
              fontWeight: 900,
              fontFamily: 'var(--font-mono)'
            }}>
              &lt;EM /&gt;
            </span>
            <div>
              <div style={{ fontWeight: 800, color: '#fff', fontSize: '1.1rem' }}>{personalInfo.name}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>{personalInfo.title}</div>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-links" style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.9rem' }}>
            <a href="#about" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Sobre Mí</a>
            <a href="#skills" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Habilidades</a>
            <a href="#experience" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Experiencia</a>
            <a href="#projects" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Proyectos</a>
            <a href="#contact" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Contacto</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Volver arriba"
            style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(0, 242, 254, 0.1)',
              border: '1px solid rgba(0, 242, 254, 0.3)',
              color: 'var(--primary-cyan)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'var(--primary-cyan)';
              e.currentTarget.style.color = '#080b11';
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(0, 242, 254, 0.1)';
              e.currentTarget.style.color = 'var(--primary-cyan)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <ArrowUp size={20} />
          </button>
        </div>

        {/* Bottom copyright */}
        <div className="footer-bottom-row" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
          paddingTop: '1.5rem',
          fontSize: '0.85rem',
          color: 'var(--text-dim)'
        }}>
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. Todos los derechos reservados.
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .footer-top-row {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 1.2rem !important;
          }
          .footer-links {
            justify-content: center !important;
            gap: 1rem !important;
          }
          .footer-bottom-row {
            justify-content: center !important;
            text-align: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
