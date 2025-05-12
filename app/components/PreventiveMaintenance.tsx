import preventiveMaintenance from '../../public/images/preventive-maintenance.png';
import Image from 'next/image';
import { CtaButton } from './CtaButton';

export function PreventiveMaintenance() {
  return (
    <div className="w-full bg-white px-6">
      <div className="w-full m-auto flex flex-col md:flex-row gap-8 md:gap-20 max-w-6xl my-20">
        <div className="flex flex-col gap-8 justify-between">
          <h2 className="text-4xl md:text-6xl text-[#013573] font-bold md:leading-18">Manutenção Preventiva</h2>
          <h3 className="text-3xl text-[#013573]">Cuide do seu carro, evite problemas e economize muito dinheiro!</h3>

          <p className="text-xl">
            A manutenção preventiva garante segurança, economia e desempenho. Evite gastos inesperados, reduza o consumo e mantenha seu carro sempre pronto para qualquer viagem. Revisando a cada 5 mil km, você economiza até 30% na manutenção.
          </p>

          <p className="text-xl">
            No Auto Center Copa 70, identificamos e resolvemos problemas antes que virem dores de cabeça!
          </p>
          <div className="h-full flex flex-col justify-end">
            <CtaButton text="FAÇA UMA AVALIAÇÃO" textStyle='text-lg md:text-xl' />
          </div>
        </div>

        <Image src={preventiveMaintenance} alt="Oficinais de rua" width={544} height={675} />
      </div>
    </div>
  )
}
