import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import HookStudy from "./routes/HookStudy";
import ReduxStudy from "./routes/ReduxStudy";
import MobxStudy from "./routes/MobxStudy";
import Navigation from "./components/Navigation";
import HookReduxStudy from "./routes/HookReduxStudy";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/HookStudy/*" element={<HookStudy />} />
        <Route path="/ReduxStudy/*" element={<ReduxStudy />} />
        <Route path="/MobxStudy/*" element={<MobxStudy />} />
        <Route path="/HookReduxStudy/*" element={<HookReduxStudy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
