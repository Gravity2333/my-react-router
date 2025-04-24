import { createContext, useContext } from "react";
import { RouterContext } from "../Router";

export type OutletContextTypes = {
  /** 传递给通过Outlet渲染的组件 */
  context?: any;
};

const OutletContext = createContext<OutletContextTypes>({ context: null });

export default function useOutlet({ context }: OutletContextTypes) {
  const { outlet,location } = useContext(RouterContext);

  return (
    <OutletContext.Provider key={+new Date()} value={{ context }}>
     {outlet}
    </OutletContext.Provider>
  );
}

export function useOutletContext(): any {
  return useContext(OutletContext)?.context;
}
