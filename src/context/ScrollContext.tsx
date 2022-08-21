import { createContext, Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import { ToggleContext } from "./ToggleContext";
import type { Props } from "../utils/types";

interface ScrollCtx {
  scrollState: boolean;
  setScrollState: Dispatch<SetStateAction<boolean>>;
}

export const ScrollContext = createContext<ScrollCtx>({} as ScrollCtx);

const ScrollProvider = ({children}: Props): JSX.Element => {
  const [scrollState, setScrollState] = useState(false);
  const { setOpen } = useContext(ToggleContext);

  const scrollHandler = (): void => {
    window.scrollY && setOpen(false)
		window.scrollY >= 200 ? setScrollState(true) : setScrollState(false);
	}

	useEffect(() => {
		window.addEventListener("scroll", scrollHandler);
		return () => {
			window.removeEventListener("scroll", scrollHandler);
		}
  });
  
  return (
    <ScrollContext.Provider value={{ scrollState, setScrollState }}>
      {children}
    </ScrollContext.Provider>
  );
};

export default ScrollProvider;