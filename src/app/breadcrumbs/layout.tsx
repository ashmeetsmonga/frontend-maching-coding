import React from "react";

import "./breadcrumbs.css";
import Breadcrumbs from "./components/Breadcrumbs";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="breadcrumbs-wrapper">
      <Breadcrumbs />
      {children}
    </div>
  );
};

export default layout;
