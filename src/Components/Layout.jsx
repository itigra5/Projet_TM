import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import Header from "./Header";
import "./Layout.css";

function Layout() {
  const { pathname } = useLocation();

  // pages sans header / navbar
  const hideChrome = ["/welcome", "/connexion", "/inscription"].some((p) =>
    pathname.startsWith(p)
  );

  return (
    <>
      {!hideChrome && <Header />}
      <main className={hideChrome ? "no-chrome" : "with-chrome"}>
        <Outlet />
      </main>
      {!hideChrome && <NavBar />}
    </>
  );
}

export default Layout;