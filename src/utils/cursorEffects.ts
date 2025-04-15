
let cursorEl: HTMLDivElement | null = null;
let cursorDotEl: HTMLDivElement | null = null;
const trailParticles: HTMLDivElement[] = [];
const maxTrailParticles = 15;
let animationFrameId = 0;

// Create custom cursor and trail effect
export function initializeCursor() {
  if (typeof window === 'undefined') return;

  // Create cursor elements if they don't exist
  if (!cursorEl) {
    cursorEl = document.createElement('div');
    cursorEl.className = 'custom-cursor';
    document.body.appendChild(cursorEl);
  }

  if (!cursorDotEl) {
    cursorDotEl = document.createElement('div');
    cursorDotEl.className = 'cursor-dot';
    document.body.appendChild(cursorDotEl);
  }

  // Handle mouse movement
  const handleMouseMove = (e: MouseEvent) => {
    // Move the cursor
    if (cursorEl) {
      cursorEl.style.left = `${e.clientX}px`;
      cursorEl.style.top = `${e.clientY}px`;
    }

    if (cursorDotEl) {
      cursorDotEl.style.left = `${e.clientX}px`;
      cursorDotEl.style.top = `${e.clientY}px`;
    }

    // Add trail particle
    const particle = document.createElement('div');
    particle.className = 'trail-particle';
    particle.style.left = `${e.clientX}px`;
    particle.style.top = `${e.clientY}px`;
    document.body.appendChild(particle);
    
    // Manage particle array
    trailParticles.push(particle);
    if (trailParticles.length > maxTrailParticles) {
      const oldParticle = trailParticles.shift();
      oldParticle?.remove();
    }
  };

  // Handle hover effects on interactive elements
  const handleElementHover = () => {
    if (cursorEl) {
      cursorEl.classList.add('scale-150');
    }
  };

  const handleElementLeave = () => {
    if (cursorEl) {
      cursorEl.classList.remove('scale-150');
    }
  };

  // Add event listeners
  document.addEventListener('mousemove', handleMouseMove);

  // Add hover effects to interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .skill-item, .project-card');
  interactiveElements.forEach((el) => {
    el.addEventListener('mouseenter', handleElementHover);
    el.addEventListener('mouseleave', handleElementLeave);
  });

  // Clean up function
  return () => {
    document.removeEventListener('mousemove', handleMouseMove);
    interactiveElements.forEach((el) => {
      el.removeEventListener('mouseenter', handleElementHover);
      el.removeEventListener('mouseleave', handleElementLeave);
    });
    cursorEl?.remove();
    cursorDotEl?.remove();
    trailParticles.forEach(p => p.remove());
    trailParticles.length = 0;
    cancelAnimationFrame(animationFrameId);
  };
}
