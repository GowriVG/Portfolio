import React, { useMemo } from 'react';

const f = (n) => n.toFixed(1);

// ── Left blob: large kidney oval, center ≈ (290, 390)
const LEFT_BASE = "M 540,250 C 580,150 350,30 180,140 C 10,250 -30,450 50,560 C 130,670 310,700 430,660 C 550,620 500,350 540,250 Z";
const LCX = 290, LCY = 390;

// ── Bottom-left secondary loop — smaller oval below and left of the main blob
const BOTTOM_BASE = "M 220,820 C 260,740 340,700 380,740 C 420,780 390,870 330,890 C 270,910 180,900 220,820 Z";
const BCX = 290, BCY = 810;

// 38 rings — small step per scale to get tight packing like the reference
const SCALES_L = Array.from({ length: 38 }, (_, i) => 1.0 - i * 0.026);
const SCALES_B = Array.from({ length: 18 }, (_, i) => 1.0 - i * 0.052);

const N = 20;

export default function WavyBackground() {

  const rightPaths = useMemo(() => (
    Array.from({ length: N }, (_, i) => {
      const t = i / (N - 1);
      const d =
        `M ${f(880 + 380*t)},${f(-10)} ` +
        `C ${f(1050 + 310*t)},${f(-50 + 60*t)} ${f(1440)},${f(40 + 100*t)} ${f(1440 - 10*t)},${f(200 + 80*t)} ` +
        `C ${f(1440 - 20*t)},${f(360 + 60*t)} ${f(1100 + 210*t)},${f(420 + 40*t)} ${f(1080 + 240*t)},${f(570 - 5*t)} ` +
        `C ${f(1060 + 270*t)},${f(720 - 50*t)} ${f(1150 + 260*t)},${f(830 - 50*t)} ${f(1440)},${f(910 - 40*t)}`;
      return {
        d,
        sw: f(0.9 - t * 0.4),
        op: (0.07 + t * 0.20).toFixed(3),
      };
    })
  ), []);

  return (
    <svg
      viewBox="0 0 1440 900"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <path id="lb" d={LEFT_BASE} />
        <path id="bb" d={BOTTOM_BASE} />
      </defs>

      {/* ── Left main blob: 38 tightly packed concentric rings ── */}
      {SCALES_L.map((s, i) => {
        const progress = i / (SCALES_L.length - 1);
        return (
          <use
            key={`l${i}`}
            href="#lb"
            transform={`translate(${f(LCX*(1-s))}, ${f(LCY*(1-s))}) scale(${s})`}
            stroke={`rgba(200,200,218,${(0.04 + progress * 0.18).toFixed(3)})`}
            fill="none"
            strokeWidth={f(0.85 - progress * 0.35)}
          />
        );
      })}

      {/* ── Bottom-left secondary loop: 18 rings ── */}
      {SCALES_B.map((s, i) => {
        const progress = i / (SCALES_B.length - 1);
        return (
          <use
            key={`b${i}`}
            href="#bb"
            transform={`translate(${f(BCX*(1-s))}, ${f(BCY*(1-s))}) scale(${s})`}
            stroke={`rgba(200,200,218,${(0.03 + progress * 0.14).toFixed(3)})`}
            fill="none"
            strokeWidth={f(0.8 - progress * 0.35)}
          />
        );
      })}

      {/* ── Right vortex: 20 parallel S-curve lines ── */}
      {rightPaths.map((p, i) => (
        <path
          key={`r${i}`}
          d={p.d}
          stroke={`rgba(200,200,218,${p.op})`}
          fill="none"
          strokeWidth={p.sw}
        />
      ))}
    </svg>
  );
}