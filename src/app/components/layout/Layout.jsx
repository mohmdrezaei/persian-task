import React from "react";
import Header from "../modules/Header";
import Footer from "../modules/Footer";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="bg-[#FCFCFC]">{children}</div>
      
    </>
  );
}

export default Layout;
