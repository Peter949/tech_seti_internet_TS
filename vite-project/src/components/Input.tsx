import React from "react";

interface InputProps {
  size?: "small" | "medium" | "large";
  color?: "primary" | "secondary" | "danger";
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Input: React.FC<InputProps> = ({
  size = "medium",
  color = "primary",
  placeholder = "",
  ...rest
}) => {
  const classes = {
    sizes: {
      small: "h-8 text-sm px-2",
      medium: "h-10 text-base px-3",
      large: "h-12 text-lg px-4",
    },
    colors: {
      primary: "border-blue-500 focus:border-blue-700 focus:ring-blue-500",
      secondary: "border-gray-300 focus:border-gray-500 focus:ring-gray-500",
      danger: "border-red-500 focus:border-red-700 focus:ring-red-500",
    },
  };
  return (
    <input
      type="text"
      className={`border rounded-md ${classes.sizes[size]} ${classes.colors[color]} focus:outline-none`}
      placeholder={placeholder}
      {...rest}
    />
  );
};