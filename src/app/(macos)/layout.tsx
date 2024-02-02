import { ReactNode } from "react";

export default function MacosLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <section
      className="h-screen w-screen bg-cover	bg-no-repeat bg-center"
      style={{ backgroundImage: `url(/background.jpg)` }}
    >
      {children}
    </section>
  );
}
