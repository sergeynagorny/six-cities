import { Switch, Route, Redirect } from "react-router-dom";

export function renderRoutes(
  routes: any,
  isAuthenticated: boolean,
  extraProps = {},
  switchProps = {}
) {
  return routes ? (
    <Switch {...switchProps}>
      {routes.map((route: any, i: any) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={(props) => {
            if (route.guard) {
              return route.guard.isAuthenticated === isAuthenticated ? (
                <Redirect to={route.guard.redirect} />
              ) : (
                <route.component
                  {...props}
                  {...extraProps}
                  isAuthenticated
                  route={route}
                />
              );
            }
            return (
              <route.component
                {...props}
                {...extraProps}
                isAuthenticated
                route={route}
              />
            );
          }}
        />
      ))}
    </Switch>
  ) : null;
}