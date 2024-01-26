import { Button } from '@workspace/ui-components';
import React, { PropsWithChildren } from 'react';
import chatDemoImg from "~/src/assets/imgs/chat-demo.jpg";

const Demonstration: React.FC<PropsWithChildren> = ({ children }) => {
  return <p className="ml-[3%] text-base">{children}</p>;
};

const ChatApplication: React.FC = () => {
  const handleClick = () => {
    location.href = '/chat/client';
  };

  return (
    <div className="text-2xl leading-[2.5]">
      <li>Real Time</li>
      <Demonstration>
        Connect with each other in real time with websocket.
      </Demonstration>
      <li>RWD AND SPA</li>
      <Demonstration>
        Implement SPA with Vue.js. In addition, I chose to use Tailwind to
        simplify the design and the implementation of RWD.
      </Demonstration>
      <li>Transport quick</li>
      <Demonstration>
        JSON was used to be the most common data format for communication. But 
        consider that it is not the most efficient one. I chose to use protobuf
        to make transport faster, more efficient and more reliable.
      </Demonstration>
      <li>Authentication</li>
      <Demonstration>
        For authentication, I chose to integrate with AWS cognito service which
        integrated multiple authentication methods that helped people to deal with
        the complex authentication process. 
      </Demonstration>
      <div className="h-[100px]">
        <Button
          customClassName="flex justify-center items-center mt-4"
          onClick={handleClick}
        >
          Try it now
        </Button>

        <img src={chatDemoImg} />
      </div>
    </div>
  );
};

export default ChatApplication;
