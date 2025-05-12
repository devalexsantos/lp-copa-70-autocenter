import Image from 'next/image'
import megaPromotionSeal from '../../public/images/mega-promotion-seal.png'
import { CtaButton } from './CtaButton'

export function MegaPromotion() {
  return (
    <div className="w-full bg-[#FECB05] p-6 bg-[url('/images/mega-promotion-bg.png')] bg-no-repeat bg-cover">
      <div className="w-full flex flex-col max-w-6xl m-auto items-center">
        <Image src={megaPromotionSeal} width={233} height={184} alt="Selo Mega Promoção" />

        <h2 className="w-full max-w-4xl text-3xl md:text-4xl text-[#013573] leading-10 md:leading-14 text-center font-bold">
          Na contratação de qualquer serviço ou produto, ganhe a avaliação de <strong className="text-[#DB0000]">39 itens</strong> do seu carro!
        </h2>

        <div className="w-full max-w-xl mt-8">
          <CtaButton text="CLIQUE AQUI E SAIBA MAIS" textStyle="text-lg md:text-2xl" />
        </div>
      </div>
    </div>
  )
}
