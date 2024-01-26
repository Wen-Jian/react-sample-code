'use client';

import { Button } from '@workspace/ui-components';
import React, { PropsWithChildren } from 'react';

const CustomParagraph: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className="ml-[3%]">{children}</p>;
};

const MyPlayground = () => {
  return (
    <>
      <div className="text-2xl mt-4">
        The current website was one of my work. This website was implemented
        with server side streaming rendering, which was driven by the new
        feature of react 18 and was made in practice by myself rather than using
        a framework like Nextjs.
      </div>

      <p className="mt-4 text-xl">
        <strong>Technique</strong>
      </p>
      <li className="text-lg">
        <strong>Backend</strong>
      </li>
      <CustomParagraph>
        Koa: routing request with Koa + Koa-route. For playground site, I used
        the method, renderToString, offer by react js to render first page. And
        then send the request for streaming rendering to the server.
      </CustomParagraph>

      <li className="text-lg">
        <strong>Frontend</strong>
      </li>
      <CustomParagraph>
        React: Implement SPA with React.js. And use Tailwind to simplify the
        design and the implementation of RWD.
      </CustomParagraph>

    <div className='h-[100px] mt-4'>
      <Button onClick={() => location.href = '/about'}>
        For more detail about me. Please contact me.
      </Button>
    </div>
    </>
  );
};

export default MyPlayground;
