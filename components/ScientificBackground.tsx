'use client';

import { useEffect, useRef } from 'react';

// Matrix Settings
const fontSize = 14;
const characters = "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const speedRange = { min: 0.5, max: 1.2 };
const opacityBase = 0.08;

class MatrixColumn {
  x: number;
  y: number;
  speed: number;
  columnChars: string[] = [];
  
  constructor(x: number, canvasHeight: number) {
    this.x = x;
    this.y = Math.random() * canvasHeight;
    this.speed = Math.random() * (speedRange.max - speedRange.min) + speedRange.min;
    
    // Pre-generate characters for this column to reduce flickering
    for (let i = 0; i < 50; i++) {
      this.columnChars.push(characters.charAt(Math.floor(Math.random() * characters.length)));
    }
  }

  update(canvasHeight: number) {
    this.y += this.speed;
    if (this.y > canvasHeight + fontSize * 20) {
      this.y = -fontSize * 20;
      this.speed = Math.random() * (speedRange.max - speedRange.min) + speedRange.min;
    }

    // Occasionally change a character in the pre-generated list
    if (Math.random() > 0.95) {
      const idx = Math.floor(Math.random() * this.columnChars.length);
      this.columnChars[idx] = characters.charAt(Math.floor(Math.random() * characters.length));
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    const trailLength = 15;
    for (let i = 0; i < trailLength; i++) {
      const charY = this.y - i * fontSize;
      if (charY < -fontSize || charY > ctx.canvas.height + fontSize) continue;

      // The head character (i=0) is slightly more opaque
      const opacity = i === 0 ? opacityBase * 2 : (1 - i / trailLength) * opacityBase;
      
      ctx.fillStyle = `rgba(113, 113, 122, ${opacity})`;
      ctx.font = `${fontSize}px "Space Mono", monospace`;
      
      // Use the pre-generated character based on the y position
      const charIdx = Math.floor(Math.abs(charY / fontSize)) % this.columnChars.length;
      const char = this.columnChars[charIdx];
      
      ctx.fillText(char, this.x, charY);
    }
  }
}

export default function ScientificBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let columns: MatrixColumn[] = [];

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      const columnCount = Math.floor(canvas.width / (fontSize * 1.5));
      columns = [];
      for (let i = 0; i < columnCount; i++) {
        // Sparse: only fill ~25% of possible columns
        if (Math.random() > 0.75) {
          columns.push(new MatrixColumn(i * fontSize * 1.5, canvas.height));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < columns.length; i++) {
        columns[i].update(canvas.height);
        columns[i].draw(ctx);
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none bg-transparent"
    />
  );
}
