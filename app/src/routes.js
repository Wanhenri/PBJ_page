import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Ajuda from "./pages/Ajuda";
import Newsletter from "./pages/Newsletter";
import Agenda from './pages/Agenda'

export default function Routes() {
  const routes = [
    { 
      name: "home",
      exact: true,
      path: "/", 
      component: Home 
    },
    { 
      name: "ajuda",
      path: "/ajuda", 
      component: Ajuda 
    },
    { 
      name: "Newsletter",
      path: "/newsletter", 
      component: Newsletter 
    },
    { 
      name: "Agenda",
      path: "/agenda", 
      component: Agenda
    },
];
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        {routes.map(route => (
          <Route key={route.name} {...route}></Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}
