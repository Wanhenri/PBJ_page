import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";

export default function Routes() {
  const paths = [{ path: "/", component: Home }];
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {paths.map(({ path, component }) => (
          <Route key={path} path={path} component={component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
}
