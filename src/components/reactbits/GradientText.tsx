import {
  useState,
  useCallback,
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import {
  motion,
  useMotionValue,
  useAnimationFrame,
  useTransform,
} from "motion/react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: "horizontal" | "vertical" | "diagonal";
  pauseOnHover?: boolean;
  yoyo?: boolean;
}

export default function GradientText({
  children,
  className = "",
  colors = ["#5227FF", "#FF9FFC", "#B497CF"],
  animationSpeed = 8,
  showBorder = false,
  direction = "horizontal",
  pauseOnHover = false,
  yoyo = true,
}: GradientTextProps) {
  const [isPaused, setIsPaused] = useState(false);

  const progress = useMotionValue(0);
  const elapsedRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);

  const animationDuration = animationSpeed * 1000;

  useAnimationFrame((time) => {
    if (isPaused) {
      lastTimeRef.current = null;
      return;
    }

    if (lastTimeRef.current === null) {
      lastTimeRef.current = time;
      return;
    }

    const deltaTime = time - lastTimeRef.current;
    lastTimeRef.current = time;
    elapsedRef.current += deltaTime;

    if (yoyo) {
      const fullCycle = animationDuration * 2;
      const cycleTime = elapsedRef.current % fullCycle;

      if (cycleTime < animationDuration) {
        progress.set(
          (cycleTime / animationDuration) * 100
        );
      } else {
        progress.set(
          100 -
            ((cycleTime - animationDuration) /
              animationDuration) *
              100
        );
      }
    } else {
      progress.set(
        (elapsedRef.current / animationDuration) * 100
      );
    }
  });

  useEffect(() => {
    elapsedRef.current = 0;
    progress.set(0);
  }, [animationSpeed, yoyo, progress]);

  const backgroundPosition = useTransform(progress, (p) => {
    if (direction === "horizontal") {
      return `${p}% 50%`;
    }

    if (direction === "vertical") {
      return `50% ${p}%`;
    }

    return `${p}% 50%`;
  });

  const handleMouseEnter = useCallback(() => {
    if (pauseOnHover) {
      setIsPaused(true);
    }
  }, [pauseOnHover]);

  const handleMouseLeave = useCallback(() => {
    if (pauseOnHover) {
      setIsPaused(false);
    }
  }, [pauseOnHover]);

  const gradientAngle =
    direction === "horizontal"
      ? "to right"
      : direction === "vertical"
      ? "to bottom"
      : "to bottom right";

  const gradientColors = [...colors, colors[0]].join(", ");

  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize:
      direction === "horizontal"
        ? "300% 100%"
        : direction === "vertical"
        ? "100% 300%"
        : "300% 300%",
    backgroundRepeat: "repeat",
  };

  return (
    <>
      <style>{`
        .animated-gradient-text {
        position: relative;
        margin: 0;
        display: inline-flex;
        max-width: fit-content;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        font-weight: inherit;
        vertical-align: baseline;
        overflow: hidden;
        }

        .animated-gradient-text.with-border {
          padding: 0.35rem 0.75rem;
        }

        .gradient-overlay {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          z-index: 0;
          pointer-events: none;
        }

        .gradient-overlay::before {
          content: "";
          position: absolute;
          width: calc(100% - 2px);
          height: calc(100% - 2px);
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          border-radius: inherit;
          background-color: #120F17;
          z-index: -1;
        }

        .text-content {
        display: inline-block;
        position: relative;
        z-index: 2;
        background-clip: text;
        -webkit-background-clip: text;
        color: transparent;
        white-space: nowrap;
        }
      `}</style>

      <motion.span
        className={`animated-gradient-text ${
          showBorder ? "with-border" : ""
        } ${className}`.trim()}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showBorder && (
          <motion.span
            className="gradient-overlay"
            style={{
              ...gradientStyle,
              backgroundPosition,
            }}
          />
        )}

        <motion.span
          className="text-content"
          style={{
            ...gradientStyle,
            backgroundPosition,
          }}
        >
          {children}
        </motion.span>
      </motion.span>
    </>
  );
}