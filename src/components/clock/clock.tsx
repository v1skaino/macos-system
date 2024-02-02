import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderTime = () => {
    const formattedTime = time.toLocaleString("pt-BR", {
      weekday: "short",
      day: "numeric",
      month: "short",
      hour: "2-digit",
      minute: "2-digit",
    });

    const capitalizedFirstLetterTime = formattedTime.replace(
      /(\w+)/g,
      (match) => match.charAt(0).toUpperCase() + match.slice(1)
    );

    const timeWithoutCommas = capitalizedFirstLetterTime.replace(/,/g, "");

    return timeWithoutCommas;
  };

  return <time className="text-white text-sm">{renderTime()}</time>;
}
