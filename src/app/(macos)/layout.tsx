import Toolbar from "@/components/toolbar/toolbar";
import { ReactNode } from "react";

export default function MacosLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <section
      className="flex flex-col h-screen w-screen bg-cover	bg-no-repeat bg-center"
      style={{ backgroundImage: `url(/background.jpg)` }}
    >
      <Toolbar />
      {children}
    </section>
  );
}
