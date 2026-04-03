import Image from "next/image";

export default function Avatar({ src, name, className = "" }) {
  // 1. Clases base
  const baseClasses =
    "shrink-0 rounded-[2.5rem] overflow-hidden flex items-center justify-center transition-all duration-300";

  // 2. Lógica de inicial blindada
  const getInitial = () => {
    if (name && typeof name === "string" && name.length > 0) {
      return name.charAt(0).toUpperCase();
    }
    return "U"; // 'U' de Usuario como último recurso
  };

  if (src) {
    return (
      <div className={`${baseClasses} ${className}`}>
        <Image
          src={src}
          alt={name || "Avatar"}
          width={150}
          height={150}
          className="w-full h-full object-cover"
        />
      </div>
    );
  }

  return (
    <div
      className={`${baseClasses} ${className} bg-primary/10 border-2 border-primary/20`}
    >
      <span className="text-3xl font-black italic text-primary select-none tracking-tighter">
        {getInitial()}
      </span>
    </div>
  );
}
