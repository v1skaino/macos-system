"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import Draggable from "react-draggable";
import WindowActions from "../windowActions/windowActions";
import useFinder from "./useFinder";

export default function Finder() {
  const { links, setIsFinderOpen, toggleMaximize, maximized } = useFinder();

  return (
    <Draggable
      disabled={maximized}
      handle=".drag"
      defaultClassName="absolute z-10 top-[30%] left-[30%]"
    >
      <div
        data-maximized={maximized}
        className="flex border-[1px] border-gray-600 rounded-xl overflow-hidden data-[maximized=true]:h-screen data-[maximized=true]:w-screen data-[maximized=true]:top-0 data-[maximized=true]:left-0 data-[maximized=true]:rounded-none data-[maximized=true]:!translate-x-0 data-[maximized=true]:!translate-y-0"
      >
        <section className="bg-black/[.4] backdrop-blur-[10px] p-3 w-[180px]">
          <WindowActions
            className="ml-1"
            close={() => setIsFinderOpen(false)}
            maximize={toggleMaximize}
          />
          <span className="text-white opacity-50 text-xs">Favoritos</span>
          {links?.map((link) => {
            return (
              <div key={link.label} className="flex gap-2 p-[2px]">
                <Image src={link.src} alt={link.label} width={20} height={20} />
                <span className="text-white text-sm">{link.label}</span>
              </div>
            );
          })}
        </section>
        <section className="flex flex-col w-full">
          <section className="drag bg-windowHead flex items-center">
            <ChevronLeft className="text-gray-700" />
            <ChevronRight className="text-gray-700" />
            <span className="text-white font-medium px-2 py-3">Documentos</span>
          </section>
          <section className="overflow-auto w-full h-full bg-windowBody min-w-[400px] min-h-[320px] p-4">
            Conteúdo da janela
          </section>
        </section>
      </div>
    </Draggable>
  );
}
