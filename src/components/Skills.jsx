import React, { useState } from 'react';
import { skillsData } from '../data/portfolioData';
import { Wrench, Code2, Server, Database, Box, FileCode2, Globe, Braces, Palette, Layers, Terminal, Network, Cpu, ShieldCheck, DatabaseBackup, Zap, Table, GitBranch, Cloud, Workflow, CheckCircle2 } from 'lucide-react';

const iconMap = {
  Code2, FileCode2, Globe, Braces, Palette, Layers,
  Server, Terminal, Network, Cpu, ShieldCheck,
  Database, DatabaseBackup, Zap, Table,
  Box, GitBranch, Cloud, Workflow, CheckCircle2
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="skills" className="section" style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <Wrench size={14} />
            <span>Stack Tecnológico</span>
          </div>
          <h2 className="section-title">
            Tecnologías & <span className="gradient-text">Habilidades</span>
          </h2>
          <p className="section-subtitle">
            Conjunto de tecnologías, frameworks y herramientas que utilizo en el día a día para crear productos digitales robustos.
          </p>
        </div>

        {/* Category selector tabs */}
        <div className="skills-tabs-container no-scrollbar" style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '0.8rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          {skillsData.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className="skills-tab-btn"
              style={{
                padding: '0.7rem 1.4rem',
                borderRadius: '12px',
                border: activeCategory === idx ? '1px solid var(--primary-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: activeCategory === idx ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === idx ? 'var(--primary-cyan)' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.95rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="glass-card skills-card" style={{ padding: '2.5rem' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
              {skillsData[activeCategory].category}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {skillsData[activeCategory].description}
            </p>
          </div>

          <div className="skills-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.2rem'
          }}>
            {skillsData[activeCategory].skills.map((skill, idx) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <div
                  key={idx}
                  className="skill-item"
                  style={{
                    padding: '1.2rem 1.4rem',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(0, 242, 254, 0.4)';
                    e.currentTarget.style.background = 'rgba(0, 242, 254, 0.06)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 242, 254, 0.15)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.03)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  <div className="skill-icon-box" style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(0, 242, 254, 0.1)',
                    border: '1px solid rgba(0, 242, 254, 0.2)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--primary-cyan)',
                    flexShrink: 0
                  }}>
                    <IconComponent size={20} />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="skill-name" style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>
                      {skill.name}
                    </span>
                    <span className="skill-tag" style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      Tecnología Activa
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .skills-tabs-container {
            justify-content: flex-start !important;
            flex-wrap: nowrap !important;
            overflow-x: auto !important;
            padding-bottom: 0.8rem !important;
            margin-bottom: 2rem !important;
          }
          .skills-tab-btn {
            padding: 0.6rem 1.1rem !important;
            font-size: 0.88rem !important;
            flex-shrink: 0 !important;
          }
        }
        @media (max-width: 480px) {
          .skills-card {
            padding: 1.25rem !important;
          }
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)) !important;
            gap: 0.8rem !important;
          }
          .skill-item {
            padding: 0.8rem 0.9rem !important;
            gap: 0.7rem !important;
          }
          .skill-icon-box {
            width: 34px !important;
            height: 34px !important;
          }
          .skill-icon-box svg {
            width: 16px !important;
            height: 16px !important;
          }
          .skill-name {
            font-size: 0.88rem !important;
          }
          .skill-tag {
            font-size: 0.7rem !important;
          }
        }
      `}</style>
    </section>
  );
}
