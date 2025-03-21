"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

interface LoadingSpinnerProps {
  text?: string;
  size?: "small" | "medium" | "large";
}

export default function LoadingSpinner({
  text = "Loading...",
  size = "medium",
}: LoadingSpinnerProps) {
  const [dots, setDots] = useState("");

  // Animate the dots in the loading text
  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
    }, 400);

    return () => clearInterval(interval);
  }, []);

  // Determine size classes
  const sizeClasses = {
    small: "w-16 h-16",
    medium: "w-24 h-24",
    large: "w-32 h-32",
  };

  const textSizeClasses = {
    small: "text-sm mt-2",
    medium: "text-base mt-3",
    large: "text-lg mt-4",
  };

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white min-h-screen">
      <div className={`relative ${sizeClasses[size]}`}>
        {/* Outer spinning ring */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-600 to-purple-700"
          style={{
            backgroundSize: "200% 200%",
          }}
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
            rotate: 360,
          }}
          transition={{
            backgroundPosition: {
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
            },
            rotate: {
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            },
          }}
        />

        {/* Inner circle mask */}
        <div className="absolute inset-1 rounded-full bg-white" />

        {/* Middle spinning ring */}
        <motion.div
          className="absolute inset-[4px] rounded-full bg-gradient-to-br from-violet-500 to-purple-600 opacity-80"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />

        {/* Inner circle mask */}
        <div className="absolute inset-[8px] rounded-full bg-white" />

        {/* Center pulsing dot */}
        <motion.div
          className="absolute inset-0 m-auto h-1/3 w-1/3 rounded-full bg-gradient-to-br from-violet-600 to-purple-700 shadow-lg"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Orbiting dots */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 rounded-full bg-violet-400 shadow-sm"
            initial={{
              x: 0,
              y: 0,
            }}
            animate={{
              x: Math.cos((i * (Math.PI * 2)) / 3) * 40 + "%",
              y: Math.sin((i * (Math.PI * 2)) / 3) * 40 + "%",
              scale: [1, 1.2, 1],
            }}
            transition={{
              x: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.3,
              },
              y: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                delay: i * 0.3,
              },
              scale: {
                duration: 1,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.3,
              },
            }}
          />
        ))}
      </div>

      {/* Loading text */}
      <div className={`font-medium text-violet-700 ${textSizeClasses[size]}`}>
        {text}
        <span className="inline-block w-6">{dots}</span>
      </div>
    </div>
  );
}
