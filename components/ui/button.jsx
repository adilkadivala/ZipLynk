"use client";

import { useId } from "react";

useId;

export const Button = ({
  children,
  className = "",
  onClick = () => {},
  type = "submit",
}) => {
  const elementId = useId();
  return (
    <button
      className={`${className} py-[7px] px-2.5 inline-flex items-center`}
      onClick={onClick}
      type={type}
      id={elementId}
    >
      {children}
    </button>
  );
};
