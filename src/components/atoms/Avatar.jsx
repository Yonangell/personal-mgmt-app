import Image from "next/image";

export default function Avatar({ src, alt = "avatar" }) {
  return (
    <Image src={src} alt={alt} className="w-8 h-8 rounded-full object-cover" />
  );
}
