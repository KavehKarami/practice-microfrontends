import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider } from "@material-ui/core";
import Pricing from "./components/Pricing";
import Landing from "./components/Landing";

export default function App() {
  return (
    <StylesProvider>
      <BrowserRouter>
        <Switch>
          <Route component={Pricing} path="/pricing" exact />
          <Route component={Landing} path="/" />
        </Switch>
      </BrowserRouter>
    </StylesProvider>
  );
}
