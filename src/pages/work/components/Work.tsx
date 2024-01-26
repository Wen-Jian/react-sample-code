'use client';

import React, { useMemo, useState } from 'react';
import { Layout } from '../../../components/layout';
import Tabs from '../../../components/tabs/Tabs';
import ChatAppWorkComponent from './ChatApplication';
import MyPlaygroundApplication from './MyPlaygroundApplication';
// const ChatAppWorkComponent = React.lazy(() => import('./ChatApplication'));
// const MyPlaygroundWorkComponent = React.lazy(() => import('./MyPlaygroundApplication'));

const WORK_NAME_MY_PLAYGROUND = 'my playground';
const WORK_NAME_CHAT_APP = 'chat application';
const WORK_NAME_IMG_INPAINTING_APP_NAME = 'image inpainting';

export const Work = () => {
  const [selectedItemName, setSelectedItemName] =
    useState<string>(WORK_NAME_MY_PLAYGROUND);

  const handleClick = (name: string) => {
    setSelectedItemName(name);
  };

  const items = [
    {
      name: WORK_NAME_MY_PLAYGROUND,
      onClick: handleClick,
    },
    {
      name: WORK_NAME_CHAT_APP,
      onClick: handleClick,
    },
    {
      name: WORK_NAME_IMG_INPAINTING_APP_NAME,
      onClick: handleClick,
    },
  ];

  const Component = useMemo(() => {
    switch (selectedItemName) {
      case WORK_NAME_CHAT_APP:
        return ChatAppWorkComponent;
      case WORK_NAME_IMG_INPAINTING_APP_NAME:
        return () => <div>To be implemented</div>;
      default:
        return MyPlaygroundApplication
    }
  }, [selectedItemName]);

  return (
    <Layout>
      <Tabs items={items} activeItem={selectedItemName} />
      <Component />
    </Layout>
  );
};
