"use client";
import React, { PropsWithChildren } from "react";
import { Link } from "../Link";

type TextAlignCenterListProps = {
    href: string
}

const ListWithHover = ({ children }: PropsWithChildren) => {
    return (
        <li className="transition duration-300 ease-out hover:ease-in hover:bg-white h-full flex items-end min-w-[200px] hover:text-black">
            {children}
        </li>
    )
}

const TextAlignCenterLink: React.FC<PropsWithChildren & TextAlignCenterListProps> = ({children, href}) => {
    return (
        <ListWithHover>
            <Link textAlign="center" href={href}>{children}</Link>
          </ListWithHover>
    )
}

export const Banner: React.FC = () => {
  return (
    <div className="h-[200px] grid grid-rows-6 grid-cols-12 min-w-[1200px]">
      <div className="bg-gradient-to-l from-[#000000] to-[#ADADAD] w-full h-full col-start-2 col-end-12 row-start-2 row-end-5 opacity-80 relative">
        <ul className="flex absolute right-[10%] text-white text-4xl w-1/2 justify-between bottom-[5%] h-full items-end top-0">
          <ListWithHover>
            <TextAlignCenterLink href="/about">About Me</TextAlignCenterLink>
          </ListWithHover>
          <ListWithHover>
            <TextAlignCenterLink href="/work">Works</TextAlignCenterLink>
          </ListWithHover>
          <ListWithHover>
            <TextAlignCenterLink href="/blog">Blog</TextAlignCenterLink>
          </ListWithHover>
        </ul>
      </div>
    </div>
  );
};
