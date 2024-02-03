import Finder from "@/components/finder/finder";
import { createContext, useMemo, useState } from "react";
import { LayoutProviderType, LayoutStateType } from "./types";

export const LayoutStateCtx = createContext<LayoutStateType>(
  {} as LayoutStateType
);

const LayoutProvider = ({ children }: LayoutProviderType) => {
  const [isFinderOpen, setIsFinderOpen] = useState(false);

  const layoutProviderValues: LayoutStateType = useMemo(
    () => ({
      isFinderOpen,
      setIsFinderOpen,
    }),
    [isFinderOpen, setIsFinderOpen]
  );

  return (
    <LayoutStateCtx.Provider value={layoutProviderValues}>
      {isFinderOpen && <Finder />}
      {children}
    </LayoutStateCtx.Provider>
  );
};

export { LayoutProvider };
