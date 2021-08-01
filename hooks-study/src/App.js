import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HookStudy from "./routes/HookStudy";
import ReduxStudy from "./routes/ReduxStudy";
import MobxStudy from "./routes/MobxStudy";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path="/HookStudy" component={HookStudy} />
        <Route path="/ReduxStudy" component={ReduxStudy} />
        <Route path="/MobxStudy" component={MobxStudy} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
