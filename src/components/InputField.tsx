'use client';

import React from 'react';
import { Button } from '@workspace/ui-components';

export const InputField = () => {
  return (
    <div>
      <input type="text" />
      <div className="w-[120px] h-[100px]">
        <Button>Send</Button>
      </div>
    </div>
  );
};
