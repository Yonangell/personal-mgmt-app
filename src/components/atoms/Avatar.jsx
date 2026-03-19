import Image from "next/image";

export default function Avatar({ src, alt = "avatar" }) {
  const imageSrc = src || "/default-avatar.png";
  return (
    <Image src={imageSrc} alt={alt} className="w-8 h-8 rounded-full object-cover" width={40} height={40} />
  );
}
