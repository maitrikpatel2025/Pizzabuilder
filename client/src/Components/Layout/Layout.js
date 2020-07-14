import React from "react";

import Aux from "../../utility/Aux";
import "./Layout.css"

const Layout = (props) => {
  return (
    <Aux>
      <div className="Layout">
        topnav, sidenav ,backdrop
        <main className="Content">{props.children}</main>
      </div>
    </Aux>
  );
};

export default Layout;
