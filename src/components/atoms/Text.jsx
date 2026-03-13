export default function Text({ children, className = "" }) {
  return <p className={`text-dark ${className}`}>{children}</p>;
}
