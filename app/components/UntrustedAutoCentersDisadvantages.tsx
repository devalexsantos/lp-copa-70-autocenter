import { CircleX } from 'lucide-react';
import untrustedImage from '../../public/images/UntrustedOficines.png';
import Image from 'next/image';
import { CtaButton } from './CtaButton';

const disadvantages = [
  "Sem ou pouca garantia",
  "Risco de fraude em peças",
  "Sem segurança",
  "Falta de conforto",
  "Falta de transparência",
  "Sem ou pouca mão de obra qualificada"
]

export function UntrustedAutoCentersDisadvantages() {
  return (
    <div className="w-full bg-white px-6">
      <div className="w-full m-auto flex flex-col md:flex-row gap-8 md:gap-20 max-w-6xl my-20">
        <div className="flex flex-col gap-14 justify-between">
          <h2 className="text-4xl md:text-6xl text-[#013573] font-bold md:leading-20">Cansado das oficinas de rua?</h2>

          <div className="flex flex-col gap-3">
            {
              disadvantages.map((disadvantage, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CircleX size={28} className="min-w-[28px] text-[#D70000]" />
                  <span className="text-2xl">{disadvantage}</span>
                </div>
              ))
            }
          </div>

          <div className="h-full flex flex-col justify-end">
            <CtaButton text="TEMOS A SOLUÇÃO, CLIQUE AQUI!" textStyle='text-sm md:text-xl' />
          </div>
        </div>

        <Image src={untrustedImage} alt="Oficinais de rua" width={544} height={675} />
      </div>
    </div>
  )
}
