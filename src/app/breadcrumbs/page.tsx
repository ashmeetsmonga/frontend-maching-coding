import React from "react";
import Breadcrumbs from "./components/Breadcrumbs";

import "./breadcrumbs.css";
import Link from "next/link";

const page = () => {
  return (
    <div className="breadcrumbs-wrapper">
      Home
      <Link href="/breadcrumbs/products">Product List</Link>
      <Link href="/breadcrumbs/products/1">Product Details</Link>
    </div>
  );
};

export default page;
