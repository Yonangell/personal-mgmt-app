export default function Button({ children }) {
  return (
    <button className="px-4 py-2 rounded-md bg-primary text-black hover:bg-primary-hover transition-colors">
      {children}
    </button>
  );
}
