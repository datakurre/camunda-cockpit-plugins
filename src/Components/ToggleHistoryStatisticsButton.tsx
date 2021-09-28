import './ToggleHistoryViewButton.scss';

import React, { useEffect, useState } from 'react';
import { FaHistory } from 'react-icons/fa';

export const ToggleHistoryStatisticsButton = ({ onToggleHistoryStatistics }: any) => {
  const [showHistoryStatistics, setShowHistoryStatistics] = useState(false);
  useEffect(() => {
    onToggleHistoryStatistics(showHistoryStatistics);
  }, [showHistoryStatistics]);
  return (
    <button
      className="toggle-history-view-button"
      title={!showHistoryStatistics ? 'Show history instance statistics' : 'Hide history instance statistics'}
      aria-label={!showHistoryStatistics ? 'Show history instance statistics' : 'Hide history instance statistics'}
      onClick={() => setShowHistoryStatistics(!showHistoryStatistics)}
    >
      <FaHistory style={{ opacity: !showHistoryStatistics ? '0.33' : '1.0', fontSize: '133%' }} />
    </button>
  );
};
