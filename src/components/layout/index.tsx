import React from "react";
import Footer from "../footer";
import Header from "../header";

const Layout = (props: any) => {
  return (
    <div className="relative min-h-screen bg-slate-800 ">
      <Header />
      <div className=" min-h-screen">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
