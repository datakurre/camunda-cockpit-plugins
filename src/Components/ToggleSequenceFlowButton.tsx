import './ToggleSequenceFlowButton.scss';

import React, { useEffect, useState } from 'react';
import { GiStrikingArrows } from 'react-icons/gi';

export const ToggleSequenceFlowButton = ({ onToggleSequenceFlow }: any) => {
  const [showSequenceFlow, setShowSequenceFlow] = useState(false);
  useEffect(() => {
    onToggleSequenceFlow(showSequenceFlow);
  }, [showSequenceFlow]);
  return (
    <button
      className="toggle-sequence-flow-button"
      title={!showSequenceFlow ? 'Show sequence flow' : 'Hide sequence flow'}
      aria-label={!showSequenceFlow ? 'Show sequence flow' : 'Hide sequence flow'}
      onClick={() => setShowSequenceFlow(!showSequenceFlow)}
    >
      <GiStrikingArrows style={{ opacity: !showSequenceFlow ? '0.33' : '1.0', fontSize: '133%' }} />
    </button>
  );
};
