"use client"

import React, { PropsWithChildren } from "react";
import { Link as LinkUi, LinkProps } from "@workspace/ui-components";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { useRouter } from "~/src/thirdParty/framework/router";



export const Link: React.FC<PropsWithChildren & LinkProps> = ({href, children, textAlign}) => {
    const router = useRouter();
  const handleClick = () => {
    router.navigate(href);
  };

  return (
      <LinkUi href={href} textAlign={textAlign}>
        <div onClick={handleClick}>
            {children}
        </div>
      </LinkUi>
  )
}