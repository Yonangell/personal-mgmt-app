"use client";

import Label from "@/components/atoms/Label";
import Text from "@/components/atoms/Text";
import Input from "@/components/atoms/Input";

export default function InputField({
  label,
  type = "text",
  placeholder,
  error,
}) {
  return (
    <div className="flex flex-col gap-2 w-full group">
      <Label className="text-[10px] font-black uppercase tracking-[0.2em] text-dark/40 ml-1 group-focus-within:text-primary transition-colors italic">
        {label}
      </Label>

      <Input
        type={type}
        placeholder={placeholder}
        className="w-full bg-light/30 border-2 border-transparent px-5 py-4 rounded-2xl text-sm font-bold text-dark outline-none transition-all focus:border-primary/20 focus:bg-white focus:shadow-xl focus:shadow-primary/5 placeholder:text-dark/20"
      />

      {error && (
        <Text className="text-[10px] font-black uppercase tracking-widest text-error mt-1 ml-1 animate-pulse">
          {error}
        </Text>
      )}
    </div>
  );
}
