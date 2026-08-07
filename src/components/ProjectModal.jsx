import React, { useEffect } from 'react';
import { GithubIcon } from './Icons';
import { X, ExternalLink, CheckCircle2, Sparkles, Code } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="modal-overlay"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem',
        background: 'rgba(5, 8, 14, 0.85)',
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
      }}
      onClick={onClose}
    >
      <div
        className="glass-card modal-content-card"
        style={{
          maxWidth: '800px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          position: 'relative',
          border: '1px solid rgba(0, 242, 254, 0.3)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="modal-close-btn"
          style={{
            position: 'absolute',
            top: '1.2rem',
            right: '1.2rem',
            background: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: 'var(--text-main)',
            borderRadius: '50%',
            width: '38px',
            height: '38px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            zIndex: 10
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(239, 68, 68, 0.2)';
            e.currentTarget.style.color = '#ef4444';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.color = 'var(--text-main)';
          }}
          aria-label="Cerrar modal"
        >
          <X size={20} />
        </button>

        {/* Project Image */}
        <div className="modal-img-container" style={{
          borderRadius: '12px',
          overflow: 'hidden',
          marginBottom: '1.5rem',
          height: '280px',
          width: '100%',
          position: 'relative'
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to top, rgba(8,11,17,0.8), transparent)'
          }}></div>
        </div>

        {/* Category Badge & Title */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
          <span className="tag-pill" style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            {project.category}
          </span>
          {project.featured && (
            <span style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.3rem',
              fontSize: '0.75rem',
              color: '#f59e0b',
              background: 'rgba(245, 158, 11, 0.1)',
              padding: '0.2rem 0.6rem',
              borderRadius: '6px',
              border: '1px solid rgba(245, 158, 11, 0.2)'
            }}>
              <Sparkles size={12} />
              <span>Proyecto Destacado</span>
            </span>
          )}
        </div>

        <h3 className="modal-title" style={{ fontSize: '1.8rem', fontWeight: 800, color: '#fff', marginBottom: '1.2rem' }}>
          {project.title}
        </h3>

        {/* Full description */}
        <p className="modal-desc" style={{ color: 'var(--text-muted)', fontSize: '1.02rem', lineHeight: 1.7, marginBottom: '1.8rem' }}>
          {project.fullDescription}
        </p>

        {/* Highlights */}
        <div style={{ marginBottom: '1.8rem' }}>
          <h4 style={{ fontSize: '1rem', fontWeight: 700, color: '#fff', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Code size={18} color="var(--primary-cyan)" />
            <span>Características Técnicas Clave:</span>
          </h4>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {project.highlights.map((item, idx) => (
              <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                <CheckCircle2 size={16} color="var(--primary-cyan)" style={{ flexShrink: 0, marginTop: '0.2rem' }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Tags */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textTransform: 'uppercase', marginBottom: '0.6rem', fontFamily: 'var(--font-mono)' }}>
            Tecnologías Utilizadas:
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {project.tags.map((tag, idx) => (
              <span key={idx} className="tag-pill" style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="modal-actions" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', paddingTop: '1.2rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary modal-action-btn"
          >
            <ExternalLink size={18} />
            <span>Ver Demo En Vivo</span>
          </a>

          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary modal-action-btn"
          >
            <GithubIcon size={18} />
            <span>Código en GitHub</span>
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .modal-overlay {
            padding: 0.8rem !important;
          }
          .modal-content-card {
            padding: 1.2rem !important;
            max-height: 94vh !important;
          }
          .modal-img-container {
            height: 180px !important;
            margin-bottom: 1rem !important;
          }
          .modal-title {
            font-size: 1.4rem !important;
            margin-bottom: 0.8rem !important;
          }
          .modal-desc {
            font-size: 0.92rem !important;
            margin-bottom: 1.2rem !important;
          }
          .modal-close-btn {
            top: 0.8rem !important;
            right: 0.8rem !important;
            width: 32px !important;
            height: 32px !important;
          }
          .modal-action-btn {
            width: 100% !important;
          }
        }
      `}</style>
    </div>
  );
}
