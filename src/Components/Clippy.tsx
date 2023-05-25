import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { HiCheck, HiClipboardCopy } from 'react-icons/hi';

interface Props {
  value: any;
}

export const Clippy: React.FC<React.PropsWithChildren<Props>> = ({ value, children }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const [copied, setCopied] = useState(false);
  return (
    <span
      onMouseOver={() => {
        if (!mouseOver) {
          setMouseOver(true);
        }
      }}
      onMouseLeave={() => {
        setMouseOver(false);
        setCopied(false);
      }}
      style={{ display: 'flex', alignItems: 'center' }}
    >
      {children}
      {mouseOver ? (
        <CopyToClipboard text={value} onCopy={() => setCopied(true)}>
          <a
            href="#"
            onClick={e => {
              e.preventDefault();
            }}
            style={{ fontSize: '120%', paddingLeft: '0.2em' }}
          >
            {copied ? (
              <HiCheck style={{ color: 'green', display: 'flex' }} />
            ) : (
              <HiClipboardCopy style={{ display: 'flex' }} />
            )}
          </a>
        </CopyToClipboard>
      ) : (
        <span style={{ fontSize: '120%', width: '1.2em' }} />
      )}
    </span>
  );
};
