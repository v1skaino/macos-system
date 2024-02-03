"use client";

import { ReactNode } from "react";
import { LayoutProvider } from "./layout/layout.context";

export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
  return <LayoutProvider>{children}</LayoutProvider>;
}
