import React from "react";

export const DashboardMain = ({ children, className }) => {
  return (
    <div className={`${className} `}>
      <div>{children}</div>
    </div>
  );
};
