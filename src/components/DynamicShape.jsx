const DynamicShape = ({ children }) => {
  return (
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      <div
        className="absolute -inset-1.5 rounded-full bg-primary-400/40 blur-lg dark:bg-primary-400/30"
        aria-hidden="true"
      />

      <div className="shape-clip relative h-full w-full overflow-hidden shadow-xl shadow-primary-500/20">
        {children}
      </div>
    </div>
  );
};

export default DynamicShape;
