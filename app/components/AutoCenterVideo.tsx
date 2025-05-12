import { CtaButton } from "./CtaButton";
import { VideoIframe } from "./VideoIframe";

export function AutoCenterVideo() {
  return (
    <div className="w-full flex flex-col gap-10 items-center px-6 py-10">
      <h2 className="w-full max-w-4xl text-center text-3xl text-white font-bold">Veja no vídeo abaixo porque conseguimos unir conforto, segurança e qualidade com preço de oficina de rua!</h2>
      <div className="w-full max-w-7xl h-[400px] md:h-[764px]">
        <VideoIframe url="https://www.youtube.com/watch?v=m0hkotp13-8&t=1s" />
      </div>
      <div className="w-full max-w-lg">
        <CtaButton text="AGENDE SUA AVALIAÇÃO" textStyle="text-lg md:text-2xl" />
      </div>
    </div>
  )
}
