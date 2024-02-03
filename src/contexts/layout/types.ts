import { Dispatch, ReactNode, SetStateAction } from "react";

type LayoutProviderType = {
  children: ReactNode;
};

type LayoutStateType = {
  setIsFinderOpen: Dispatch<SetStateAction<boolean>>;
  isFinderOpen: boolean;
};

export type { LayoutProviderType, LayoutStateType };
