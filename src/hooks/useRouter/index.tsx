import { useMemo, useRef } from "react";
import Core from "./core/router";
import { RouteTemplate } from "./core/router/typings";
import { createMemoHistory, History } from "./core/history";

interface Props {
  routes: RouteTemplate;
  loadingPage?: JSX.Element;
}

function useRouter(props: Props): [JSX.Element, History] {
  const { routes, loadingPage = <>loading...</> } = props;
  const history = useRef<History>(createMemoHistory());

  if (!routes) {
    throw Error("routes param is required!");
  }

  const outlet = useMemo(() => {
    const parsedRoutes = Core.parseTemplate(routes);
  
    return (
      <Core.Router loadingPage={loadingPage} history={history.current}>
        {parsedRoutes}
      </Core.Router>
    );
  }, []);

  return [outlet, history.current] as const;
}

export const Outlet = Core.Outlet;
export const withRouter = Core.withRouter;
export default useRouter;
