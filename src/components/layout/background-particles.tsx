"use client";

import React, { useMemo } from 'react';

export function BackgroundParticles() {
  const particles = useMemo(() => Array.from({ length: 50 }), []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {particles.map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-primary/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            animation: `float ${Math.random() * 20 + 10}s ease-in-out infinite`,
            animationDelay: `${Math.random() * -30}s`,
          }}
        />
      ))}
    </div>
  );
}
