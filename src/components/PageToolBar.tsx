export const PageToolbar = ({ title, children }) => {
  return (
    <div className="border-b flex items-center justify-between p-4 bg-base-100">
      <div>
        <h3 className="text-xl">{title}</h3>
      </div>
      <div>{children}</div>
    </div>
  );
};
