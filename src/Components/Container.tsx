import React from 'react';

const Container: React.FC = ({ children }) => {
  return (
    <div className="ctn-fixed-view">
      <div className="ctn-content-container">{children}</div>
    </div>
  );
};

export default Container;
