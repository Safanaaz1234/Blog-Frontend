import React from "react";
import TopBar from "./topbar/TopBar";
import Header from "./header/Header";
import Home from "./pages/home/Home";
export default function MyApp() {
  return (
    <div>
      <TopBar />
      <Header />
      <Home />
    </div>
  );
}
