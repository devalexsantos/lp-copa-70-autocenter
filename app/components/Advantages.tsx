import { CircleCheck } from "lucide-react";

const advantages = [
  "Revisão geral",
  "Troca de Óleo",
  "Freios",
  "Filtros",
  "Suspensão",
  "Alinhamento",
  "Balanceamento",
  "Correias",
  "Injeção Eletrônica",
  "Descarbonização de Carros Diesel",
  "Proteção de Amarok"
]

export function Advantages() {
  return (
    <div className="w-full py-20 bg-[url('/images/advantages-brackground.png')] bg-no-repeat bg-cover">
      <div className="w-full m-auto flex flex-col gap-12 items-center">
        <div className="px-6 max-w-6xl flex flex-col gap-4">
          <span className="text-center text-4xl md:text-6xl text-white font-bold text-nowrap">Traga seu carro que o</span>
          <span className="text-center text-4xl md:text-6xl text-[#FECB05] font-bold">Copa 70 resolve!</span>
        </div>

        <div className="w-full bg-[#013573] px-6 py-8">
          {
            <div className="flex gap-8 flex-wrap justify-center items-center opacity-100 max-w-6xl m-auto">
              {
                advantages.map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CircleCheck size={28} className="min-w-[28px] text-[#50AB54]" />
                    <span className="text-3xl text-white font-medium text-center">{advantage}</span>
                  </div>
                ))
              }
            </div>
          }
        </div>
      </div>
    </div>
  )
}
