import { DoorOpen, Gem, HeartHandshake, Star } from "lucide-react";

export function DifferentialRuler() {
  return (
    <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 justify-between text-white px-6 py-10 text-center m-auto">
      <div className="flex flex-col items-center gap-5">
        <HeartHandshake size={77} className="text-[#FECB05] stroke-1" />
        <span className="text-2xl font-bold">Segurança, Praticidade e Conforto</span>
      </div>

      <div className="flex flex-col items-center gap-5">
        <Gem size={77} className="text-[#FECB05] stroke-1" />
        <span className="text-2xl font-bold text-nowrap">Preço Justo</span>
      </div>

      <div className="flex flex-col items-center gap-5">
        <DoorOpen size={77} className="text-[#FECB05] stroke-1" />
        <span className="text-2xl font-bold">Único aberto até às 22h</span>
      </div>

      <div className="flex flex-col items-center gap-5">
        <Star size={77} className="text-[#FECB05] stroke-1" />
        <span className="text-2xl font-bold">Avaliação 05 estrelas no Google</span>
      </div>
    </div>
  )
}
