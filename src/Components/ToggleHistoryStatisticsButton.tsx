import './ToggleHistoryViewButton.scss';

import React, { useEffect, useState } from 'react';
import { FaHistory } from 'react-icons/fa';
import { loadSettings, saveSettings } from '../utils/misc';

export const ToggleHistoryStatisticsButton = ({ onToggleHistoryStatistics }: any) => {
  const [showHistoricBadges, setShowHistoricBadges] = useState(loadSettings().showHistoricBadges);
  useEffect(() => {
    onToggleHistoryStatistics(showHistoricBadges);
    saveSettings({
      ...loadSettings(),
      showHistoricBadges,
    });
  }, [showHistoricBadges]);
  return (
    <button
      className="toggle-history-view-button"
      title={!showHistoricBadges ? 'Show history instance statistics' : 'Hide history instance statistics'}
      aria-label={!showHistoricBadges ? 'Show history instance statistics' : 'Hide history instance statistics'}
      onClick={() => setShowHistoricBadges(!showHistoricBadges)}
    >
      <FaHistory style={{ opacity: !showHistoricBadges ? '0.33' : '1.0', fontSize: '133%' }} />
    </button>
  );
};
