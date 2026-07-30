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
        <div style={{
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
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="glass-card" style={{ padding: '2.5rem' }}>
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#fff', marginBottom: '0.4rem' }}>
              {skillsData[activeCategory].category}
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>
              {skillsData[activeCategory].description}
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '1.2rem'
          }}>
            {skillsData[activeCategory].skills.map((skill, idx) => {
              const IconComponent = iconMap[skill.icon] || Code2;
              return (
                <div
                  key={idx}
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
                  <div style={{
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
                    <span style={{ fontWeight: 700, color: '#fff', fontSize: '1rem' }}>
                      {skill.name}
                    </span>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                      Tecnología Activa
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
