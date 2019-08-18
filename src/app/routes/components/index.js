import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import asyncComponent from "../../../util/asyncComponent";

const Components = ({ match }) => (
  <div className="app-wrapper">
    <Switch>
      <Redirect exact from={`${match.url}/`} to={`${match.url}/alerts`} />
      <Route
        path={`${match.url}/alerts`}
        component={asyncComponent(() => import("./routes/alert"))}
      />
      <Route
        path={`${match.url}/appbar`}
        component={asyncComponent(() => import("./routes/appbar"))}
      />
      <Route
        path={`${match.url}/auto-complete`}
        component={asyncComponent(() => import("./routes/autoComplete"))}
      />
      <Route
        path={`${match.url}/avatars`}
        component={asyncComponent(() => import("./routes/avatar"))}
      />
      <Route
        path={`${match.url}/badges`}
        component={asyncComponent(() => import("./routes/badges"))}
      />
      <Route
        path={`${match.url}/bottom-navigation`}
        component={asyncComponent(() => import("./routes/bottomNavigation"))}
      />
      <Route
        path={`${match.url}/buttons`}
        component={asyncComponent(() => import("./routes/button"))}
      />
      <Route
        path={`${match.url}/button-group`}
        component={asyncComponent(() => import("./routes/buttonGroup"))}
      />
      <Route
        path={`${match.url}/breadcrumbs`}
        component={asyncComponent(() => import("./routes/breadcrumbs"))}
      />
      <Route
        path={`${match.url}/cards`}
        component={asyncComponent(() => import("./routes/cards"))}
      />

      <Route
        component={asyncComponent(() =>
          import("app/routes/extraPages/routes/404")
        )}
      />
    </Switch>
  </div>
);

export default Components;
