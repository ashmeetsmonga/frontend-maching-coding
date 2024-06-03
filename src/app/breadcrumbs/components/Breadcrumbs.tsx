"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Breadcrumbs = () => {
  const pathname = usePathname()
    .split("/")
    .filter((path) => path);

  let breadcrumbsPath = "";

  return (
    <div>
      {pathname.map((path, idx) => {
        breadcrumbsPath += "/" + path;
        if (idx === pathname.length - 1) return <span key={idx}>{path}</span>;
        else
          return (
            <span key={idx}>
              <Link href={breadcrumbsPath}>{path}/</Link>
            </span>
          );
      })}
    </div>
  );
};

export default Breadcrumbs;
