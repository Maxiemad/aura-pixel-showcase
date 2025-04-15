
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
}

const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle properties
    const particlesArray: Particle[] = [];
    const numberOfParticles = Math.min(Math.floor(window.innerWidth / 20), 50); // Limit particle count
    const colors = ['#FF1493', '#FFD700', '#800080', '#FFF0F5'];

    // Create particles
    for (let i = 0; i < numberOfParticles; i++) {
      const size = Math.random() * 3 + 1;
      const x = Math.random() * (canvas.width - size * 2);
      const y = Math.random() * (canvas.height - size * 2);
      const speedX = Math.random() * 0.5 - 0.25;
      const speedY = Math.random() * 0.5 - 0.25;
      const color = colors[Math.floor(Math.random() * colors.length)];

      particlesArray.push({
        x,
        y,
        size,
        color,
        speedX,
        speedY,
      });
    }

    // Function to animate particles
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particlesArray.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off walls
        if (particle.x > canvas.width || particle.x < 0) {
          particle.speedX = -particle.speedX;
        }
        if (particle.y > canvas.height || particle.y < 0) {
          particle.speedY = -particle.speedY;
        }

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.globalAlpha = 0.3; // Semi-transparent
        ctx.fill();
      });

      // Connect particles with lines when they're close enough
      connectParticles(particlesArray, ctx, canvas);

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Function to connect particles with lines
    const connectParticles = (particles: Particle[], context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => {
      const maxDistance = canvas.width > 1000 ? 120 : 80;
      
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            context.beginPath();
            context.strokeStyle = particles[a].color;
            context.globalAlpha = opacity * 0.3;
            context.lineWidth = 0.5;
            context.moveTo(particles[a].x, particles[a].y);
            context.lineTo(particles[b].x, particles[b].y);
            context.stroke();
          }
        }
      }
    };

    // Start animation
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 opacity-70"
    />
  );
};

export default Particles;
