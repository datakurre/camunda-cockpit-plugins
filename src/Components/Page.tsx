import React from 'react';

import { API } from '../types';
import APIContext from './APIContext';

interface Props {
  api: API;
}

const Page: React.FC<Props> = ({ api, children }) => {
  return (
    <APIContext.Provider value={api}>
      <div className="ctn-main">{children}</div>;
    </APIContext.Provider>
  );
};

export default Page;
