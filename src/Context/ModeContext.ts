// ModeContext.tsx
import { createContext } from "react";

export type ModeContextType = {
  mode: "light" | "dark";
  setMode: React.Dispatch<React.SetStateAction<"light" | "dark">>;
};

export const ModeContext = createContext<ModeContextType>({
  mode: "light",
  setMode: () => {}, // no-op function
});
