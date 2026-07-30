import React, { useState, useEffect } from 'react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';
import { ArrowRight, Download, Mail, Sparkles, Terminal } from 'lucide-react';

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = personalInfo.roles;
    const targetRole = roles[roleIndex];
    let timer;

    if (!isDeleting && currentText === targetRole) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      const speed = isDeleting ? 40 : 80;
      timer = setTimeout(() => {
        setCurrentText(
          isDeleting
            ? targetRole.substring(0, currentText.length - 1)
            : targetRole.substring(0, currentText.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="hero" className="section" style={{ paddingTop: '9rem', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="hero-grid">
          
          {/* Left Column: Text & CTAs */}
          <div>
            <div className="section-badge animate-float">
              <Sparkles size={14} />
              <span>Bienvenido a mi portafolio</span>
            </div>

            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1rem' }}>
              Hola, soy <br />
              <span className="gradient-text">{personalInfo.name}</span>
            </h1>

            {/* Typewriter role */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: 'clamp(1.2rem, 2.5vw, 1.8rem)',
              fontWeight: 700,
              color: 'var(--text-muted)',
              marginBottom: '1.5rem',
              minHeight: '2.5rem',
              fontFamily: 'var(--font-mono)'
            }}>
              <span style={{ color: 'var(--primary-cyan)' }}>&gt;</span>
              <span>{currentText}</span>
              <span style={{
                display: 'inline-block',
                width: '3px',
                height: '1.4em',
                backgroundColor: 'var(--primary-cyan)',
                animation: 'blink 1s infinite'
              }}></span>
            </div>

            <p style={{
              fontSize: '1.1rem',
              color: 'var(--text-muted)',
              marginBottom: '2.2rem',
              maxWidth: '580px',
              lineHeight: 1.7
            }}>
              {personalInfo.subtitle}
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <a href="#projects" className="btn btn-primary">
                <span>Ver Mis Proyectos</span>
                <ArrowRight size={18} />
              </a>

              <a href="#contact" className="btn btn-secondary">
                <Mail size={18} />
                <span>Contactar</span>
              </a>

              <a
                href={personalInfo.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary"
                style={{ padding: '0.85rem 1.2rem' }}
                title="Descargar Curriculum Vitae"
              >
                <Download size={18} />
                <span>CV</span>
              </a>
            </div>

            {/* Social Links */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <span style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', fontFamily: 'var(--font-mono)' }}>
                Conecta conmigo:
              </span>
              <div style={{ display: 'flex', gap: '0.8rem' }}>
                {[
                  { icon: GithubIcon, href: personalInfo.github, label: 'GitHub' },
                  { icon: LinkedinIcon, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: Mail, href: `mailto:${personalInfo.email}`, label: 'Email' }
                ].map((social, idx) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={idx}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      style={{
                        width: '42px',
                        height: '42px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--text-muted)',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--primary-cyan)';
                        e.currentTarget.style.color = 'var(--primary-cyan)';
                        e.currentTarget.style.transform = 'translateY(-3px)';
                        e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 242, 254, 0.2)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = 'var(--text-muted)';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Column: Visual Interactive Code Card */}
          <div className="hero-visual" style={{ position: 'relative' }}>
            <div className="glass-card" style={{
              padding: '1.5rem',
              position: 'relative',
              overflow: 'hidden',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}>
              {/* Window controls */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.2rem', paddingBottom: '0.8rem', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div style={{ display: 'flex', gap: '0.4rem' }}>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e' }}></span>
                  <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f' }}></span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  <Terminal size={14} color="var(--primary-cyan)" />
                  <span>Developer.config.js</span>
                </div>
              </div>

              {/* Code snippet */}
              <pre style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                lineHeight: 1.7,
                color: '#e2e8f0',
                overflowX: 'auto'
              }}>
                <code>
                  <span style={{ color: '#f472b6' }}>const</span> <span style={{ color: '#38bdf8' }}>developer</span> = &#123;<br />
                  &nbsp;&nbsp;<span style={{ color: '#a78bfa' }}>name</span>: <span style={{ color: '#a3e635' }}>'{personalInfo.name}'</span>,<br />
                  &nbsp;&nbsp;<span style={{ color: '#a78bfa' }}>stack</span>: [<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#a3e635' }}>'React'</span>, <span style={{ color: '#a3e635' }}>'Node.js'</span>, <span style={{ color: '#a3e635' }}>'TypeScript'</span>,<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#a3e635' }}>'PostgreSQL'</span>, <span style={{ color: '#a3e635' }}>'Docker'</span><br />
                  &nbsp;&nbsp;],<br />
                  &nbsp;&nbsp;<span style={{ color: '#a78bfa' }}>passion</span>: <span style={{ color: '#a3e635' }}>'Building high-impact software'</span>,<br />
                  &nbsp;&nbsp;<span style={{ color: '#a78bfa' }}>status</span>: <span style={{ color: '#38bdf8' }}>'Ready to code & innovate'</span>,<br />
                  &nbsp;&nbsp;<span style={{ color: '#f472b6' }}>buildApp</span>: <span style={{ color: '#f472b6' }}>function</span>() &#123;<br />
                  &nbsp;&nbsp;&nbsp;&nbsp;<span style={{ color: '#f472b6' }}>return</span> <span style={{ color: '#a3e635' }}>'Scalable & Beautiful Web Apps'</span>;<br />
                  &nbsp;&nbsp;&#125;<br />
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Stats Grid at Bottom of Hero */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1.5rem',
          marginTop: '5rem'
        }}>
          {personalInfo.stats.map((stat, idx) => (
            <div key={idx} className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2.4rem', fontWeight: 900, fontFamily: 'var(--font-mono)', marginBottom: '0.3rem' }} className="gradient-text">
                {stat.value}
              </div>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
