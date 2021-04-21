import './ToggleHistoryViewButton.scss';

import React, { useEffect, useState } from 'react';
import { FaHistory } from 'react-icons/fa';

export const ToggleHistoryViewButton = ({ onToggleHistoryView, initial }: any) => {
  const [showHistoryView, setShowHistoryView] = useState(!!initial);
  useEffect(() => {
    onToggleHistoryView(showHistoryView);
  }, [showHistoryView]);
  return (
    <button
      className="toggle-history-view-button"
      title={!showHistoryView ? 'Show history view' : 'Show runtime view'}
      aria-label={!showHistoryView ? 'Show history view' : 'Show runtime view'}
      onClick={() => setShowHistoryView(!showHistoryView)}
    >
      <FaHistory style={{ opacity: !showHistoryView ? '0.33' : '1.0', fontSize: '133%' }} />
    </button>
  );
};
