import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import { WhatsIcon } from "../../../public/whats";

export function Header() {
  return (
    <div className="relative flex h-16 w-full items-center justify-between bg-[#171717] px-4 xl:h-20 2xl:h-28 2xl:px-8">
      <div
        onClick={() =>
          window.open("https://imersaopowerbusiness.com.br/", "_blank")
        }
        className="flex cursor-pointer items-center gap-2"
      >
        <ChevronLeft />
        <span className="font-manrope hidden text-xl font-semibold xl:block">
          Site Institucional
        </span>
      </div>
      <Image
        src="/logo-white.svg"
        alt=""
        width={1000}
        height={500}
        className="absolute left-1/2 top-1/2 h-12 w-max -translate-x-1/2 -translate-y-1/2 object-contain xl:h-16"
      />
      <button
        onClick={() =>
          window.open(
            `https://api.whatsapp.com/send?phone=+554197819114&text=Ol%C3%A1+Eu+venho+atrav%C3%A9s+do+site`,
            "_blank",
          )
        }
        className="font-manrope flex cursor-pointer items-center gap-2 rounded-lg border border-transparent bg-[#99D420] px-2 py-2 text-sm font-bold text-black transition duration-200 hover:border-[#74A80A] hover:bg-[#74A80A] xl:px-8 xl:text-base"
      >
        Fale Conosco
        <WhatsIcon />
      </button>
    </div>
  );
}
