import { LayoutStateCtx } from "@/contexts/layout/layout.context";
import { useContext } from "react";

const useLayout = () => {
  return useContext(LayoutStateCtx);
};

export { useLayout };
