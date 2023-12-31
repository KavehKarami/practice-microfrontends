import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

const generateClassName = createGenerateClassName({ productionPrefix: "au" });

export default function App({ history, onSignIn }) {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <Switch>
          <Route path="/auth/signin" exact>
            <Signin onSignIn={onSignIn} />
          </Route>
          <Route path="/auth/signup" exact>
            <Signup onSignIn={onSignIn} />
          </Route>
        </Switch>
      </Router>
    </StylesProvider>
  );
}
