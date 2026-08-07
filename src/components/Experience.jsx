import React from 'react';
import { experienceData } from '../data/portfolioData';
import { Briefcase, Calendar, CheckCircle2, Building2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Briefcase size={14} />
            <span>Trayectoria Profesional</span>
          </div>
          <h2 className="section-title">
            Experiencia <span className="gradient-text">Laboral</span>
          </h2>
          <p className="section-subtitle">
            Hitos clave e impacto generado en empresas e iniciativas tecnológicas.
          </p>
        </div>

        {/* Timeline Container */}
        <div style={{
          position: 'relative',
          maxWidth: '900px',
          margin: '0 auto',
          paddingLeft: '2rem'
        }} className="timeline-container">
          
          {/* Vertical Glowing Line */}
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '2px',
            background: 'linear-gradient(to bottom, var(--primary-cyan), var(--primary-purple), rgba(255,255,255,0.05))',
            boxShadow: '0 0 12px rgba(0, 242, 254, 0.4)'
          }}></div>

          {experienceData.map((exp, idx) => (
            <div
              key={idx}
              className="timeline-item"
              style={{
                position: 'relative',
                marginBottom: '3rem',
              }}
            >
              {/* Glowing Timeline Dot */}
              <div className="timeline-dot" style={{
                position: 'absolute',
                left: '-2.4rem',
                top: '0.2rem',
                width: '16px',
                height: '16px',
                borderRadius: '50%',
                background: 'var(--primary-cyan)',
                border: '4px solid #080b11',
                boxShadow: '0 0 12px var(--primary-cyan)'
              }}></div>

              {/* Experience Card */}
              <div className="glass-card exp-card" style={{ padding: '2rem' }}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1rem'
                }}>
                  <div>
                    <h3 className="exp-role" style={{ fontSize: '1.4rem', fontWeight: 800, color: '#fff', marginBottom: '0.3rem' }}>
                      {exp.role}
                    </h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary-cyan)', fontWeight: 600, fontSize: '0.95rem', flexWrap: 'wrap' }}>
                      <Building2 size={16} />
                      <span>{exp.company}</span>
                      <span style={{ color: 'var(--text-dim)' }}>•</span>
                      <span className="tag-pill" style={{ fontSize: '0.7rem' }}>{exp.type}</span>
                    </div>
                  </div>

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    fontSize: '0.85rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-muted)',
                    background: 'rgba(255, 255, 255, 0.05)',
                    padding: '0.4rem 0.8rem',
                    borderRadius: '8px',
                    border: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <Calendar size={14} color="var(--primary-cyan)" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.98rem', marginBottom: '1.2rem', lineHeight: 1.7 }}>
                  {exp.description}
                </p>

                {/* Key Achievements */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.8rem', letterSpacing: '0.05em' }}>
                    Logros Clave:
                  </div>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {exp.achievements.map((ach, aIdx) => (
                      <li key={aIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', fontSize: '0.92rem', color: 'var(--text-main)' }}>
                        <CheckCircle2 size={16} color="var(--primary-cyan)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 480px) {
          .timeline-container {
            padding-left: 1.25rem !important;
          }
          .timeline-dot {
            left: -1.65rem !important;
            width: 14px !important;
            height: 14px !important;
          }
          .exp-card {
            padding: 1.25rem !important;
          }
          .exp-role {
            font-size: 1.15rem !important;
          }
          .timeline-item {
            margin-bottom: 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
