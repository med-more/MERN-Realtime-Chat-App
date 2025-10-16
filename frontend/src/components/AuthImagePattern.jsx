const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 p-12">
      <div className="max-w-md text-center">
        <div className="grid grid-cols-3 gap-4 mb-8 w-48 h-48 mx-auto">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`w-12 h-12 rounded-2xl bg-primary/30 border-2 border-primary/50 ${
                i % 2 === 0 ? "animate-pulse" : ""
              }`}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4 text-primary">{title}</h2>
        <p className="text-base-content/70 text-lg">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePattern;