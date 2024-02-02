"use client";
import Image from "next/image";
import Apple from "../../../public/icons/apple.png";
import Bluetooth from "../../../public/icons/bluetooth.png";
import Search from "../../../public/icons/search.png";
import Sound from "../../../public/icons/sound.png";
import Wifi from "../../../public/icons/wifi.png";
import Battery from "../battery/battery";
import Clock from "../clock/clock";

export default function Toolbar() {
  return (
    <div className="flex px-2 py-1 justify-between items-center w-full bg-white/[.06] backdrop-blur-[10px]">
      <section className="flex gap-3">
        <Image src={Apple} alt="Apple" width={20} height={20} />
      </section>
      <section className="flex items-center gap-3">
        <Image src={Bluetooth} alt="Apple" width={20} height={20} />
        <Image src={Sound} alt="Apple" width={20} height={20} />
        <Battery />
        <Image src={Wifi} alt="Wifi" width={20} height={20} />
        <Image src={Search} alt="Apple" width={20} height={20} />
        <Clock />
      </section>
    </div>
  );
}
