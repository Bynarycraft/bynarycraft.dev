import { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number | null = null;
    let particles: Particle[] = [];

    const getAccent = () => {
      const root = getComputedStyle(document.documentElement);
      const val = root.getPropertyValue("--accent").trim();
      return val ? (h: number | string, a = 1) => `hsl(${val} / ${a})` : (_h: any, a = 1) => `rgba(170,85,255,${a})`;
    };

    const accent = getAccent();

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.6;
        this.speedX = Math.random() * 0.6 - 0.3;
        this.speedY = Math.random() * 0.6 - 0.3;
        this.opacity = Math.random() * 0.6 + 0.15;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = accent(0, this.opacity);
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        if (this.size > 1.8) {
          ctx.fillStyle = accent(0, this.opacity * 0.15);
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }

    const init = () => {
      particles = [];
      const numberOfParticles = Math.max(20, Math.floor((canvas.width * canvas.height) / 30000));
      for (let i = 0; i < numberOfParticles; i++) {
        particles.push(new Particle());
      }
    };

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 140) {
            ctx.strokeStyle = accent(0, 0.12 * (1 - distance / 140));
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    let sweep = 0;
    const drawSweep = () => {
      sweep += 0.003;
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = accent(0, 0.06);
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      const y = (Math.sin(sweep) * 0.4 + 0.5) * canvas.height;
      ctx.moveTo(0, y);
      ctx.quadraticCurveTo(canvas.width * 0.5, y + Math.sin(sweep * 2) * 80, canvas.width, y);
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      connectParticles();
      drawSweep();

      animationFrameId = requestAnimationFrame(animate);
    };

    // Accessibility: respect prefers-reduced-motion
    const mediaQuery = window.matchMedia ? window.matchMedia("(prefers-reduced-motion: reduce)") : null;
    const reduced = mediaQuery ? mediaQuery.matches : false;

    const handleMotionChange = (e: MediaQueryListEvent | MediaQueryList) => {
      const nowReduced = 'matches' in e ? e.matches : false;
      if (nowReduced) {
        // stop ongoing animation
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
          animationFrameId = null;
        }
        // draw a single low-motion frame
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => p.draw());
        connectParticles();
      } else {
        // restart animation
        init();
        if (!animationFrameId) animate();
      }
    };

    const start = () => {
      resizeCanvas();
      init();
      if (!reduced) {
        animate();
      } else {
        // draw single static low-motion frame for reduced motion
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p) => p.draw());
        connectParticles();
      }
    };

    start();

    // listeners
    const onResize = () => {
      resizeCanvas();
      init();
    };

    window.addEventListener("resize", onResize);
    if (mediaQuery) {
      if (typeof mediaQuery.addEventListener === "function") {
        mediaQuery.addEventListener("change", handleMotionChange as any);
      } else if (typeof (mediaQuery as any).addListener === "function") {
        (mediaQuery as any).addListener(handleMotionChange);
      }
    }

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      if (mediaQuery) {
        if (typeof mediaQuery.removeEventListener === "function") {
          mediaQuery.removeEventListener("change", handleMotionChange as any);
        } else if (typeof (mediaQuery as any).removeListener === "function") {
          (mediaQuery as any).removeListener(handleMotionChange);
        }
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 opacity-60 dark:opacity-40"
      role="presentation"
      aria-hidden="true"
    />
  );
};
