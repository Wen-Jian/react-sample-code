import React, { Suspense } from "react";
import App from "./components/App";
import { AboutMe } from "./components/AboutMe";

const Component = () => {
  return (
    <>
      <App>
        <AboutMe />
      </App>
    </>
  );
};

export default Component;
