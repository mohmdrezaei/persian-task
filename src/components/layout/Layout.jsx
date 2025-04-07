import React from "react";
import Header from "@/modules/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="">{children}</div>
      
    </>
  );
}

export default Layout;
