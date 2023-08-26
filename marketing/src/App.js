import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

const generateClassName = createGenerateClassName({ productionPrefix: "ma" });

export default function App({ history }) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route component={Pricing} path="/pricing" exact />
          <Route component={Landing} path="/" exact />
        </Switch>
      </Router>
    </StylesProvider>
  );
}
