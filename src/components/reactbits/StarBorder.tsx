import React from "react";

type StarBorderProps<T extends React.ElementType = "button"> =
  React.ComponentPropsWithoutRef<T> & {
    as?: T;
    className?: string;
    children?: React.ReactNode;
    color?: string;
    speed?: React.CSSProperties["animationDuration"];
    thickness?: number;
    backgroundColor?: string;
    textColor?: string;
    borderColor?: string;
  };

const StarBorder = <T extends React.ElementType = "button">({
  as,
  className = "",
  color = "#60A5FA",
  speed = "5s",
  thickness = 1,
  backgroundColor = "#0B1220",
  textColor = "#E2E8F0",
  borderColor = "rgba(96, 165, 250, 0.12)",
  children,
  style,
  ...rest
}: StarBorderProps<T>) => {
  const Component = as || "button";

  return (
    <>
      <style>
        {`
          @keyframes star-border-top {
            0% {
              transform: translateX(-120%);
              opacity: 0;
            }

            15% {
              opacity: 1;
            }

            50% {
              opacity: 1;
            }

            85% {
              opacity: 1;
            }

            100% {
              transform: translateX(220%);
              opacity: 0;
            }
          }

          @keyframes star-border-bottom {
            0% {
              transform: translateX(220%);
              opacity: 0;
            }

            15% {
              opacity: 1;
            }

            50% {
              opacity: 1;
            }

            85% {
              opacity: 1;
            }

            100% {
              transform: translateX(-120%);
              opacity: 0;
            }
          }

          .star-border-top {
            animation: star-border-top linear infinite;
          }

          .star-border-bottom {
            animation: star-border-bottom linear infinite;
          }
        `}
      </style>

      <Component
        className={`relative inline-block overflow-hidden rounded-full ${className}`}
        {...rest}
        style={{
          padding: `${thickness}px`,
          ...style,
        }}
      >
        {/* Animated top streak */}
            <div
            className="star-border-top pointer-events-none absolute left-0 top-0 z-[2] h-[2px] w-[28%] rounded-full"
            style={{
            background: `linear-gradient(
                90deg,
                transparent 0%,
                rgba(96, 165, 250, 0.18) 18%,
                rgba(96, 165, 250, 0.50) 38%,
                rgba(147, 197, 253, 0.78) 50%,
                rgba(96, 165, 250, 0.50) 62%,
                rgba(96, 165, 250, 0.18) 82%,
                transparent 100%
            )`,
            boxShadow: `0 0 6px ${color}, 0 0 12px ${color}33`,
            animationDuration: speed,
            }}
                        />

            {/* Animated bottom streak */}
            <div
            className="star-border-bottom pointer-events-none absolute bottom-0 right-0 z-[2] h-[2px] w-[28%] rounded-full"
            style={{
            background: `linear-gradient(
                90deg,
                transparent 0%,
                rgba(96, 165, 250, 0.18) 18%,
                rgba(96, 165, 250, 0.50) 38%,
                rgba(147, 197, 253, 0.78) 50%,
                rgba(96, 165, 250, 0.50) 62%,
                rgba(96, 165, 250, 0.18) 82%,
                transparent 100%
            )`,
            boxShadow: `0 0 6px ${color}, 0 0 12px ${color}33`,
            animationDuration: speed,
            }}
            />

        {/* Button */}
        <div
          className="relative z-[1] rounded-full px-4 py-2.5 text-center text-sm"
          style={{
            background: backgroundColor,
            color: textColor,
            border: `1px solid ${borderColor}`,
          }}
        >
          {children}
        </div>
      </Component>
    </>
  );
};

export default StarBorder;


