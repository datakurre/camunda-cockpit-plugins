import React from 'react';

interface Props {}

const Container: React.FC<React.PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className="ctn-fixed-view">
      <div className="ctn-content-container">{children}</div>
    </div>
  );
};

export default Container;
