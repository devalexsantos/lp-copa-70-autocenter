import Image from 'next/image';
import premiumQualityLogo from '../../public/images/premium-quality-logo.png';
import { CtaButton } from './CtaButton';

export function About() {
  return (
    <div className="w-full px-6 py-20 bg-[url('/images/about.png')] bg-no-repeat bg-cover">
      <div className="w-full flex flex-col gap-6 items-center max-w-6xl text-center text-white m-auto">
        <h2 className="text-4xl font-bold text-center">Quem somos</h2>
        <Image src={premiumQualityLogo} width={373} height={278} alt="Premium Quality Logo" />
        <p className="text-2xl font-bold leading-10 max-w-4xl">
          Referência no ramo automotivo há 53 anos, com três dos maiores Auto Centers do interior da Bahia, o Grupo Copa 70 é uma empresa familiar, que está à frente de 12 Postos de Combustíveis, nas principais Rodovias e agora, a mais nova Oficina, no Shopping da Bahia.
        </p>
        <div className="w-full max-w-xl">
          <CtaButton text="AGENDE UMA VISITA" />
        </div>
      </div>
    </div>
  )
}
