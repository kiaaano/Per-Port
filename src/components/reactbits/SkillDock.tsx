import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  type MotionValue,
  type SpringOptions,
} from "motion/react";
import { useRef } from "react";

type SkillDockProps = {
  items: string[];
};

type SkillItemProps = {
  label: string;
  mouseX: MotionValue<number>;
  distance: number;
  magnification: number;
  spring: SpringOptions;
};

function SkillItem({
  label,
  mouseX,
  distance,
  magnification,
  spring,
}: SkillItemProps) {
  const ref = useRef<HTMLSpanElement>(null);

  const mouseDistance = useTransform(mouseX, (value) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) {
      return Infinity;
    }

    return value - (rect.left + rect.width / 2);
  });

  const scaleValue = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [1, magnification, 1]
  );

  const scale = useSpring(scaleValue, spring);

  return (
    <motion.span
      ref={ref}
      style={{ scale }}
      className="relative inline-flex items-center justify-center rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-sm text-slate-300 transition-colors duration-300 hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]"
    >
      {label}
    </motion.span>
  );
}

export default function SkillDock({ items }: SkillDockProps) {
  const mouseX = useMotionValue(Infinity);

  const spring: SpringOptions = {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  };

  return (
    <div
      className="flex flex-wrap justify-center gap-3 pb-6"
      onMouseMove={(event) => {
        mouseX.set(event.pageX);
      }}
      onMouseLeave={() => {
        mouseX.set(Infinity);
      }}
    >
      {items.map((item) => (
        <SkillItem
          key={item}
          label={item}
          mouseX={mouseX}
          distance={180}
          magnification={1.18}
          spring={spring}
        />
      ))}
    </div>
  );
}