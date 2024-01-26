"use client";

import React, { PropsWithChildren } from "react";
import { Banner } from "../banner";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="min-w-[1200px]">
      <Banner />
      <div className="w-[80%] mx-auto my-0">{children}</div>
    </div>
  );
};
