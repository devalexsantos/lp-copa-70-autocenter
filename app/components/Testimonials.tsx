import Image from 'next/image'
import fiveStars from '../../public/images/five-stars.png'
import testimonial01 from '../../public/images/testimonial-01.png'
import testimonial02 from '../../public/images/testimonial-02.png'
import testimonial03 from '../../public/images/testimonial-03.png'

export function Testimonials() {
  return (
    <div className="w-full bg-white px-6 py-10">
      <div className="flex flex-col gap-16 max-w-6xl m-auto">
        <div className="flex flex-col items-center gap-3">
          <Image src={fiveStars} width={276} height={57} alt="05 Estrelas" />
          <h2 className="text-4xl font-bold text-[#013573] text-center">Avaliação 5 estrelas!</h2>

          <div className="mt-8 md:mt-14 flex flex-col gap-8">
            <Image src={testimonial01} width={1303} height={295} alt="Depoimento 1" className="w-full" />
            <Image src={testimonial02} width={1303} height={295} alt="Depoimento 1" className="w-full" />
            <Image src={testimonial03} width={1303} height={295} alt="Depoimento 1" className="w-full" />
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <h3 className="text-3xl italic text-[#013573] text-center">Depoimento de nosso Cliente</h3>
          <div className="w-full max-w-7xl h-[400px] md:h-[764px]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/VJwuqegRVp0?si=dTe1ghEleVLUh5VZ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen>
            </iframe>
          </div>
        </div>
      </div>
    </div>
  )
}
