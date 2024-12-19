import React from "react";
import Redirect from "../Redirect";
import Route from "../Route";
import Switch from "../Switch";

export type useRoutesParams = {
  redirect?: string;
  path?: string;
  component?: React.ComponentType;
  children?: useRoutesParams[];
};

function useRoutesImpl(props: useRoutesParams) {
  if (props.redirect) {
    return <Redirect key={+new Date()} from={props.path} to={props.redirect} />;
  }

  return (
    <Route key={+new Date()} path={props.path} component={props.component!}>
      {(() => {
        if (props.children && props.children?.length > 0) {
          return (
            <Switch>
              {(props.children || []).map((child) => useRoutesImpl(child))}
            </Switch>
          );
        }
      })()}
    </Route>
  );
}

export default function useRoutes(props: useRoutesParams) {
  return useRoutesImpl(props);
}
