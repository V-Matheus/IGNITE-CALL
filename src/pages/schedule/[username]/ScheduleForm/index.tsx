import { useState } from 'react';
import { CalendarStep } from './CalendarStep';
import { ConfirmeStep } from './ConfirmStep';

export function ScheduleFomr() {
  const [selectedDataTime, setSelectedDataTime] = useState<Date | null>();

  function handleClearSelectedDateTime() {
    setSelectedDataTime(null);
  }

  if (selectedDataTime) {
    return (
      <ConfirmeStep
        schedulingDate={selectedDataTime}
        onCancelConfirmation={handleClearSelectedDateTime}
      />
    );
  }

  return <CalendarStep onSelectDatetime={setSelectedDataTime} />;
}
