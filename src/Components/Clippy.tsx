import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import { HiCheck, HiClipboardCopy } from 'react-icons/hi';

interface Props {
  value: string;
}

export const Clippy: React.FC<Props> = ({ value, children }) => {
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
          >
            {' '}
            {copied ? (
              <HiCheck style={{ fontSize: '120%', color: 'green', display: 'flex' }} />
            ) : (
              <HiClipboardCopy style={{ fontSize: '120%', display: 'flex' }} />
            )}
          </a>
        </CopyToClipboard>
      ) : null}
    </span>
  );
};
