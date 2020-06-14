import React from "react";
import Dashboard from "../pages/Dashboard";

import { Switch, Route } from "react-router-dom";

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/">
      <Dashboard />
    </Route>
  </Switch>
);

export default AppRoutes;
