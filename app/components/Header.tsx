import Image from 'next/image';
import headerLogo from '../../public/images/header-logo.png';
import { CtaButton } from './CtaButton';

export function Header() {
  return (
    <header
      className="w-full flex flex-col gap-10 bg-[url('/images/header.png')] bg-center bg-no-repeat bg-cover items-center pb-40 px-8 border-b-2 border-white"
    >
      <Image
        src={headerLogo}
        alt="Header Logo"
        width={327}
        height={252}
        className="w-full max-w-[327px] max-h-[252px]"
      />

      <h1
        className="text-5xl md:text-6xl leading-14 md:leading-20 max-w-5xl text-center font-bold text-white text-outline-out-6"
      >
        Auto Center no Shopping da Bahia com preço de oficina de rua
      </h1>

      <div className="w-full max-w-[403px] m-auto">
        <CtaButton text="AGENDE UMA VISITA" />
      </div>
    </header>
  );
}

