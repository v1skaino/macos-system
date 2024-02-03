"use client";
import Image from "next/image";
import { Tooltip } from "../tooltip/tooltip";
import useDock from "./useDock";

export default function Dock() {
  const { icons } = useDock();

  return (
    <div className="flex justify-center w-full py-2">
      <section className="flex gap-2 justify-between bg-white/[.09] backdrop-blur-[10px] w-auto rounded-xl p-1">
        {icons?.map(({ icon, name }) => {
          return (
            <Image
              key={name}
              src={icon}
              alt={name}
              width={45}
              height={45}
              className="rounded-2xl h-[45px]"
              data-tooltip-id="dock-tooltip"
              data-tooltip-content={name}
            />
          );
        })}
        <Tooltip id="dock-tooltip" />
      </section>
    </div>
  );
}
