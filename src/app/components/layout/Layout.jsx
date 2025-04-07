import React from "react";
import Header from "../modules/Header";
import Footer from "../modules/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      
    </>
  );
}

export default Layout;
