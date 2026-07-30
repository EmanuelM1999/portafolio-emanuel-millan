import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { GithubIcon } from './Icons';
import { FolderGit2, ExternalLink, Eye, Sparkles, Filter } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['Todos', 'Fullstack', 'Frontend', 'Backend'];

  const filteredProjects = filter === 'Todos'
    ? projectsData
    : projectsData.filter((p) => p.category === filter);

  return (
    <section id="projects" className="section" style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="container">
        <div className="section-header">
          <div className="section-badge">
            <FolderGit2 size={14} />
            <span>Portafolio de Trabajo</span>
          </div>
          <h2 className="section-title">
            Proyectos <span className="gradient-text">Personales</span>
          </h2>
          <p className="section-subtitle">
            Una selección de proyectos web fullstack desarrollados con estándares de nivel producción.
          </p>
        </div>

        {/* Filter Buttons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '0.8rem',
          flexWrap: 'wrap',
          marginBottom: '3rem'
        }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--text-dim)', fontSize: '0.9rem', marginRight: '0.5rem' }}>
            <Filter size={16} />
            <span>Filtrar por:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: '10px',
                border: filter === cat ? '1px solid var(--primary-cyan)' : '1px solid rgba(255, 255, 255, 0.1)',
                background: filter === cat ? 'rgba(0, 242, 254, 0.12)' : 'rgba(255, 255, 255, 0.03)',
                color: filter === cat ? 'var(--primary-cyan)' : 'var(--text-muted)',
                fontWeight: 600,
                fontSize: '0.88rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
          gap: '2rem'
        }} className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative'
              }}
            >
              {/* Project Image Container with Overlay */}
              <div style={{
                position: 'relative',
                height: '210px',
                overflow: 'hidden'
              }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                  className="project-img"
                />
                
                {/* Category Pill Tag */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  zIndex: 2
                }}>
                  <span className="tag-pill" style={{ background: 'rgba(8, 11, 17, 0.85)', backdropFilter: 'blur(8px)' }}>
                    {project.category}
                  </span>
                </div>

                {project.featured && (
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.3rem',
                    fontSize: '0.75rem',
                    color: '#f59e0b',
                    background: 'rgba(8, 11, 17, 0.85)',
                    backdropFilter: 'blur(8px)',
                    padding: '0.3rem 0.6rem',
                    borderRadius: '6px',
                    border: '1px solid rgba(245, 158, 11, 0.3)'
                  }}>
                    <Sparkles size={12} />
                    <span>Destacado</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#fff', marginBottom: '0.6rem' }}>
                  {project.title}
                </h3>

                <p style={{
                  color: 'var(--text-muted)',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  marginBottom: '1.2rem',
                  flexGrow: 1
                }}>
                  {project.shortDescription}
                </p>

                {/* Tech Badges */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1.5rem' }}>
                  {project.tags.slice(0, 4).map((tag, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.75rem',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                      background: 'rgba(255,255,255,0.04)',
                      padding: '0.2rem 0.5rem',
                      borderRadius: '4px',
                      border: '1px solid rgba(255,255,255,0.06)'
                    }}>
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', alignSelf: 'center' }}>
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Card Actions */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '1rem',
                  borderTop: '1px solid rgba(255,255,255,0.08)'
                }}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    style={{
                      background: 'none',
                      border: 'none',
                      color: 'var(--primary-cyan)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <Eye size={16} />
                    <span>Ver Detalles</span>
                  </button>

                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Code"
                      style={{
                        color: 'var(--text-muted)',
                        padding: '0.4rem',
                        borderRadius: '6px',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      <GithubIcon size={18} />
                    </a>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      style={{
                        color: 'var(--text-muted)',
                        padding: '0.4rem',
                        borderRadius: '6px',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = 'var(--primary-cyan)'}
                      onMouseLeave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      <style>{`
        .glass-card:hover .project-img {
          transform: scale(1.05);
        }
        @media (max-width: 600px) {
          .projects-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
