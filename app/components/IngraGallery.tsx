import Image from 'next/image'
import infraGallery01 from '../../public/images/infra-gallery-01.png'
import infraGallery02 from '../../public/images/infra-gallery-02.png'
import infraGallery03 from '../../public/images/infra-gallery-03.png'
import infraGallery04 from '../../public/images/infra-gallery-04.png'


export function InfraGallery() {
  return (
    <div className="w-full bg-[#FECB05] p-6 bg-[url('/images/infra-gallery-bg.png')] bg-no-repeat bg-cover">
      <div className="w-full px-6 py-10 flex flex-col gap-10">
        <h2 className="text-5xl text-[#013573] text-center font-bold">Conheça a nossa infraestrutura</h2>
        <div className="flex flex-col gap-6">
          <div className="w-full flex justify-center gap-6 flex-wrap">
            <Image src={infraGallery01} alt="Infraestrutura 01" width={801} height={454} className="w-full max-w-[801px] max-h-[454px]" />
            <Image src={infraGallery02} alt="Infraestrutura 02" width={386} height={454} className="w-full max-w-[386px] max-h-[454px]" />
          </div>
          <div className="w-full flex justify-center gap-6 flex-wrap">
            <Image src={infraGallery03} alt="Infraestrutura 04" width={386} height={454} className="w-full max-w-[386px] max-h-[454px]" />
            <Image src={infraGallery04} alt="Infraestrutura 03" width={801} height={454} className="w-full max-w-[801px] max-h-[454px]" />
          </div>
        </div>
      </div>
    </div>
  )
}
