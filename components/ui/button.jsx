"use client";

export const Button = ({
  children,
  className = "",
  onClick = () => {},
  type = "submit",
}) => {
  return (
    <button
      className={`${className} py-[7px] px-2.5 inline-flex items-center`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
