import React from 'react';
import { personalInfo, educationData } from '../data/portfolioData';
import { User, GraduationCap, Sparkles, Layers, Zap, ShieldCheck, MapPin, Building } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: Zap,
      title: "Desarrollo Full Stack",
      description: "Dominio de arquitecturas desacopladas con Laravel en backend y React/Vue.js en frontend."
    },
    {
      icon: Layers,
      title: "Bases de Datos Relacionales",
      description: "Diseño, modelado y optimización avanzada de consultas en MySQL y PostgreSQL."
    },
    {
      icon: ShieldCheck,
      title: "Metodologías Ágiles & Git",
      description: "Trabajo en equipo con Scrum, control de versiones limpio y entrega continua."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <User size={14} />
            <span>Perfil Profesional</span>
          </div>
          <h2 className="section-title">
            Sobre <span className="gradient-text">Mí</span>
          </h2>
          <p className="section-subtitle">
            Combino rigor en la ingeniería de software con pasión por crear aplicaciones web robustas y escalables.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center'
        }} className="about-grid">

          {/* Left: Bio card & Education */}
          <div className="glass-card about-bio-card" style={{ padding: '2.5rem', position: 'relative' }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '1.2rem', color: '#fff' }}>
              Creando software de alto impacto con PHP, Laravel, Vue.js y React.
            </h3>

            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: 1.8 }}>
              {personalInfo.bio}
            </p>

            {/* Education highlight */}
            <div style={{
              background: 'rgba(0, 242, 254, 0.05)',
              border: '1px solid rgba(0, 242, 254, 0.2)',
              borderRadius: '12px',
              padding: '1.2rem',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '1rem'
            }} className="edu-card">
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'rgba(0, 242, 254, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--primary-cyan)',
                flexShrink: 0
              }}>
                <GraduationCap size={22} />
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--primary-cyan)', fontWeight: 700, textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>
                  Educación Superior
                </div>
                <div style={{ fontWeight: 800, color: '#fff', fontSize: '1rem' }}>
                  {educationData[0].title}
                </div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  {educationData[0].institution} • ({educationData[0].period})
                </div>
              </div>
            </div>

            <div className="about-footer-info" style={{
              paddingTop: '1.2rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              display: 'flex',
              alignItems: 'center',
              gap: '1.5rem',
              flexWrap: 'wrap'
            }}>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Ubicación</div>
                <div style={{ fontWeight: 600, color: 'var(--text-main)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                  <MapPin size={14} color="var(--primary-cyan)" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
              <div className="v-divider" style={{ width: '1px', height: '30px', background: 'rgba(255, 255, 255, 0.1)' }}></div>
              <div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textTransform: 'uppercase', fontFamily: 'var(--font-mono)' }}>Especialidad Core</div>
                <div style={{ fontWeight: 600, color: 'var(--primary-cyan)' }}>PHP Laravel / Vue / React</div>
              </div>
            </div>
          </div>

          {/* Right: 4 core values/highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }} className="highlights-grid">
            {highlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="glass-card highlight-card" style={{ padding: '1.8rem' }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-cyan)',
                    marginBottom: '1.2rem'
                  }}>
                    <Icon size={24} />
                  </div>
                  <h4 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem', color: '#fff' }}>
                    {item.title}
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .highlights-grid { grid-template-columns: 1fr !important; gap: 1.2rem !important; }
        }
        @media (max-width: 480px) {
          .about-bio-card {
            padding: 1.25rem !important;
          }
          .highlight-card {
            padding: 1.25rem !important;
          }
          .edu-card {
            padding: 1rem !important;
          }
          .about-footer-info {
            gap: 1rem !important;
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .v-divider {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
