import Image from "next/image";
import whyChoose from '../../public/images/why-choose.png'
import { CheckCircle, MessageSquareQuote } from "lucide-react";

const whyChooseOptions = [
  "53 anos de credibilidade",
  "Peças novas e certificadas",
  "Garantia em todos os serviços – Segurança e confiança para você.",
  "Equipe qualificada e tecnologia de ponta – Diagnósticos precisos e reparos eficientes",
  "Sustentabilidade – Descarte correto de resíduos, compromisso com o meio ambiente.",
  "Localização estratégica – No Shopping da Bahia, com conforto e estacionamento",
  "Parceria com as melhores marcas.",
  "Transparência no diagnóstico e no orçamento",
  "Equipe qualificada"
]

export function WhyChoose() {
  return (
    <div className="w-full px-6 py-30 text-white">
      <div className="w-full max-w-6xl flex flex-col items-center m-auto gap-12">
        <div className="flex flex-col md:flex-row items-center gap-8 text-center">
          <MessageSquareQuote size={84} className="stroke-1" />
          <h2 className="text-4xl md:text-5xl font-bold">Por que escolher o Copa 70?</h2>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8">
          <Image src={whyChoose} width={526} height={826} alt="Por que escolher o Copa 70" />
          <div className="flex flex-col gap-5 justify-between">
            {
              whyChooseOptions.map((option, index) => (
                <div key={index} className="flex items-center gap-5">
                  <CheckCircle size={48} className="text-[#50AB54] min-w-[48px]" />
                  <span className="text-xl md:text-2xl font-bold">{option}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}
