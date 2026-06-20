/**
 * GrainOverlay — a subtle SVG noise/grain texture over the entire page.
 * Rendered once, fixed, opacity ~0.04, pointer-events disabled.
 */
export const GrainOverlay = () => {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[1] pointer-events-none"
      style={{ opacity: 0.04 }}
    >
      <svg
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="bionic-grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.65"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#bionic-grain)" />
      </svg>
    </div>
  );
};

export default GrainOverlay;
