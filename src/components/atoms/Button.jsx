export default function Button({ children, className = "", ...props }) {
  return (
    <button
      {...props}
      className={`px-6 py-3 rounded-xl bg-primary text-black font-bold hover:bg-primary-hover transition-all active:scale-95 shadow-md shadow-primary/20 ${className}`}
    >
      {children}
    </button>
  );
}
