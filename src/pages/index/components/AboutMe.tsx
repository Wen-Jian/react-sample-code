"use client";

import React from "react";
import { Avatar, Button, Card } from "@workspace/ui-components";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useRouter } from "~/src/thirdParty/framework/router";
import avatarIcon from "~/src/assets/imgs/avatar.png";

export const AboutMe = () => {
  const router = useRouter()
  const handleClick = () => {
    router.navigate("/about")
  }

  return (
    <>
      <div className="lg:col-start-9 lg:col-end-11 row-start-1 row-end-3 col-start-6 col-span-2 flex justify-center items-center z-10">
        <Avatar src={avatarIcon} />
      </div>
      <div className="lg:col-start-8 lg:col-span-4 col-start-2 col-span-10 row-start-2 row-end-4 inline-block min-h-[765px] lg:min-h-[320px]">
        <Card>
        <div className="lg:p-[4%] lg:mt-[4%] lg:text-lg text-5xl p-[6%] leading-normal">
              <small>
                I am a fullstack web engineer. Welcome to my place. 
                I have couple years development experiences.
              </small>
              <br />
              <small><strong>Skills</strong></small>
              <p>Backend:</p>
              <small>Golang, Ruby and Node.js</small>
              <br />
              <p>Frontend:</p>
              <small>React/Nextjs and Webpack</small>
            </div>
          <div className="flex justify-center items-center z-10 lg:text-lg text-5xl">
            <Button onClick={handleClick} customClassName="lg:h-[50px] h-[100px]">More</Button>
          </div>
        </Card>
      </div>
    </>
  );
};
