import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import Ray from "../../../public/icons/ray.png";

export default function Battery() {
  const [battery, setBattery] = useState(100);
  const [isCharging, setIsCharging] = useState(false);

  const getBattery = useCallback(async () => {
    try {
      //@ts-ignore
      const battery = await navigator.getBattery();
      setBattery(battery.level * 100);
      setIsCharging(battery.charging);
    } catch {
      setIsCharging(false);
      setBattery(50);
    }
  }, []);

  useEffect(() => {
    getBattery();

    const intervalId = setInterval(() => {
      getBattery();
    }, 60000);

    return () => clearInterval(intervalId);
  }, [getBattery]);

  return (
    <div className="flex gap-[0.4px] items-center">
      <div className="relative flex w-[24px] p-[1.2px] bg-transparent border-[1px] border-gray-600 rounded-[4px] h-[12px] overflow-hidden">
        <div
          className="bg-white h-full rounded-[2px]"
          style={{ width: `${battery}%` }}
        ></div>
      </div>
      {isCharging && (
        <Image
          src={Ray}
          alt="Ray"
          width={20}
          height={14}
          className="absolute justify-self-center ml-[2px]"
        />
      )}
      <div className="w-[2px] h-[4px] bg-gray-600 rounded-r-full" />
    </div>
  );
}
