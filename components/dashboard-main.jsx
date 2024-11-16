export const DashboardMain = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} w-full lg:w-[calc(100%-15rem)] h-[calc(100vh-3.5rem)] lg:ml-[15rem] overflow-y-auto border mt-1`}
    >
      {children}
    </div>
  );
};
