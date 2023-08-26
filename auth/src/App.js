import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({ productionPrefix: "au" });

export default function App({ history }) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route component={Signin} path="/auth/signin" exact />
          <Route component={Signup} path="/auth/signup" exact />
        </Switch>
      </Router>
    </StylesProvider>
  );
}
