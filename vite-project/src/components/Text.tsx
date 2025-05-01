import React, { ReactNode } from "react";

interface TextProps {
  size?: "small" | "medium" | "large";
  weight?: "normal" | "bold" | "semibold";
  color?: "primary" | "secondary" | "accent" | "danger";
  children: ReactNode;
  className?: string;
}

export const Text = ({
  size = "medium",
  weight = "normal",
  color = "primary",
  children,
  className = "",
}: TextProps) => {
  const classes = {
    sizes: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
    },
    weights: {
      normal: "font-normal",
      bold: "font-bold",
      semibold: "font-semibold",
    },
    colors: {
      primary: "text-black",
      secondary: "text-gray-700",
      accent: "text-blue-500",
      danger: "text-red-500",
    },
  };

  return (
    <span
      className={`${classes.sizes[size]} ${classes.weights[weight]} ${classes.colors[color]} ${className}`}
    >
      {children}
    </span>
  );
};