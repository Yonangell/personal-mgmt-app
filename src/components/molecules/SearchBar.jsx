export default function SearchBar({
  placeholder = "BUSCAR USUARIO O EMAIL...",
  onChange,
  value,
}) {
  return (
    <div className="relative group w-full max-w-lg">
      <div className="absolute left-6 top-1/2 -translate-y-1/2 text-dark/20 group-focus-within:text-primary transition-colors duration-300">
        <span className="text-2xl opacity-30">🔍</span>
      </div>

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`
          w-full pl-20 pr-8 py-4 
          bg-white/40 border-none rounded-[1.5rem] 
          shadow-sm shadow-black/5 
          focus:ring-2 focus:ring-primary/20 outline-none 
          font-black italic uppercase text-[10px] tracking-[0.2em] 
          placeholder:text-dark/20 transition-all
        `}
      />
    </div>
  );
}
