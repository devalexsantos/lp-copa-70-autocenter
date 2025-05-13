import { Pointer } from "lucide-react";
import Link from "next/link";

interface CtaButtonProps {
  text: string;
  textStyle?: string;
}

export function CtaButton({ text, textStyle }: CtaButtonProps) {
  return (
    <Link
      href="https://api.whatsapp.com/send?phone=5571996071970&text=Ol%C3%A1%2C%20acabei%20de%20ver%20o%20site%20de%20voc%C3%AAs%20e%20queria%20tirar%20uma%20d%C3%BAvida."
      className={`text-center w-full bg-[#009407] px-6 py-4 flex items-center justify-center gap-2 text-white text-2xl font-bold rounded-[24px]`}
      target="_blank"
    >
      <Pointer className="w-8 h-8 rotate-90" />
      <span className={textStyle}>
        {text}
      </span>
    </Link>
  )
}
