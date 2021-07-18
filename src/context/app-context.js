import { createContext } from "react";
export const appContext = createContext({
  modalState: false,
  setModalState: () => {},
});
