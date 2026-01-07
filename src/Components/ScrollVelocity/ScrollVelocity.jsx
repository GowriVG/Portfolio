import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";
import "./ScrollVelocity.css";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    function updateWidth() {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}


// New: Accepts arbitrary children, not just text
export const ScrollVelocity = ({
  children,
  velocity = 100,
  className = "",
  numCopies = 4, // More copies for seamless loop
  parallaxClassName = "parallax",
  scrollerClassName = "scroller",
  parallaxStyle,
  scrollerStyle,
}) => {
  const baseX = useMotionValue(0);
  const copyRef = useRef(null);
  const copyWidth = useElementWidth(copyRef);
  // Pause on hover
  const pausedRef = useRef(false);

  function wrap(min, max, v) {
    const range = max - min;
    const mod = (((v - min) % range) + range) % range;
    return mod + min;
  }

  const x = useTransform(baseX, (v) => {
    if (copyWidth === 0) return "0px";
    // For seamless loop: move from 0 to -copyWidth, then reset
    return `${wrap(-copyWidth, 0, v)}px`;
  });

  const directionFactor = useRef(velocity >= 0 ? 1 : -1);
  useAnimationFrame((t, delta) => {
  if (pausedRef.current) return; // skip updates while paused
    let moveBy = directionFactor.current * Math.abs(velocity) * (delta / 1000);
    baseX.set(baseX.get() + moveBy);
  });

  // Create enough copies for seamless infinite scroll
  const clones = [];
  for (let i = 0; i < numCopies; i++) {
    clones.push(
      <div
        className={className}
        key={i}
        ref={i === 0 ? copyRef : null}
        style={{ 
          display: "flex", 
          flexDirection: "row",
          flexShrink: 0,
          gap: "0" // No gap between items
        }}
      >
        {children}
      </div>
    );
  }

  return (
    <div className={parallaxClassName} style={parallaxStyle}>
      <motion.div
        className={scrollerClassName}
  style={{ x, ...scrollerStyle }}
  onMouseEnter={() => (pausedRef.current = true)}
  onMouseLeave={() => (pausedRef.current = false)}
      >
        {clones}
      </motion.div>
    </div>
  );
};

export default ScrollVelocity;
