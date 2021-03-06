import React from "react";

import NavBar from "./Navigation";
import Footer from "./Footer.js";

const Layout = props => {
  return (
    <div className="">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
