import { useLayout } from "@/hooks/contexts";
import { useState } from "react";
import AirDrop from "../../../public/icons/airdrop.png";
import AppStoreMin from "../../../public/icons/appStoreMin.png";
import Clock from "../../../public/icons/clock.png";
import Desk from "../../../public/icons/desk.png";
import Docs from "../../../public/icons/docs.png";
import Downloads from "../../../public/icons/downloads.png";

export default function useFinder() {
  const { setIsFinderOpen } = useLayout();
  const [maximized, setMaximized] = useState(false);
  const [selectedDir, setSelectedDir] = useState("Documentos");

  const toggleMaximize = () => {
    setMaximized((prev) => !prev);
  };

  const links = [
    { label: "AirDrop", src: AirDrop },
    { label: "Recentes", src: Clock },
    { label: "Aplicativos", src: AppStoreMin },
    { label: "Mesa", src: Desk },
    { label: "Documentos", src: Docs },
    { label: "Downloads", src: Downloads },
  ];

  return {
    links,
    setIsFinderOpen,
    toggleMaximize,
    maximized,
    setSelectedDir,
    selectedDir,
  };
}
