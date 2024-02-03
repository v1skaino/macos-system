"use client";
import Image from "next/image";
import AppStore from "../../../public/icons/appstore.png";
import Calendar from "../../../public/icons/calendar.png";
import Chrome from "../../../public/icons/chrome.png";
import Finder from "../../../public/icons/finder.png";
import Launchpad from "../../../public/icons/launchpad.png";
import Mail from "../../../public/icons/mail.png";
import Messages from "../../../public/icons/messages.png";
import Notes from "../../../public/icons/notes.png";
import Reminders from "../../../public/icons/reminders.png";
import Safari from "../../../public/icons/safari.png";
import Settings from "../../../public/icons/settings.webp";
import Terminal from "../../../public/icons/terminal.png";
import Trash from "../../../public/icons/trash.png";
import Vscode from "../../../public/icons/vscode.png";
import { Tooltip } from "../tooltip/tooltip";

export default function Dock() {
  const icons = [
    { icon: Finder, name: "Finder" },
    { icon: Launchpad, name: "Launchpad" },
    { icon: Safari, name: "Safari" },
    { icon: Messages, name: "Messages" },
    { icon: Mail, name: "Mail" },
    { icon: Calendar, name: "Calendar" },
    { icon: Reminders, name: "Reminders" },
    { icon: Notes, name: "Notes" },
    { icon: AppStore, name: "AppStore" },
    { icon: Settings, name: "Settings" },
    { icon: Chrome, name: "Google Chrome" },
    { icon: Terminal, name: "Terminal" },
    { icon: Vscode, name: "Visual Studio Code" },
    { icon: Trash, name: "Trash" },
  ];

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
