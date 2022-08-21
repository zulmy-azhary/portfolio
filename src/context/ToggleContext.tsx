import { createContext, Dispatch, SetStateAction, useState } from 'react';
import type { Props } from "../utils/types"

interface ToggleCtx {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  isClosed?: () => void;
}

export const ToggleContext = createContext<ToggleCtx>({} as ToggleCtx);

const ToggleProvider = ({children}: Props): JSX.Element => {
  const [isOpen, setOpen] = useState(false);

  const isClosed = () => setOpen(false);

  return (
    <ToggleContext.Provider value={{ isOpen, setOpen, isClosed }}>
      {children}
    </ToggleContext.Provider>
  );
};

export default ToggleProvider;