import { createContext } from "react";

export const Context = createContext<{
  open: string[];
}>({
  open: [],
});
