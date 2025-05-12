import { Pointer } from "lucide-react";
import Link from "next/link";

interface CtaButtonProps {
  text: string;
  textStyle?: string;
}

export function CtaButton({ text, textStyle }: CtaButtonProps) {
  return (
    <Link href="" className={`text-center w-full bg-[#009407] px-6 py-4 flex items-center justify-center gap-2 text-white text-2xl font-bold rounded-[24px]`}>
      <Pointer className="w-8 h-8 rotate-90" />
      <span className={textStyle}>
        {text}
      </span>
    </Link>
  )
}
