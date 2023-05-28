import React from 'react';

import { API } from '../types';
import APIContext from './APIContext';

interface Props {
  version: string;
  api: API;
}

const Page: React.FC<React.PropsWithChildren<Props>> = ({ version, api, children }) => {
  return (
    <APIContext.Provider value={api}>
      <div
        className="ctn-main"
        style={
          version.match(/^7\.14.*/)
            ? {}
            : {
                top: '0px',
                bottom: '0px',
              }
        }
      >
        {children}
      </div>
    </APIContext.Provider>
  );
};

export default Page;
