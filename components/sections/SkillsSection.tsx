'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { skills } from '@/data/skills';
import SectionHeading from '@/components/ui/SectionHeading';
import { Code, Layers, Trophy, Users } from 'lucide-react';
import type { SkillGroup } from '@/types';

const iconMap: Record<string, React.ReactNode> = {
  code: <Code size={18} />,
  layers: <Layers size={18} />,
  trophy: <Trophy size={18} />,
  users: <Users size={18} />,
};

function SkillGroupPanel({ group, index, isActive, onClick }: {
  group: SkillGroup;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <button
        onClick={onClick}
        aria-expanded={isActive}
        style={{
          width: '100%',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          padding: 0,
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            padding: '1.25rem 1.5rem',
            background: isActive ? 'var(--surface-hover)' : 'var(--surface)',
            border: `1px solid ${isActive ? group.color + '60' : 'var(--border)'}`,
            borderRadius: 'var(--radius)',
            transition: 'all 0.25s',
            marginBottom: '0.75rem',
            boxShadow: isActive ? `0 10px 25px rgba(0,0,0,0.5), 0 0 15px ${group.color}15` : 'none',
          }}
        >
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: `${group.color}15`,
              border: `1px solid ${group.color}30`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: group.color,
              flexShrink: 0,
            }}
          >
            {iconMap[group.icon]}
          </div>

          <div style={{ flex: 1 }}>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontWeight: 600,
                fontSize: '1rem',
                color: isActive ? 'var(--warm-white)' : 'var(--text-primary)',
                marginBottom: '0.125rem',
              }}
            >
              {group.label}
            </div>
            <div className="label" style={{ color: 'var(--text-muted)' }}>
              {group.skills.length} Skills
            </div>
          </div>

          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              background: isActive ? group.color : 'var(--border)',
              boxShadow: isActive ? `0 0 8px ${group.color}` : 'none',
              transition: 'all 0.2s',
            }}
          />
        </div>
      </button>
    </motion.div>
  );
}

export default function SkillsSection() {
  const [activeGroup, setActiveGroup] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const currentGroup = skills[activeGroup];

  return (
    <section
      id="skills"
      data-section="skills"
      className="section-padding"
      ref={ref}
      style={{ background: 'var(--black)', borderTop: '1px solid var(--border)' }}
    >
      <div className="container">
        <SectionHeading
          label="Skills & Capabilities"
          title="Multidisciplinary Expertise"
          subtitle="Built across full-stack engineering, digital products, and esports operations."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.5fr',
            gap: '2.5rem',
            marginTop: '3.5rem',
          }}
        >
          {/* Category Selectors */}
          <div>
            {skills.map((group, i) => (
              <SkillGroupPanel
                key={group.id}
                group={group}
                index={i}
                isActive={activeGroup === i}
                onClick={() => setActiveGroup(i)}
              />
            ))}
          </div>

          {/* Skills Display Panel */}
          <motion.div
            key={activeGroup}
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              background: 'var(--surface)',
              border: `1px solid ${currentGroup.color}35`,
              borderRadius: 'var(--radius-lg)',
              padding: '2.25rem',
              boxShadow: `0 16px 40px rgba(0,0,0,0.5), 0 0 25px ${currentGroup.color}10`,
            }}
          >
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', marginBottom: '2rem' }}>
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  background: `${currentGroup.color}15`,
                  border: `1px solid ${currentGroup.color}35`,
                  borderRadius: '11px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: currentGroup.color,
                }}
              >
                {iconMap[currentGroup.icon]}
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--warm-white)' }}>
                  {currentGroup.label}
                </div>
                <div className="label" style={{ color: 'var(--text-muted)' }}>{currentGroup.skills.length} Capabilities</div>
              </div>
            </div>

            {/* Chips */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.625rem' }}>
              {currentGroup.skills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.04 }}
                  className="badge"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    padding: '0.55rem 1rem',
                    background: 'rgba(255, 255, 255, 0.03)',
                    borderColor: 'var(--border)',
                    color: 'var(--text-primary)',
                    borderRadius: '8px',
                    textTransform: 'none',
                    letterSpacing: '0.01em',
                  }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #skills .container > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
