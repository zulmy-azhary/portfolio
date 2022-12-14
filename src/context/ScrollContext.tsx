import React, { createContext, useContext, useEffect, useState } from "react";
import { useToggle } from "@context";
import type { Dispatcher } from "@types";

interface ScrollCtx {
  scroll: boolean;
  setScroll: Dispatcher<boolean>;
}

const ScrollContext = createContext<ScrollCtx>({} as ScrollCtx);
export const useScroll = (): ScrollCtx => useContext(ScrollContext);

const ScrollProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [scroll, setScroll] = useState<boolean>(false);
  const { setOpen } = useToggle();

  const scrollHandler = (): void => {
    window.scrollY && setOpen(false);
    window.scrollY >= 200 ? setScroll(true) : setScroll(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  });

  return (
    <ScrollContext.Provider value={{ scroll, setScroll }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;
