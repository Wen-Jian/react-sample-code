"use client";
import * as React from "react";
import img from "~/src/assets/imgs/landing_top_bg.jpg";
import "~/src/assets/style/index.css";

export const App: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <div
        className="relative grid grid-rows-6 grid-cols-12 bg-cover w-full min-w-[900px] h-full"
        style={{ backgroundImage: `url(/${img})` }}
      >
        {children}
      </div>
    </>
  );
};

export default App;
