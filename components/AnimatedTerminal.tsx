'use client';

import { useEffect, useState, useRef } from 'react';

export const TERMINAL_SEQUENCE = [
  {
    delay: 600,
    type: 'cmd',
    text: '> ./scripts/run.sh --repl test/phase3/test_board.repl --kernel firmware.elf',
  },
  { delay: 400, type: 'info', text: '⏺ Parsing Renode platform description (.repl -> .dtb)...' },
  { delay: 300, type: 'info', text: '⏺ Applying YAML OpenUSD platform alignment...' },
  { delay: 500, type: 'success', text: '✓ Device Tree Blob generated: build/board.dtb' },
  {
    delay: 400,
    type: 'cmd',
    text: '> qemu-system-arm -machine arm-generic-fdt -hw-dtb build/board.dtb -nographic',
  },
  { delay: 300, type: 'info', text: '⏺ Initializing virtmcu QOM plugins...' },
  { delay: 100, type: 'detail', text: '  Module: hw-virtmcu-zenoh.so loaded' },
  { delay: 100, type: 'detail', text: '  Module: hw-virtmcu-sal-aal.so loaded' },
  {
    delay: 100,
    type: 'info',
    text: '⏺ Connecting to Zenoh Federation Bus (tcp/localhost:7447)...',
  },
  { delay: 400, type: 'success', text: '⏺ Clock Slaved: suspend mode (Physics Master: MuJoCo)' },
  { delay: 700, type: 'sep', text: ' ' },
  { delay: 200, type: 'info', text: '⏺ Booting firmware...' },
  { delay: 100, type: 'detail', text: '  [UART0] virtmcu: starting multi-node mesh' },
  { delay: 100, type: 'detail', text: '  [UART0] eth0: deterministic delivery active' },
  { delay: 100, type: 'detail', text: '  [UART0] Waiting for global T=0 boundary...' },
  { delay: 400, type: 'success', text: '✓ Lockstep active. Deterministic simulation running.' },
  { delay: 4000, type: 'reset', text: '' },
];

export default function AnimatedTerminal({
  sequence,
  title,
  className = '',
}: {
  sequence: Array<{ delay: number; type: string; text: string }>;
  title: string;
  className?: string;
}) {
  const [lines, setLines] = useState<Array<{ type: string; text: string }>>([]);
  const [cursor, setCursor] = useState(true);
  const bodyRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => setCursor((c) => !c), 530);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) setStarted(true);
      },
      { threshold: 0.2 },
    );
    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    let idx = 0;
    let tid: ReturnType<typeof setTimeout>;

    const next = () => {
      if (idx >= sequence.length) return;
      const item = sequence[idx++];
      if (item.type === 'reset') {
        tid = setTimeout(() => {
          setLines([]);
          idx = 0;
          next();
        }, item.delay);
        return;
      }
      setLines((prev) => [...prev, { type: item.type, text: item.text }]);
      tid = setTimeout(next, item.delay);
    };

    tid = setTimeout(next, 800);
    return () => clearTimeout(tid);
  }, [started, sequence]);

  return (
    <div 
      className={`bg-[#0d1117] border border-[#30363d] rounded-xl w-full text-left shadow-xl font-mono overflow-hidden ${className}`} 
      ref={sectionRef}
    >
      <div className="bg-[#161b22] px-5 py-3 flex items-center gap-3 border-b border-[#30363d]">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span className="text-[#8b949e] text-[13px]">{title}</span>
      </div>
      <div 
        className="p-6 h-full text-[13px] sm:text-[14px] leading-relaxed text-[#c9d1d9] overflow-hidden" 
        ref={bodyRef}
      >
        {lines.map((line, i) => (
          <div 
            key={i} 
            className={`
              ${line.type === 'cmd' ? 'text-[#58a6ff]' : ''}
              ${line.type === 'success' ? 'text-[#7ee787]' : ''}
              ${line.type === 'info' ? 'text-[#a5d6ff]' : ''}
              ${line.type === 'detail' ? 'text-[#8b949e]' : ''}
            `}
          >
            {line.text}
          </div>
        ))}
        <span className={`${cursor ? 'opacity-100' : 'opacity-0'} text-[#58a6ff]`}>█</span>
      </div>
    </div>
  );
}
